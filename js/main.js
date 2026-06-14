(function () {
  'use strict';

  /* =============================
     1. Header scroll effect
     ============================= */
  var header = document.getElementById('header');
  var mobileToggle = document.getElementById('mobileToggle');
  var nav = document.getElementById('nav');

  function updateHeader() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* =============================
     2. Mobile nav toggle
     ============================= */
  mobileToggle.addEventListener('click', function () {
    nav.classList.toggle('open');
  });

  // Close nav on link click
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
    });
  });

  // Close nav on outside click
  document.addEventListener('click', function (e) {
    if (!header.contains(e.target)) {
      nav.classList.remove('open');
    }
  });

  /* =============================
     3. Language switch via i18n
      ============================= */
  if (typeof window.i18n !== 'undefined') {
    window.i18n.init();
  }

  /* =============================
     4. Order form submission
     ============================= */
  var orderForm = document.getElementById('orderForm');
  var orderFeedback = document.getElementById('orderFeedback');

  if (orderForm) {
    orderForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var formData = new FormData(orderForm);
      var data = {};
      formData.forEach(function (value, key) {
        data[key] = value.trim();
      });

      // Basic validation with i18n
      var _t = window.i18n ? window.i18n.t : function (k) { return k; };
      if (!data.customerName) {
        orderFeedback.textContent = _t('order.err.name');
        orderFeedback.style.color = 'var(--red)';
        return;
      }
      if (!data.phone) {
        orderFeedback.textContent = _t('order.err.phone');
        orderFeedback.style.color = 'var(--red)';
        return;
      }
      if (!data.cargoName) {
        orderFeedback.textContent = _t('order.err.cargo');
        orderFeedback.style.color = 'var(--red)';
        return;
      }
      if (!data.quantity || parseInt(data.quantity, 10) < 1) {
        orderFeedback.textContent = _t('order.err.qty');
        orderFeedback.style.color = 'var(--red)';
        return;
      }

      // Disable button during submission
      var submitBtn = orderForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = '提交中...';
      orderFeedback.textContent = '';
      orderFeedback.style.color = '';

      // Generate order number for demo
      var now = new Date();
      var orderNo = 'SD' +
        now.getFullYear() +
        String(now.getMonth() + 1).padStart(2, '0') +
        String(now.getDate()).padStart(2, '0') +
        '-' +
        String(Math.floor(Math.random() * 10000)).padStart(4, '0');

      // In production, this would POST to the backend API
      setTimeout(function () {
        var successTmpl = _t('order.success');
        orderFeedback.innerHTML = window.i18n
          ? window.i18n.format(successTmpl, { no: orderNo })
          : successTmpl.replace('{no}', orderNo);
        orderFeedback.style.color = 'var(--accent)';
        orderForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = _t('order.btn');
      }, 800);
    });
  }

  /* =============================
     5. Smooth scroll for anchor links
     ============================= */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerOffset = parseInt(getComputedStyle(document.documentElement).scrollPaddingTop, 10) || 72;
        var targetPos = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

})();
