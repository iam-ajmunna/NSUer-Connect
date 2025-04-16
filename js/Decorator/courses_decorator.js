import PageDecorator from './page_decorator.js';

class CoursesPageDecorator extends PageDecorator {
  constructor(page) {
    super(page);
  }

  render() {
    super.render();
    const coursesHTML = this.getCoursesHTML();
    this.setContent(coursesHTML);
  }

  getCoursesHTML() {
    return `
      <section id="my-courses" class="courses-section">
        <h2 class="section-title">My Courses</h2>
        <div class="table-wrapper">
          <table class="course-table">
            <thead class="table-header">
              <tr>
                <th class="table-heading">Code</th>
                <th class="table-heading">Name</th>
                <th class="table-heading">Credits</th>
                <th class="table-heading">Grade</th>
                <th class="table-heading">Grade Points</th>
              </tr>
            </thead>
            <tbody id="my-courses-table-body" class="table-body">
            </tbody>
          </table>
        </div>
      </section>
    
      <section id="cgpa-summary" class="courses-section">
        <h2 class="section-title">CGPA Summary</h2>
        <div class="cgpa-summary-container">
          <p>Total Credits: <span id="total-credits">0</span></p>
          <p>Total Grade Points: <span id="total-grade-points">0</span></p>
          <p>CGPA: <span id="total-cgpa">0.00</span></p>
        </div>
      </section>
    
      <section id="courses" class="courses-section">
        <h2 class="section-title">Course Information</h2>
        <div id="all-courses" class="course-section">
          <h3 class="subsection-title">All Courses</h3>
          <p class="section-description">Browse all courses offered at NSU.</p>
          <div class="course-filter">
            <input type="text" id="filter-input" class="filter-input" placeholder="Filter by course code or name">
            <select id="filter-select" class="filter-select">
              <option value="all">All Departments</option>
              <option value="CSE">CSE</option>
              <option value="BBA">BBA</option>
            </select>
            <button id="filter-button" class="btn btn-primary btn-filter">Filter</button>
          </div>
          <div class="table-wrapper">
            <table class="course-table">
              <thead class="table-header">
                <tr>
                  <th class="table-heading">Code</th>
                  <th class="table-heading">Name</th>
                  <th class="table-heading">Department</th>
                  <th class="table-heading">Category</th>
                  <th class="table-heading">Credits</th>
                  <th class="table-heading">Add</th>
                </tr>
              </thead>
              <tbody id="course-table-body" class="table-body">
              </tbody>
            </table>
          </div>
          <div class="pagination-controls" id="pagination-controls">
            <button id="prev-page" class="btn btn-secondary pagination-button">Previous</button>
            <div id="page-numbers" class="page-numbers">
            </div>
            <button id="next-page" class="btn btn-secondary pagination-button">Next</button>
          </div>
        </div>
      </section>
    `;
  }
}

export default CoursesPageDecorator;