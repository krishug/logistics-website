(function () {
  'use strict';

  /* ==========================================
     Auth Module - 认证模块
     Roles: admin, warehouse, finance, user
     ========================================== */

  var roles = {
    admin:    { code: 'admin',    role: '管理员',     title: '管理员端',  app: 'app-admin.html',    icon: '管' },
    warehouse:{ code: 'warehouse',role: '仓库管理',   title: '仓库端',    app: 'app-warehouse.html', icon: '仓' },
    finance:  { code: 'finance',  role: '财务',       title: '财务端',    app: 'app-finance.html',   icon: '财' },
    user:     { code: 'user',     role: '普通用户',   title: '用户端',    app: 'app-user.html',      icon: '客' }
  };

  function text(value) {
    var raw = String(value || '');
    try {
      var parsed = JSON.parse(raw);
      if (typeof parsed === 'string') return parsed;
    } catch (_) {}
    return raw.replace(/^"|"$/g, '').trim();
  }

  function normalizeRole(value) {
    var role = text(value);
    if (role === 'admin' || role === '管理员') return '管理员';
    if (role === 'finance' || role === '财务') return '财务';
    if (role === 'user' || role === 'customer' || role === '普通用户') return '普通用户';
    if (role === 'warehouse' || role === '仓库' || role === '仓库管理') return '仓库管理';
    return role;
  }

  function roleCode(value) {
    var role = normalizeRole(value);
    if (role === '管理员') return 'admin';
    if (role === '财务') return 'finance';
    if (role === '普通用户') return 'user';
    if (role === '仓库管理') return 'warehouse';
    return '';
  }

  function token() {
    return text(localStorage.getItem('Token') || localStorage.getItem('token') || '');
  }

  function clearAuth() {
    ['Token','token','userId','role','username','adminName','dm_entry_role','dm_entry_code'].forEach(function (key) {
      localStorage.removeItem(key);
      sessionStorage.removeItem(key);
    });
  }

  function storeSession(payload, config) {
    var savedToken = payload.token || payload.Token || '';
    localStorage.setItem('Token', savedToken);
    localStorage.setItem('token', savedToken);
    localStorage.setItem('userId', payload.userId || '');
    localStorage.setItem('role', config.role);
    localStorage.setItem('username', payload.username || '');
    localStorage.setItem('adminName', payload.username || '');
    localStorage.setItem('dm_entry_role', config.role);
    localStorage.setItem('dm_entry_code', config.code);
  }

  function api(path, options) {
    var next = options || {};
    next.headers = next.headers || {};
    if (!next.headers.Accept) next.headers.Accept = 'application/json';
    var savedToken = token();
    if (savedToken) next.headers.Token = savedToken;
    return fetch('/api' + path, next).then(function (response) {
      return response.json().catch(function () {
        return { code: response.ok ? 0 : response.status, msg: response.statusText };
      });
    });
  }

  function json(path, body) {
    return api(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body || {})
    });
  }

  function requireRole(code) {
    var config = roles[code];
    if (!config) return false;
    if (!token()) {
      location.replace('/login.html');
      return false;
    }
    if (roleCode(localStorage.getItem('role')) !== code || localStorage.getItem('dm_entry_code') !== code) {
      clearAuth();
      location.replace('/login.html');
      return false;
    }
    return true;
  }

  window.DmAuth = {
    roles: roles,
    api: api,
    json: json,
    token: token,
    text: text,
    clearAuth: clearAuth,
    storeSession: storeSession,
    normalizeRole: normalizeRole,
    roleCode: roleCode,
    requireRole: requireRole
  };
})();
