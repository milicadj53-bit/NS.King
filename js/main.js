// NS King – sitne interakcije: meni na telefonu, klizač pre/posle, Za dom / Za firme
(function () {
  // Mobilni meni
  var btn = document.querySelector('[data-menu-btn]');
  var menu = document.getElementById('mobile-nav');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Klizač pre / posle
  document.querySelectorAll('[data-ba]').forEach(function (box) {
    var input = box.querySelector('input[type="range"]');
    if (!input) return;
    var set = function () { box.style.setProperty('--pos', input.value + '%'); };
    input.addEventListener('input', set);
    input.addEventListener('change', set);
    set();
  });

  // Tabovi Za dom / Za firme
  document.querySelectorAll('[data-tabs]').forEach(function (root) {
    var tabs = root.querySelectorAll('[role="tab"]');
    var show = function (name) {
      tabs.forEach(function (t) {
        var on = t.getAttribute('data-tab') === name;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
      });
      root.querySelectorAll('[data-panel]').forEach(function (p) {
        p.hidden = p.getAttribute('data-panel') !== name;
      });
    };
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { show(t.getAttribute('data-tab')); });
      t.addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        var next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        next.focus(); show(next.getAttribute('data-tab'));
      });
    });
  });

  // Mapa: učitava se tek na klik (brže i bez Google kolačića dok posetilac ne zatraži)
  document.querySelectorAll('[data-map]').forEach(function (box) {
    var b = box.querySelector('[data-map-load]');
    if (!b) return;
    b.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = box.getAttribute('data-src');
      f.title = 'Mapa: Kosančić Ivana 17, Novi Sad';
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      box.appendChild(f);
      box.classList.add('loaded');
    });
  });
})();
