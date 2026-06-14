/**
 * POST /api/dm/accounts/register
 * Accepts: application/json
 */
var store = require('../../lib/store');

module.exports = async function (req, res) {
  var username = (req.body && (req.body.username || '')) || '';
  var password = (req.body && (req.body.password || '')) || '';
  var realName = (req.body && (req.body.realName || '')) || '';

  if (!username || !password) {
    return res.status(200).json({ code: 1, msg: '账号和密码不能为空' });
  }
  if (username.length < 2) {
    return res.status(200).json({ code: 1, msg: '账号至少2个字符' });
  }
  if (password.length < 4) {
    return res.status(200).json({ code: 1, msg: '密码至少4个字符' });
  }

  var existing = store.findByUsername(username);
  if (existing) {
    return res.status(200).json({ code: 1, msg: '该账号已被注册' });
  }

  store.createAccount(username, password, realName, 'user');

  return res.status(200).json({ code: 0, msg: '注册成功' });
};
