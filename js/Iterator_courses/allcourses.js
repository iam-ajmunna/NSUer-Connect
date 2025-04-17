import CoursesIterator from './Iterator_courses/courses_iterator.js';
import { allCourses } from './courses.js';


// ─── CONSTANTS & STATE ───────────────────────────────────────

const coursesPerPage = 20;
const filterSelect   = document.getElementById('filter-select');
const filterInput    = document.getElementById('filter-input');
const filterButton   = document.getElementById('filter-button');

const coursesTableBody   = document.getElementById('course-table-body');
const paginationControls = document.getElementById('pagination-controls');
const prevBtn            = document.getElementById('prev-page');
const nextBtn            = document.getElementById('next-page');

let allCourses       = [ /* … your full hard‑coded array … */ ];
let filteredCourses  = [...allCourses];     // start unfiltered
let iterator         = new CoursesIterator(filteredCourses, coursesPerPage);

// ─── RENDERING ──────────────────────────────────────────────

function displayCourses() {
  // 1) Clear
  coursesTableBody.innerHTML = '';

  // 2) Pull only this page’s courses
  const pageItems = iterator.next();

  // 3) Render each row
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
  // Disable Prev if page 1, Next if no more
  prevBtn.disabled = iterator.currentPage === 1;
  nextBtn.disabled = !iterator.hasNext();

  // Hide controls entirely if only one page
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  paginationControls.style.display = totalPages > 1 ? 'flex' : 'none';
}

function updateView() {
  displayCourses();
  displayPaginationControls();
}

// ─── FILTERING ──────────────────────────────────────────────

filterButton.addEventListener('click', () => {
  const dept = filterSelect.value;
  const txt  = filterInput.value.trim().toLowerCase();

  filteredCourses = allCourses.filter(course => {
    const deptMatch = dept === 'all' || course.Department === dept;
    const textMatch = txt === '' ||
      course.CourseCode.toLowerCase().includes(txt) ||
      course.CourseName.toLowerCase().includes(txt);

    return deptMatch && textMatch;
  });

  // 4) Re‑init iterator, reset to page 1
  iterator = new CoursesIterator(filteredCourses, coursesPerPage);
  updateView();
});

// ─── PAGINATION BUTTONS ──────────────────────────────────

prevBtn.addEventListener('click', () => {
  iterator.goToPreviousPage();
  updateView();
});

nextBtn.addEventListener('click', () => {
  iterator.goToNextPage();
  updateView();
});
// ─── INITIAL LOAD ─────────────────────────────────────────

updateView();
