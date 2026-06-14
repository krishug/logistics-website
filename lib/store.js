/**
 * In-memory account store for Vercel demo.
 * Data persists across warm invocations but resets on cold start.
 * For production, replace with a real database.
 */
(function () {
  'use strict';

  // Use globalThis to persist across warm invocations in serverless
  if (!globalThis.__demo_store) {
    globalThis.__demo_store = {
      accounts: [
        {
          id: 1,
          username: 'admin',
          password: 'admin123',
          realName: '管理员',
          role: 'admin',
          token: '',
          createdAt: new Date().toISOString()
        }
      ],
      nextId: 2
    };
    console.log('[demo-store] Seeded default admin account: admin / admin123');
  }

  var store = globalThis.__demo_store;

  function findByUsername(username) {
    return store.accounts.find(function (a) { return a.username === username; }) || null;
  }

  function findByToken(token) {
    return store.accounts.find(function (a) { return a.token === token; }) || null;
  }

  function createAccount(username, password, realName, role) {
    var account = {
      id: store.nextId++,
      username: username,
      password: password,
      realName: realName || '',
      role: role || 'user',
      token: '',
      createdAt: new Date().toISOString()
    };
    store.accounts.push(account);
    return account;
  }

  function setToken(account, token) {
    account.token = token;
  }

  module.exports = {
    findByUsername: findByUsername,
    findByToken: findByToken,
    createAccount: createAccount,
    setToken: setToken
  };
})();
