(function () {
  'use strict';
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
