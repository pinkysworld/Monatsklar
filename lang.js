(function () {
  'use strict';
  var language = new URLSearchParams(location.search).get('lang');
  if (language !== 'de' && language !== 'en') {
    try { language = localStorage.getItem('mk_lang'); } catch (_) {}
  }
  if (language !== 'de' && language !== 'en') language = 'de';
  function applyLanguage() {
    document.documentElement.lang = language;
    if (document.body) {
      document.querySelectorAll('button.lang').forEach(function (button) {
        button.setAttribute('aria-label', language === 'de' ? 'EN – Switch to English' : 'DE – Zu Deutsch wechseln');
      });
      var pageName = location.pathname.split('/').pop();
      var titles = {
        'support.html': ['Hilfe & Support – Monatsklar', 'Help & support – Monatsklar'],
        'privacy.html': ['Datenschutzerklärung – Monatsklar', 'Privacy policy – Monatsklar'],
        'impressum.html': ['Impressum – Monatsklar', 'Legal notice – Monatsklar']
      };
      if (titles[pageName]) document.title = titles[pageName][language === 'de' ? 0 : 1];
      document.querySelectorAll('a[href]').forEach(function (link) {
        if (link.getAttribute('href').charAt(0) === '#') return;
        var url = new URL(link.getAttribute('href'), location.href);
        if (url.origin === location.origin && /(?:\/|\.html)$/.test(url.pathname)) {
          url.searchParams.set('lang', language);
          link.setAttribute('href', url.pathname + url.search + url.hash);
        }
      });
      if (location.pathname.endsWith('/') || location.pathname.endsWith('/index.html')) {
        document.title = language === 'de' ? 'Monatsklar – Dein Offline-Haushaltsbuch für Windows' : 'Monatsklar – Your offline budget book for Windows';
      }
    }
  }
  applyLanguage();
  window.toggleLang = function () {
    language = language === 'de' ? 'en' : 'de';
    try { localStorage.setItem('mk_lang', language); } catch (_) {}
    var url = new URL(location.href);
    url.searchParams.set('lang', language);
    history.replaceState(null, '', url);
    applyLanguage();
  };
  window.selectView = function (index, focus) {
    document.querySelectorAll('[role="tab"]').forEach(function (tab, i) {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = i !== index;
      if (focus && i === index) tab.focus();
    });
  };
  document.addEventListener('DOMContentLoaded', function () {
    applyLanguage();
    document.querySelectorAll('[role="tab"]').forEach(function (tab, index, tabs) {
      tab.addEventListener('keydown', function (event) {
        var next;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        if (next !== undefined) { event.preventDefault(); window.selectView(next, true); }
      });
    });
  });
})();
