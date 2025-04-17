export default class BasePage {
  constructor() {
    
    this.header = this.createHeader();
    this.nav = this.createNavigation();
    this.footer = this.createFooter();
    this.main = document.createElement('main');
    this.main.className = 'main';
  }

  createHeader() {
    const header = document.createElement('header');
    header.className = 'header';
    header.innerHTML = `
      <img src="./images/logo.png" alt="NSU Logo" class="logo">
      <h1 class="header-title">NSUer Connect</h1>
    `;
    return header;
  }

 createNavigation() {
  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.innerHTML = `
    <ul class="nav-list">
      <li id="nav-dashboard" class="nav-item">
        <a href="dashboard.html" class="nav-link">
          <i class="fas fa-home nav-icon"></i>
          <span class="nav-text">Dashboard</span>
        </a>
      </li>
      <li id="nav-courses" class="nav-item">
        <a href="courses.html" class="nav-link">
          <i class="fas fa-book nav-icon"></i>
          <span class="nav-text">Courses</span>
        </a>
      </li>
      <li id="nav-routine" class="nav-item">
        <a href="routine.html" class="nav-link">
          <i class="fas fa-calendar-week nav-icon"></i>
          <span class="nav-text">Routine</span>
        </a>
      </li>
      <li id="nav-reminders" class="nav-item">
        <a href="reminders.html" class="nav-link">
          <i class="fas fa-clock nav-icon"></i>
          <span class="nav-text">Reminders</span>
        </a>
      </li>
      <li id="nav-cgpa" class="nav-item">
        <a href="cgpa_analysis.html" class="nav-link">
          <i class="fas fa-chart-line nav-icon"></i>
          <span class="nav-text">CGPA Analysis</span>
        </a>
      </li>
      <li id="nav-logout" class="nav-item">
        <a href="index.html" class="nav-link">
          <i class="fas fa-sign-out-alt nav-icon"></i>
          <span class="nav-text">Logout</span>
        </a>
      </li>
    </ul>
  `;
  return nav;
}

  createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
      <p class="footer-text">&copy; ${new Date().getFullYear()} NSUer Connect. All rights reserved.</p>
    `;
    return footer;
  }

  setActiveNavLink(page) {
    // First reset all active states
    const navItems = this.nav?.querySelectorAll('.nav-item');
    if (!navItems) return;
    
    navItems.forEach(item => {
        item.classList.remove('active');
        const link = item.querySelector('.nav-link');
        if (link) link.classList.remove('active');
    });

    // Try to find matching item by href first (original behavior)
    let activeFound = false;
    const links = this.nav?.querySelectorAll('.nav-link');
    if (links) {
        links.forEach(link => {
            if (link.getAttribute('href').includes(page)) {
                link.classList.add('active');
                link.closest('.nav-item')?.classList.add('active');
                activeFound = true;
            }
        });
    }

    // If no match found by href, try by ID (new behavior)
    if (!activeFound) {
        const pageKey = page.replace('.html', '');
        const navItem = this.nav?.querySelector(`#nav-${pageKey}`);
        if (navItem) {
            navItem.classList.add('active');
            const link = navItem.querySelector('.nav-link');
            if (link) link.classList.add('active');
        }
    }
}

  setContent(content) {
    this.main.innerHTML = content;
  }

  render() {
    const container = document.querySelector('.container');
    if (!container) return;
    
    container.innerHTML = '';
    container.appendChild(this.header);

    
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage !== 'index.html') {
      container.appendChild(this.nav);
    }

    container.appendChild(this.main);
    container.appendChild(this.footer);
  }
}