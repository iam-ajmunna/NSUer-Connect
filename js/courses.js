import BasePage from './Decorator/base_page.js';
import CoursesPageDecorator from './Decorator/courses_decorator.js';
import CoursesProxy from './Proxy/courses_proxy.js';

const basePage = new BasePage();
const coursesPage = new CoursesPageDecorator(basePage);
coursesPage.render();

// Initialize proxy
const coursesProxy = new CoursesProxy();

const courseTableBody = document.getElementById('course-table-body');
const filterSelect = document.getElementById('filter-select');
const filterInput = document.getElementById('filter-input');
const filterButton = document.getElementById('filter-button');
const paginationControls = document.getElementById('pagination-controls');
const pageNumbers = document.getElementById('page-numbers');

const myCoursesTableBody = document.getElementById('my-courses-table-body');
const totalCreditsElement = document.getElementById('total-credits');
const totalGradePointsElement = document.getElementById('total-grade-points');
const totalCgpaElement = document.getElementById('total-cgpa');

const coursesPerPage = 20;
let currentPage = 1;

// Grade points mapping
const gradePoints = {
  'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D+': 1.3, 'D': 1.0,
  'F': 0.0, 'I': 0.0, 'W': 0.0
};

// Array to store the user's added courses
const myCourses = [];

