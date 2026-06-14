/**
 * GET /api/user/info
 * Requires: Token header
 */
var store = require('../../lib/store');

module.exports = async function (req, res) {
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
};
