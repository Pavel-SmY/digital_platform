(function () {
  var currentPage = location.pathname.split('/').pop() || 'index.html';

  // ===== HEADER =====
  var headerHTML = '<header class="header">' +
    '<a href="index.html" class="header-logo">' +
      '<div class="header-logo-text">ЦИФРОВАЯ<br>ПЛАТФОРМА</div>' +
    '</a>' +
    '<a href="#" class="header-company">' +
      'ОАО \u00AB\u0413\u0430\u0437\u043F\u0440\u043E\u043C\u00BB' +
      '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 6l4 4 4-4"/></svg>' +
    '</a>' +
    '<a href="#" class="header-services-btn">' +
      '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="1" width="6" height="6" rx="1"/><rect x="9" y="1" width="6" height="6" rx="1"/><rect x="1" y="9" width="6" height="6" rx="1"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>' +
      ' \u0423\u0441\u043B\u0443\u0433\u0438' +
    '</a>' +
    '<div class="header-right">' +
      '<a href="#" class="header-lang">RU</a>' +
      '<a href="#" class="header-icon-btn" title="\u041F\u043E\u0438\u0441\u043A">' +
        '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="5.5"/><path d="M12 12l4 4"/></svg>' +
      '</a>' +
      '<a href="#" class="header-icon-btn" title="\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430">' +
        '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 10V8a6 6 0 0112 0v2"/><path d="M1 11v2a2 2 0 002 2h1v-6H3a2 2 0 00-2 2zM17 11v2a2 2 0 01-2 2h-1v-6h1a2 2 0 012 2z"/></svg>' +
      '</a>' +
      '<a href="#" class="header-icon-btn header-notif-btn" title="\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F">' +
        '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13.5 6.5a4.5 4.5 0 10-9 0c0 5-2 6.5-2 6.5h13s-2-1.5-2-6.5M10.3 15a1.5 1.5 0 01-2.6 0"/></svg>' +
        '<span class="header-notif-dot"></span>' +
      '</a>' +
      '<a href="#" class="header-user">' +
        '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="10" cy="7" r="4"/><path d="M3 18c0-3.5 3.1-6 7-6s7 2.5 7 6"/></svg>' +
        '<div class="header-user-info">' +
          '<span class="header-user-name">\u0418\u0432\u0430\u043D\u043E\u0432 \u0418.\u0418.</span>' +
          '<span class="header-user-org">\u041E\u0410\u041E \u00AB\u0413\u0430\u0437\u043F\u0440\u043E\u043C\u00BB</span>' +
        '</div>' +
      '</a>' +
      '<a href="login.html" class="header-icon-btn" title="\u0412\u044B\u0439\u0442\u0438">' +
        '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6.5 2H3a1 1 0 00-1 1v12a1 1 0 001 1h3.5"/><path d="M12 12.5l4-3.5-4-3.5"/><path d="M16 9H7"/></svg>' +
      '</a>' +
    '</div>' +
  '</header>';

  // ===== SIDEBAR =====
  var sidebarItems = [
    { label: '\u0413\u043B\u0430\u0432\u043D\u0430\u044F', href: 'index.html', icon: '<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 7l7-5 7 5v8a1 1 0 01-1 1H3a1 1 0 01-1-1V7z"/><path d="M7 16V10h4v6"/></svg>' },
    { label: '\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B', href: 'documents.html', icon: '<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 2h10a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z"/><path d="M6 6h6M6 9h6M6 12h3"/></svg>', badge: '6' },
    { label: '\u041A\u0430\u0442\u0430\u043B\u043E\u0433', href: 'catalog.html', icon: '<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="14" height="14" rx="2"/><path d="M6 6h6M6 9h6M6 12h4"/></svg>', badge: '8' },
    { label: '\u0417\u0430\u043F\u0440\u043E\u0441\u044B', href: '#', icon: '<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3h12v12H3z"/><path d="M3 7h12M7 7v8"/></svg>', badge: '6' },
    { label: '\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438', href: '#', icon: '<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="6" r="3"/><path d="M3 16c0-3 2.7-5 6-5s6 2 6 5"/></svg>', chevron: true },
    { label: '\u0424\u0438\u043D. \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B', href: '#', icon: '<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 2h10a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z"/><path d="M6 6h6M6 9h6"/></svg>' },
    { label: '\u041D\u043E\u0432\u043E\u0441\u0442\u0438', href: '#', icon: '<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 4h14v10a2 2 0 01-2 2H4a2 2 0 01-2-2V4z"/><path d="M2 4l7 5 7-5"/></svg>' },
    { label: 'API Portal', href: 'api-portal.html', icon: '<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 4l-4 5 4 5"/><path d="M12 4l4 5-4 5"/><path d="M10 2l-2 14"/></svg>' }
  ];

  // Also match pages that are sub-pages of a section
  var pageToSidebar = {
    'index.html': 'index.html',
    'catalog.html': 'catalog.html',
    'documents.html': 'documents.html',
    'api-portal.html': 'api-portal.html',
    'certificates.html': 'index.html',
    'reg-clients.html': 'index.html',
    'listing.html': 'index.html'
  };

  var activePage = pageToSidebar[currentPage] || currentPage;

  var sidebarHTML = '<aside class="sidebar"><nav class="sidebar-nav">';
  for (var i = 0; i < sidebarItems.length; i++) {
    var item = sidebarItems[i];
    var isActive = item.href === activePage;
    sidebarHTML += '<a href="' + item.href + '" class="sidebar-item' + (isActive ? ' active' : '') + '">';
    sidebarHTML += item.icon;
    sidebarHTML += ' ' + item.label;
    if (item.badge) {
      sidebarHTML += '<span class="sidebar-badge">' + item.badge + '</span>';
    }
    if (item.chevron) {
      sidebarHTML += '<span class="sidebar-item-chevron"><svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 5.5l3 3 3-3"/></svg></span>';
    }
    sidebarHTML += '</a>';
  }
  sidebarHTML += '</nav>';
  sidebarHTML += '<a href="#" class="sidebar-collapse">' +
    '<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 4L6 9l6 5"/></svg>' +
    ' \u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C' +
  '</a>';
  sidebarHTML += '</aside>';

  // ===== SERVICES DROPDOWN =====
  var servicesItems = [
    { title: '\u041B\u0438\u0441\u0442\u0438\u043D\u0433 \u0438 \u0431\u0438\u0440\u0436\u0435\u0432\u044B\u0435 \u043E\u0431\u043B\u0438\u0433\u0430\u0446\u0438\u0438', desc: '\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u043E\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0438 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043D\u043E\u0439 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043D\u0430 \u0444\u043E\u043D\u0434\u043E\u0432\u043E\u043C \u0440\u044B\u043D\u043A\u0435', href: 'listing.html' },
    { title: 'Compliance Tool', desc: '\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u043E\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0438 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043D\u043E\u0439 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043D\u0430 \u0444\u043E\u043D\u0434\u043E\u0432\u043E\u043C \u0440\u044B\u043D\u043A\u0435', href: '#' },
    { title: '\u0411\u0443\u043A\u0431\u0438\u043B\u0434\u0435\u0440', desc: '\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u043E\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0438 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043D\u043E\u0439 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043D\u0430 \u0444\u043E\u043D\u0434\u043E\u0432\u043E\u043C \u0440\u044B\u043D\u043A\u0435', href: '#' },
    { title: '\u0411\u0430\u043D\u043A \u043A\u043B\u0438\u0435\u043D\u0442', desc: '\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u043E\u0439 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u0438 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043D\u043E\u0439 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043D\u0430 \u0444\u043E\u043D\u0434\u043E\u0432\u043E\u043C \u0440\u044B\u043D\u043A\u0435', href: '#' }
  ];

  var arrowSvg = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 3l5 5-5 5"/><path d="M3 8h10"/></svg>';
  var cardIconSvg = '<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="14" height="14" rx="2"/><path d="M6 6h6M6 9h6M6 12h4"/></svg>';

  var dropdownHTML = '<div class="services-dropdown-overlay" id="servicesOverlay"></div>' +
    '<div class="services-dropdown" id="servicesDropdown"><div class="services-dropdown-grid">';
  for (var d = 0; d < servicesItems.length; d++) {
    var si = servicesItems[d];
    dropdownHTML += '<a href="' + (si.href || '#') + '" class="services-dropdown-card">' +
      '<div class="services-dropdown-card-icon">' + cardIconSvg + '</div>' +
      '<div class="services-dropdown-card-body">' +
        '<div class="services-dropdown-card-header">' +
          '<span class="services-dropdown-card-title">' + si.title + '</span>' +
          '<span class="services-dropdown-card-arrow">' + arrowSvg + '</span>' +
        '</div>' +
        '<div class="services-dropdown-card-desc">' + si.desc + '</div>' +
      '</div>' +
    '</a>';
  }
  dropdownHTML += '</div></div>';

  // ===== INJECT =====
  // Insert header at the beginning of body
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  // Insert services dropdown right after header
  var headerEl = document.querySelector('.header');
  if (headerEl) {
    headerEl.insertAdjacentHTML('afterend', dropdownHTML);
  }

  // Find .layout and insert sidebar as first child
  var layout = document.querySelector('.layout');
  if (layout) {
    layout.insertAdjacentHTML('afterbegin', sidebarHTML);
  }

  // ===== SERVICES DROPDOWN TOGGLE =====
  var servicesBtn = document.querySelector('.header-services-btn');
  var dropdown = document.getElementById('servicesDropdown');
  var overlay = document.getElementById('servicesOverlay');

  function toggleServices(e) {
    if (e) e.preventDefault();
    var isOpen = dropdown.classList.contains('open');
    if (isOpen) {
      dropdown.classList.remove('open');
      overlay.classList.remove('open');
      servicesBtn.classList.remove('active');
    } else {
      dropdown.classList.add('open');
      overlay.classList.add('open');
      servicesBtn.classList.add('active');
    }
  }

  if (servicesBtn && dropdown && overlay) {
    servicesBtn.addEventListener('click', toggleServices);
    overlay.addEventListener('click', toggleServices);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && dropdown.classList.contains('open')) {
        toggleServices();
      }
    });
  }
})();
