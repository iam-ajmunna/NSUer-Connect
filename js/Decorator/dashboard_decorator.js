import PageDecorator from './page_decorator.js';

export default class DashboardDecorator extends PageDecorator {
  constructor(page) {
    super(page);
  }

  render() {
    super.render(); 
    const dashboardHTML = this.getDashboardHTML();
    this.page.setContent(dashboardHTML); 
  }

  getDashboardHTML() {
    return `
      <section class="dashboard">
        <div class="welcome-banner">
          <h2 class="welcome-title">Welcome, Assaduzzaman Munna!</h2>
          <p class="welcome-text">Your personalized academic hub.</p>
        </div>
        <div class="dashboard-widgets">
          <div class="widget">
            <div class="widget-header">
              <h3 class="widget-title">Upcoming Reminders</h3>
              <a href="reminders.html" class="widget-link">View All</a>
            </div>
            <ul class="reminder-list">
              <li class="reminder-item">
                <span class="reminder-time">02:40 PM</span>
                <span class="reminder-text">Final Project Demo on CSE327</span>
              </li>
              <li class="reminder-item">
                <span class="reminder-time">12:00 PM</span>
                <span class="reminder-text">Assignment Submission for CSE373</span>
              </li>
            </ul>
          </div>
          <div class="widget">
            <div class="widget-header">
              <h3 class="widget-title">Current Courses</h3>
              <a href="courses.html" class="widget-link">View Details</a>
            </div>
            <ul class="course-list">
              <li class="course-item">CSE327 - 08</li>
              <li class="course-item">CSE373 - 13</li>
              <li class="course-item">CSE299 - 06</li>
            </ul>
          </div>
          <div class="widget">
            <div class="widget-header">
              <h3 class="widget-title">CGPA</h3>
              <a href="cgpa_analysis.html" class="widget-link">Analyze</a>
            </div>
            <p class="cgpa-value">3.70</p>
          </div>
        </div>
      </section>
    `;
  }
}