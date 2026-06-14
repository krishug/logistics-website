(function () {
  'use strict';

  var auth = window.DmAuth;

  /* ----- Init i18n ----- */
  if (typeof window.i18n !== 'undefined') {
    window.i18n.init();
  }

  /* ----- Elements ----- */
  var loginForm    = document.querySelector('[data-login-form]');
  var registerForm = document.querySelector('[data-register-form]');
  var errorEl      = document.querySelector('[data-error]');
  var modeBtns     = document.querySelectorAll('[data-mode]');

  /* ----- Helpers ----- */
  function setError(msg) {
    if (errorEl) errorEl.textContent = msg || '';
  }

  function setBusy(form, busy, label) {
    var btn = form && form.querySelector('.submit-btn');
    if (!btn) return;
    var originalLabel = btn.getAttribute('data-original-label') || btn.textContent;
    if (!btn.getAttribute('data-original-label')) {
      btn.setAttribute('data-original-label', originalLabel);
    }
    btn.disabled = busy;
    btn.textContent = busy ? label : originalLabel;
  }

  function setMode(mode) {
    modeBtns.forEach(function (b) {
      b.classList.toggle('active', b.dataset.mode === mode);
    });
    if (loginForm) loginForm.classList.toggle('hidden', mode !== 'login');
    if (registerForm) registerForm.classList.toggle('hidden', mode !== 'register');
    setError('');
  }

  /* ----- Tab switching ----- */
  modeBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setMode(btn.dataset.mode);
    });
  });

  setMode('login');

  /* ----- Auto-redirect if already logged in ----- */
  var currentCode = auth.roleCode(localStorage.getItem('role'));
  if (auth.token() && auth.roles[currentCode]) {
    location.replace(auth.roles[currentCode].app);
    return;
  }

  /* ----- Login submission ----- */
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      setError('');
      setBusy(loginForm, true, '登录中...');

      var data = new FormData(loginForm);
      var body = new URLSearchParams();
      body.set('username', String(data.get('username') || '').trim());
      body.set('password', String(data.get('password') || ''));

      fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'Accept': 'application/json'
        },
        body: body.toString()
      })
        .then(function (res) { return res.json(); })
        .then(function (result) {
          if (result.code !== 0) throw new Error(result.msg || '账号或密码不正确');
          var returnedRole = auth.normalizeRole(result.role);
          var code = auth.roleCode(returnedRole);
          var config = auth.roles[code];
          if (!config) throw new Error('账号身份无效，请联系管理员');
          result.username = body.get('username');
          auth.storeSession(result, config);
          location.replace(config.app);
        })
        .catch(function (err) {
          setError(err.message || '登录失败');
        })
        .finally(function () {
          setBusy(loginForm, false);
        });
    });
  }

  /* ----- Register submission ----- */
  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      setError('');
      setBusy(registerForm, true, '注册中...');

      var data = new FormData(registerForm);
      auth.json('/dm/accounts/register', {
        username: String(data.get('username') || '').trim(),
        password: String(data.get('password') || ''),
        realName: String(data.get('realName') || '').trim()
      })
        .then(function (result) {
          if (result.code !== 0) throw new Error(result.msg || '注册失败');
          registerForm.reset();
          setMode('login');
          setError('注册成功，请直接登录');
        })
        .catch(function (err) {
          setError(err.message || '注册失败');
        })
        .finally(function () {
          setBusy(registerForm, false);
        });
    });
  }

})();
