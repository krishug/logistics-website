/**
 * POST /api/users/login
 * Accepts: application/x-www-form-urlencoded or application/json
 */
var store = require('../../lib/store');

module.exports = async function (req, res) {
  // Vercel body-parser already parsed for us
  var username = (req.body && (req.body.username || '')) || '';
  var password = (req.body && (req.body.password || '')) || '';

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
};
