/**
 * Vercel Serverless Function — 统一 API 入口
 * 处理所有 /api/* 请求，共享内存状态
 */
var store = require('../lib/store');

module.exports = async function (req, res) {
  var method = req.method;
  var path = req.url; // full path like /api/users/login

  // Parse body if present
  var body = req.body || {};

  // ------ CORS headers ------
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Token');

  if (method === 'OPTIONS') {
    return res.status(200).end();
  }

  // ====== POST /api/users/login ======
  if (method === 'POST' && path === '/api/users/login') {
    var username = (body.username || '').trim();
    var password = (body.password || '');

    if (!username || !password) {
      return res.status(200).json({ code: 1, msg: '请输入账号和密码' });
    }

    var account = store.findByUsername(username);
    if (!account || account.password !== password) {
      return res.status(200).json({ code: 1, msg: '账号或密码不正确' });
    }

    var token = 'token_' + Math.random().toString(36).substring(2) + Date.now();
    store.setToken(account, token);

    return res.status(200).json({
      code: 0,
      msg: '登录成功',
      token: token,
      userId: account.id,
      username: account.username,
      role: account.role
    });
  }

  // ====== POST /api/dm/accounts/register ======
  if (method === 'POST' && path === '/api/dm/accounts/register') {
    var regUsername = (body.username || '').trim();
    var regPassword = (body.password || '');
    var realName = (body.realName || '').trim();

    if (!regUsername || !regPassword) {
      return res.status(200).json({ code: 1, msg: '账号和密码不能为空' });
    }
    if (regUsername.length < 2) {
      return res.status(200).json({ code: 1, msg: '账号至少2个字符' });
    }
    if (regPassword.length < 4) {
      return res.status(200).json({ code: 1, msg: '密码至少4个字符' });
    }

    var existing = store.findByUsername(regUsername);
    if (existing) {
      return res.status(200).json({ code: 1, msg: '该账号已被注册' });
    }

    store.createAccount(regUsername, regPassword, realName, 'user');
    return res.status(200).json({ code: 0, msg: '注册成功' });
  }

  // ====== GET /api/user/info ======
  if (method === 'GET' && path === '/api/user/info') {
    var token = (req.headers && (req.headers.token || '')) || '';

    var account = store.findByToken(token);
    if (!account) {
      return res.status(401).json({ code: 401, msg: '未登录或登录已过期' });
    }

    return res.status(200).json({
      code: 0,
      data: {
        id: account.id,
        username: account.username,
        role: account.role
      }
    });
  }

  // ====== 404 ======
  res.status(404).json({ code: 404, msg: 'API not found' });
};
