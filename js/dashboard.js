import BasePage from './Decorator/base_page.js';
import DashboardPageDecorator from './Decorator/dashboard_decorator.js';

// Initialize the dashboard page
const basePage = new BasePage();
const dashboardPage = new DashboardPageDecorator(basePage);
dashboardPage.render();

// Add dashboard-specific logic here (if needed)