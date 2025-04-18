import CoursesIterator from './Iterator_courses/CoursesIterator.js';
import CoursesProxy from './courses_proxy.js';

const coursesProxy = new CoursesProxy();
const coursesPerPage = 20;

// DOM Elements
const filterSelect  = document.getElementById('filter-select');
const filterInput   = document.getElementById('filter-input');
const filterButton  = document.getElementById('filter-button');

const coursesTableBody  = document.getElementById('course-table-body');
const paginationControls = document.getElementById('pagination-controls');
const prevBtn = document.getElementById('prev-page');
const nextBtn = document.getElementById('next-page');

// Courses Data
let allCourses = coursesProxy.courses;
let filteredCourses = [...allCourses];
let iterator = new CoursesIterator(filteredCourses, coursesPerPage);

// Rendering Functions
function displayCourses() {
  coursesTableBody.innerHTML = '';
  const pageItems = iterator.next();

  pageItems.forEach(course => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${course.CourseCode}</td>
      <td>${course.CourseName}</td>
      <td>${course.Department}</td>
      <td>${course.Category}</td>
      <td>${course.Credits}</td>
    `;
    coursesTableBody.appendChild(row);
  });
}

function displayPaginationControls() {
  prevBtn.disabled = iterator.currentPage === 1;
  nextBtn.disabled = !iterator.hasNext();

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  paginationControls.style.display = totalPages > 1 ? 'flex' : 'none';
}

function updateView() {
  displayCourses();
  displayPaginationControls();
}

// Filter Logic
filterButton.addEventListener('click', () => {
  const dept = filterSelect.value;
  const txt = filterInput.value.trim().toLowerCase();

  filteredCourses = allCourses.filter(course => {
    const deptMatch = dept === 'all' || course.Department === dept;
    const textMatch = txt === '' ||
      course.CourseCode.toLowerCase().includes(txt) ||
      course.CourseName.toLowerCase().includes(txt);
    return deptMatch && textMatch;
  });

  iterator = new CoursesIterator(filteredCourses, coursesPerPage);
  updateView();
});

// Pagination Events
prevBtn.addEventListener('click', () => {
  iterator.goToPreviousPage();
  updateView();
});

nextBtn.addEventListener('click', () => {
  iterator.goToNextPage();
  updateView();
});

// Initial Load
updateView();
