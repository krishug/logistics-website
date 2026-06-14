/**
 * Vercel Serverless — Express API 入口
 * 处理所有 /api/* 请求
 */
var express = require('express');
var app = express();

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory store (取代 SQLite，适合 Vercel Serverless)
var store = require('../lib/store');

// ====== POST /api/users/login ======
app.post('/api/users/login', function (req, res) {
  var username = (req.body.username || '').trim();
  var password = (req.body.password || '');

  if (!username || !password) {
    return res.json({ code: 1, msg: '请输入账号和密码' });
  }

  var account = store.findByUsername(username);
  if (!account || account.password !== password) {
    return res.json({ code: 1, msg: '账号或密码不正确' });
  }

  var token = 'token_' + Math.random().toString(36).substring(2) + Date.now();
  store.setToken(account, token);

  res.json({
    code: 0,
    msg: '登录成功',
    token: token,
    userId: account.id,
    username: account.username,
    role: account.role
  });
});

// ====== POST /api/dm/accounts/register ======
app.post('/api/dm/accounts/register', function (req, res) {
  var username = (req.body.username || '').trim();
  var password = (req.body.password || '');
  var realName = (req.body.realName || '').trim();

  if (!username || !password) {
    return res.json({ code: 1, msg: '账号和密码不能为空' });
  }
  if (username.length < 2) {
    return res.json({ code: 1, msg: '账号至少2个字符' });
  }
  if (password.length < 4) {
    return res.json({ code: 1, msg: '密码至少4个字符' });
  }

  if (store.findByUsername(username)) {
    return res.json({ code: 1, msg: '该账号已被注册' });
  }

  store.createAccount(username, password, realName, 'user');
  res.json({ code: 0, msg: '注册成功' });
});

// ====== GET /api/user/info ======
app.get('/api/user/info', function (req, res) {
  var token = (req.headers.token || '');
  var account = store.findByToken(token);

  if (!account) {
    return res.status(401).json({ code: 401, msg: '未登录或登录已过期' });
  }

  res.json({
    code: 0,
    data: { id: account.id, username: account.username, role: account.role }
  });
});

// ====== Export for Vercel ======
module.exports = app;
