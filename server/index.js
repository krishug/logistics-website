/**
 * 速达物流 - 后端服务器
 *
 * Express + better-sqlite3
 * - 提供静态文件服务 (官网 + 管理端页面)
 * - 提供用户认证 API
 * - 提供运单 CRUD API (后续实现)
 */

const express = require('express');
const path = require('path');
const Database = require('better-sqlite3');

const app = express();
const PORT = process.env.PORT || 3000;

// ---- 静态文件 ----
app.use(express.static(path.join(__dirname, '..')));

// ---- 中间件 ----
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---- 数据库初始化 ----
const db = new Database(path.join(__dirname, '..', 'data.db'));
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

db.exec(`
  CREATE TABLE IF NOT EXISTS dm_account (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    username    TEXT NOT NULL UNIQUE,
    password    TEXT NOT NULL,
    real_name   TEXT DEFAULT '',
    role        TEXT NOT NULL DEFAULT 'user' CHECK(role IN ('admin','warehouse','finance','user')),
    token       TEXT DEFAULT '',
    created_at  TEXT DEFAULT (datetime('now'))
  )
`);

// Seed default admin if not exists
const adminRow = db.prepare('SELECT id FROM dm_account WHERE username = ?').get('admin');
if (!adminRow) {
  db.prepare('INSERT INTO dm_account (username, password, real_name, role) VALUES (?, ?, ?, ?)').run(
    'admin', 'admin123', '管理员', 'admin'
  );
  console.log('[seed] Created default admin account: admin / admin123');
}

// ---- API 路由 ----

// 登录
app.post('/api/users/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({ code: 1, msg: '请输入账号和密码' });
  }

  const row = db.prepare('SELECT * FROM dm_account WHERE username = ? AND password = ?').get(username, password);
  if (!row) {
    return res.json({ code: 1, msg: '账号或密码不正确' });
  }

  const token = 'token_' + Math.random().toString(36).substring(2) + Date.now();
  db.prepare('UPDATE dm_account SET token = ? WHERE id = ?').run(token, row.id);

  res.json({
    code: 0,
    msg: '登录成功',
    token: token,
    userId: row.id,
    username: row.username,
    role: row.role
  });
});

// 注册
app.post('/api/dm/accounts/register', (req, res) => {
  const { username, password, realName } = req.body;
  if (!username || !password) {
    return res.json({ code: 1, msg: '账号和密码不能为空' });
  }
  if (username.length < 2) {
    return res.json({ code: 1, msg: '账号至少2个字符' });
  }
  if (password.length < 4) {
    return res.json({ code: 1, msg: '密码至少4个字符' });
  }

  const existing = db.prepare('SELECT id FROM dm_account WHERE username = ?').get(username);
  if (existing) {
    return res.json({ code: 1, msg: '该账号已被注册' });
  }

  db.prepare('INSERT INTO dm_account (username, password, real_name, role) VALUES (?, ?, ?, ?)').run(
    username, password, realName || '', 'user'
  );

  res.json({ code: 0, msg: '注册成功' });
});

// Token 验证中间件
function authRequired(req, res, next) {
  const token = req.headers.token || '';
  const row = db.prepare('SELECT id, username, role FROM dm_account WHERE token = ?').get(token);
  if (!row) {
    return res.status(401).json({ code: 401, msg: '未登录或登录已过期' });
  }
  req.user = row;
  next();
}

// 获取当前用户信息
app.get('/api/user/info', authRequired, (req, res) => {
  res.json({ code: 0, data: req.user });
});

// ---- 启动 ----
app.listen(PORT, () => {
  console.log(`\n  🚚 速达物流系统已启动`);
  console.log(`  📍 http://localhost:${PORT}`);
  console.log(`  🔑 管理员账号: admin / admin123\n`);
});