function init() {
  console.log('Initializing courses.js');

  // Null checks for DOM elements
  if (!courseTableBody) console.error('Course table body not found. Expected ID: course-table-body');
  if (!filterSelect) console.error('Filter select not found. Expected ID: filter-select');
  if (!filterInput) console.error('Filter input not found. Expected ID: filter-input');
  if (!filterButton) console.error('Filter button not found. Expected ID: filter-button');
  if (!paginationControls) console.error('Pagination controls not found. Expected ID: pagination-controls');
  if (!pageNumbers) console.error('Page numbers container not found. Expected ID: page-numbers');
  if (!myCoursesTableBody) console.error('My courses table body not found. Expected ID: my-courses-table-body');
  if (!totalCreditsElement) console.error('Total credits element not found. Expected ID: total-credits');
  if (!totalGradePointsElement) console.error('Total grade points element not found. Expected ID: total-grade-points');
  if (!totalCgpaElement) console.error('Total CGPA element not found. Expected ID: total-cgpa');

  // Populate department filter
  function populateFilterSelect() {
    if (!filterSelect) {
      console.warn('Cannot populate filter select: element not found');
      return;
    }
    console.log('Populating filter select');
    const departmentOptions = coursesProxy.getDepartmentOptions();
    filterSelect.innerHTML = '';
    departmentOptions.forEach(option => {
      const opt = document.createElement('option');
      opt.value = option.value;
      opt.textContent = option.label;
      filterSelect.appendChild(opt);
    });
    console.log(`Populated filter select with ${departmentOptions.length} options`);
  }

  // Builder Class for table rows
  class CourseTableRowBuilder {
    constructor() {
      this.row = document.createElement('tr');
    }

    addCell(value, className = 'table-data') {
      const cell = document.createElement('td');
      cell.classList.add(className);
      cell.textContent = value;
      this.row.appendChild(cell);
      return this;
    }

    addActionButton(text, className, dataCode, clickHandler) {
      const cell = document.createElement('td');
      const button = document.createElement('button');
      button.innerHTML = text;
      button.classList.add(...className.split(' '));
      button.dataset.code = dataCode;
      button.addEventListener('click', clickHandler);
      cell.appendChild(button);
      this.row.appendChild(cell);
      return this;
    }

    getRow() {
      return this.row;
    }
  }

  // Display courses with pagination
  function displayCourses() {
    if (!courseTableBody) {
      console.warn('Cannot display courses: courseTableBody not found');
      return;
    }

    console.log('Displaying courses for page', currentPage);
    courseTableBody.innerHTML = ''; // Clear existing content

    // Default filters for initial load
    const filters = {
      department: filterSelect && filterSelect.value ? filterSelect.value : 'all',
      search: filterInput && filterInput.value ? filterInput.value.trim() : ''
    };
    console.log('Using filters:', filters);

    const { courses, totalPages } = coursesProxy.getCourses(currentPage, coursesPerPage, filters);
    console.log(`Received ${courses.length} courses, total pages: ${totalPages}`);

    if (courses.length === 0) {
      console.warn('No courses to display');
      courseTableBody.innerHTML = '<tr><td colspan="6">No courses found</td></tr>';
      displayPaginationControls(totalPages);
      return;
    }

    if (courses.length === 0 && totalPages > 0) {
      console.log('No courses on this page, adjusting to last page');
      currentPage = totalPages;
      displayCourses();
      return;
    }

    courses.forEach((course, index) => {
      console.log(`Building row ${index + 1}: ${course.CourseCode}`);
      const rowBuilder = new CourseTableRowBuilder();
      const row = rowBuilder
        .addCell(course.CourseCode)
        .addCell(course.CourseName)
        .addCell(course.Department)
        .addCell(course.Category)
        .addCell(course.Credits)
        .addActionButton(
          '<i class="fas fa-plus"></i>',
          'btn btn-success',
          course.CourseCode,
          () => addCourseToMyCourses(course.CourseCode)
        )
        .getRow();
      courseTableBody.appendChild(row);
    });
    console.log(`Appended ${courses.length} rows to courseTableBody`);

    displayPaginationControls(totalPages);
  }

  // Display pagination controls
  function displayPaginationControls(totalPages) {
    if (!pageNumbers || !paginationControls) {
      console.warn('Cannot display pagination: pageNumbers or paginationControls not found');
      return;
    }

    console.log(`Displaying pagination for ${totalPages} pages`);
    pageNumbers.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
      const pageNumber = document.createElement('button');
      pageNumber.textContent = i;
      pageNumber.classList.add('btn', 'btn-light', 'pagination-button');
      if (i === currentPage) {
        pageNumber.classList.add('active');
      }
      pageNumber.addEventListener('click', () => {
        console.log(`Switching to page ${i}`);
        currentPage = i;
        displayCourses();
      });
      pageNumbers.appendChild(pageNumber);
    }

    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');

    if (prevButton) {
      prevButton.disabled = currentPage === 1 || totalPages === 0;
      prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
          console.log('Going to previous page');
          currentPage--;
          displayCourses();
        }
      });
    } else {
      console.warn('Previous button not found. Expected ID: prev-page');
    }

    if (nextButton) {
      nextButton.disabled = currentPage === totalPages || totalPages === 0;
      nextButton.addEventListener('click', () => {
        if (currentPage < totalPages && totalPages > 0) {
          console.log('Going to next page');
          currentPage++;
          displayCourses();
        }
      });
    } else {
      console.warn('Next button not found. Expected ID: next-page');
    }

    paginationControls.style.display = totalPages <= 1 ? 'none' : 'flex';
    console.log(`Pagination controls display set to: ${paginationControls.style.display}`);
  }

  // Filter courses
  function filterCourses() {
    if (!filterSelect || !filterInput) {
      console.warn('Cannot filter courses: filterSelect or filterInput not found');
      return;
    }
    console.log('Filtering courses');
    currentPage = 1;
    displayCourses();
  }

  // Add course to myCourses
  function addCourseToMyCourses(courseCode) {
    console.log(`Adding course: ${courseCode}`);
    const courseToAdd = coursesProxy.getCourseByCode(courseCode);
    if (!courseToAdd) {
      console.error(`Course with code ${courseCode} not found in proxy`);
      return;
    }

    if (myCourses.some(course => course.CourseCode === courseCode)) {
      console.warn(`Course ${courseCode} already added`);
      alert('Course already added!');
      return;
    }

    myCourses.push({ ...courseToAdd, grade: null, gradePoints: 0.0 });
    console.log(`Added course ${courseCode} to myCourses`);
    displayMyCourses();
    calculateCGPA();
  }

  // Display myCourses
  function displayMyCourses() {
    if (!myCoursesTableBody) {
      console.warn('Cannot display my courses: myCoursesTableBody not found');
      return;
    }

    console.log(`Displaying ${myCourses.length} courses in myCourses`);
    myCoursesTableBody.innerHTML = '';
    myCourses.forEach((course, index) => {
      console.log(`Building myCourses row ${index + 1}: ${course.CourseCode}`);
      const row = document.createElement('tr');
      row.innerHTML = `
        <td class="table-data">${course.CourseCode}</td>
        <td class="table-data">${course.CourseName}</td>
        <td class="table-data">${course.Credits}</td>
        <td class="table-data">
          <select class="grade-select" data-code="${course.CourseCode}">
            <option value="">Select Grade</option>
            <option value="A" ${course.grade === 'A' ? 'selected' : ''}>A</option>
            <option value="A-" ${course.grade === 'A-' ? 'selected' : ''}>A-</option>
            <option value="B+" ${course.grade === 'B+' ? 'selected' : ''}>B+</option>
            <option value="B" ${course.grade === 'B' ? 'selected' : ''}>B</option>
            <option value="B-" ${course.grade === 'B-' ? 'selected' : ''}>B-</option>
            <option value="C+" ${course.grade === 'C+' ? 'selected' : ''}>C+</option>
            <option value="C" ${course.grade === 'C' ? 'selected' : ''}>C</option>
            <option value="C-" ${course.grade === 'C-' ? 'selected' : ''}>C-</option>
            <option value="D+" ${course.grade === 'D+' ? 'selected' : ''}>D+</option>
            <option value="D" ${course.grade === 'D' ? 'selected' : ''}>D</option>
            <option value="F" ${course.grade === 'F' ? 'selected' : ''}>F</option>
            <option value="I" ${course.grade === 'I' ? 'selected' : ''}>I</option>
            <option value="W" ${course.grade === 'W' ? 'selected' : ''}>W</option>
          </select>
        </td>
        <td class="table-data grade-points">${course.gradePoints !== null ? course.gradePoints.toFixed(2) : '0.00'}</td>
      `;
      myCoursesTableBody.appendChild(row);
    });

    const gradeSelects = document.querySelectorAll('.grade-select');
    console.log(`Found ${gradeSelects.length} grade select elements`);
    gradeSelects.forEach(select => {
      select.addEventListener('change', updateGrade);
    });
  }

  // Update grade for a course
  function updateGrade(event) {
    const courseCode = event.target.dataset.code;
    const selectedGrade = event.target.value;
    console.log(`Updating grade for ${courseCode}: ${selectedGrade}`);

    const course = myCourses.find(course => course.CourseCode === courseCode);
    if (course) {
      course.grade = selectedGrade;
      course.gradePoints = selectedGrade ? gradePoints[selectedGrade] * course.Credits : 0.0;
      event.target.parentNode.nextElementSibling.textContent = course.gradePoints !== null ? course.gradePoints.toFixed(2) : '0.00';
      console.log(`Updated ${courseCode} gradePoints to ${course.gradePoints}`);
      calculateCGPA();
    } else {
      console.warn(`Course ${courseCode} not found in myCourses`);
    }
  }

  // Calculate CGPA
  function calculateCGPA() {
    if (!totalCreditsElement || !totalGradePointsElement || !totalCgpaElement) {
      console.warn('Cannot calculate CGPA: totalCreditsElement, totalGradePointsElement, or totalCgpaElement not found');
      return;
    }

    console.log('Calculating CGPA');
    let totalCredits = 0;
    let totalGradePoints = 0;

    myCourses.forEach(course => {
      if (course.grade) {
        totalCredits += course.Credits;
        totalGradePoints += gradePoints[course.grade] * course.Credits;
      }
    });

    const cgpa = totalCredits > 0 ? totalGradePoints / totalCredits : 0.00;
    console.log(`CGPA: ${cgpa.toFixed(2)}, Total Credits: ${totalCredits.toFixed(2)}, Total Grade Points: ${totalGradePoints.toFixed(2)}`);

    totalCreditsElement.textContent = totalCredits.toFixed(2);
    totalGradePointsElement.textContent = totalGradePoints.toFixed(2);
    totalCgpaElement.textContent = cgpa.toFixed(2);
  }

  // Event listeners
  if (filterButton) {
    filterButton.addEventListener('click', () => {
      console.log('Filter button clicked');
      filterCourses();
    });
  } else {
    console.warn('Filter button not found. Expected ID: filter-button');
  }

  // Initialize
  console.log('Starting initialization');
  populateFilterSelect();
  displayCourses();
}

// Run init immediately and on DOMContentLoaded
init();
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded fired');
  init();
});