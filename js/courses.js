import BasePage from './Decorator/base_page.js';
import CoursesPageDecorator from './Decorator/courses_decorator.js';

const basePage = new BasePage();
const coursesPage = new CoursesPageDecorator(basePage);
coursesPage.render();

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

const coursesPerPage = 60;
let currentPage = 1;
let allCourses = [];
let filteredCourses = [];

// This object maps letter grades to grade points
const gradePoints = {
  'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D+': 1.3, 'D': 1.0,
  'F': 0.0, 'I': 0.0, 'W': 0.0
};

// Array to store the user's added courses
const myCourses = [];

async function fetchCourses(page = 1) {
  try {
    const response = await fetch(`php/get_course.php?page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }
    const data = await response.json();
    allCourses = data.data.map(course => ({
      CourseCode: course.CourseCode,
      CourseName: course.CourseName,
      Department: course.CourseDescription.includes('CSE') ? 'CSE' : 'BBA', // Simplified department mapping
      Category: course.CourseDescription,
      Credits: course.CrHour
    }));
    filteredCourses = allCourses;
    currentPage = data.currentPage;
    displayCourses();
    displayPaginationControls(data.totalPages);
  } catch (error) {
    console.error('Error fetching courses:', error);
    courseTableBody.innerHTML = '<tr><td colspan="6">Failed to load courses. Please try again later.</td></tr>';
  }
}

function displayCourses() {
  courseTableBody.innerHTML = '';

  const start = (currentPage - 1) * coursesPerPage;
  const end = start + coursesPerPage;
  const pageCourses = filteredCourses.slice(start, end);

  if (pageCourses.length === 0 && filteredCourses.length > 0) {
    currentPage = Math.ceil(filteredCourses.length / coursesPerPage);
    displayCourses();
    displayPaginationControls();
    return;
  }

  pageCourses.forEach(course => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="table-data">${course.CourseCode}</td>
      <td class="table-data">${course.CourseName}</td>
      <td class="table-data">${course.Department}</td>
      <td class="table-data">${course.Category}</td>
      <td class="table-data">${course.Credits}</td>
      <td class="table-data">
        <button class="btn add-course-btn" data-code="${course.CourseCode}">
          <i class="fas fa-plus"></i>
        </button>
      </td>
    `;
    courseTableBody.appendChild(row);
  });

  // Add event listeners to the "Add" buttons
  const addCourseButtons = document.querySelectorAll('.add-course-btn');
  addCourseButtons.forEach(button => {
    button.addEventListener('click', function() {
      addCourseToMyCourses(this.dataset.code);
    });
  });
}

function displayPaginationControls(totalPages) {
  pageNumbers.innerHTML = '';
  totalPages = totalPages || Math.ceil(filteredCourses.length / coursesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageNumber = document.createElement('button');
    pageNumber.textContent = i;
    pageNumber.classList.add('btn', 'btn-light', 'pagination-button');
    if (i === currentPage) {
      pageNumber.classList.add('active');
    }
    pageNumber.addEventListener('click', () => {
      currentPage = i;
      fetchCourses(currentPage); // Fetch new page
    });
    pageNumbers.appendChild(pageNumber);
  }

  const prevButton = document.getElementById('prev-page');
  const nextButton = document.getElementById('next-page');

  prevButton.disabled = currentPage === 1 || totalPages === 0;
  nextButton.disabled = currentPage === totalPages || totalPages === 0;

  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      fetchCourses(currentPage);
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages && totalPages > 0) {
      currentPage++;
      fetchCourses(currentPage);
    }
  });

  if (totalPages <= 1) {
    paginationControls.style.display = 'none';
  } else {
    paginationControls.style.display = 'flex';
  }
}

function filterCourses() {
  const selectedDepartment = filterSelect.value;
  const searchText = filterInput.value.toLowerCase();

  filteredCourses = allCourses.filter(course => {
    const departmentMatch = selectedDepartment === 'all' || course.Department === selectedDepartment;
    let textMatch = true;
    if (searchText) {
      textMatch = course.CourseCode.toLowerCase().includes(searchText) || course.CourseName.toLowerCase().includes(searchText);
    }
    return departmentMatch && textMatch;
  });

  currentPage = 1;
  displayCourses();
  displayPaginationControls();
}

function addCourseToMyCourses(courseCode) {
  const courseToAdd = allCourses.find(course => course.CourseCode === courseCode);

  if (!courseToAdd) {
    console.error(`Course with code ${courseCode} not found in allCourses.`);
    return;
  }

  if (myCourses.some(course => course.CourseCode === courseCode)) {
    alert('Course already added!');
    return;
  }

  myCourses.push({ ...courseToAdd, grade: null, gradePoints: 0.0 });
  displayMyCourses();
  calculateCGPA();
}

function displayMyCourses() {
  myCoursesTableBody.innerHTML = '';
  myCourses.forEach(course => {
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
  gradeSelects.forEach(select => {
    select.addEventListener('change', updateGrade);
  });
}

function updateGrade(event) {
  const courseCode = event.target.dataset.code;
  const selectedGrade = event.target.value;

  const course = myCourses.find(course => course.CourseCode === courseCode);
  if (course) {
    course.grade = selectedGrade;
    course.gradePoints = selectedGrade ? gradePoints[selectedGrade] * course.Credits : 0.0;
    event.target.parentNode.nextElementSibling.textContent = course.gradePoints !== null ? course.gradePoints.toFixed(2) : '0.00';
    calculateCGPA();
  }
}

function calculateCGPA() {
  let totalCredits = 0;
  let totalGradePoints = 0;

  myCourses.forEach(course => {
    if (course.grade) {
      totalCredits += course.Credits;
      totalGradePoints += gradePoints[course.grade] * course.Credits;
    }
  });

  const cgpa = totalCredits > 0 ? totalGradePoints / totalCredits : 0.00;

  totalCreditsElement.textContent = totalCredits.toFixed(2);
  totalGradePointsElement.textContent = totalGradePoints.toFixed(2);
  totalCgpaElement.textContent = cgpa.toFixed(2);
}

// Initial fetch
fetchCourses();

// Event Listeners
filterButton.addEventListener('click', filterCourses);
filterInput.addEventListener('input', filterCourses);
filterSelect.addEventListener('change', filterCourses);