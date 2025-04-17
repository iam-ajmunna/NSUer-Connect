import BasePage from './Decorator/base_page.js';
import CoursesPageDecorator from './Decorator/courses_decorator.js';
import CoursesIterator from './Iterator_courses/courses_iterator.js';

const basePage = new BasePage();
const coursesPage = new CoursesPageDecorator(basePage);
coursesPage.render();


const allCourses = [
    { Department: 'CSE', CourseCode: 'ENG102', CourseName: 'Introduction to Composition', Category: 'University Core - Languages', Credits: 3 },
    { Department: 'CSE', CourseCode: 'ENG103', CourseName: 'Intermediate Composition', Category: 'University Core - Languages', Credits: 3 },
    { Department: 'CSE', CourseCode: 'ENG111', CourseName: 'Public Speaking', Category: 'University Core - Languages', Credits: 3 },
    { Department: 'CSE', CourseCode: 'BEN205', CourseName: 'Bangla Language', Category: 'University Core - Languages', Credits: 3 },
    { Department: 'CSE', CourseCode: 'PHI104', CourseName: 'Introduction to Ethics', Category: 'University Core - Humanities', Credits: 3 },
    { Department: 'CSE', CourseCode: 'HIS102', CourseName: 'Introduction to World Civilization', Category: 'University Core - Humanities', Credits: 3 },
    { Department: 'CSE', CourseCode: 'HIS103', CourseName: 'Emergence of Bangladesh', Category: 'University Core - Humanities', Credits: 3 },
    { Department: 'CSE', CourseCode: 'ECO101', CourseName: 'Introduction to Microeconomics', Category: 'University Core - Social Sciences', Credits: 3 },
    { Department: 'CSE', CourseCode: 'ECO104', CourseName: 'Introduction to Macroeconomics', Category: 'University Core - Social Sciences', Credits: 3 },
    { Department: 'CSE', CourseCode: 'POL101', CourseName: 'Introduction to Political Science', Category: 'University Core - Social Sciences', Credits: 3 },
    { Department: 'CSE', CourseCode: 'POL104', CourseName: 'Introduction to Governance', Category: 'University Core - Social Sciences', Credits: 3 },
    { Department: 'CSE', CourseCode: 'SOC101', CourseName: 'Introduction to Sociology', Category: 'University Core - Social Sciences', Credits: 3 },
    { Department: 'CSE', CourseCode: 'ANT101', CourseName: 'Introduction to Anthropology', Category: 'University Core - Social Sciences', Credits: 3 },
    { Department: 'CSE', CourseCode: 'ENV203', CourseName: 'Introduction to Bangladesh Geography', Category: 'University Core - Social Sciences', Credits: 3 },
    { Department: 'CSE', CourseCode: 'GEO205', CourseName: 'Introduction to Bangladesh Geography', Category: 'University Core - Social Sciences', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE115', CourseName: 'Programming Language I', Category: 'University Core - Computer and Math Skills', Credits: 4 },
    { Department: 'CSE', CourseCode: 'CSE115L', CourseName: 'Programming Language I Lab', Category: 'University Core - Computer and Math Skills', Credits: 0 },
    { Department: 'CSE', CourseCode: 'MAT361', CourseName: 'Probability and Statistics', Category: 'University Core - Computer and Math Skills', Credits: 3 },
    { Department: 'CSE', CourseCode: 'MAT125', CourseName: 'Linear Algebra', Category: 'University Core - Computer and Math Skills', Credits: 3 },
    { Department: 'CSE', CourseCode: 'BIO103', CourseName: 'Biology', Category: 'University Core - Sciences (with Lab)', Credits: 4 },
    { Department: 'CSE', CourseCode: 'PHY107', CourseName: 'Physics I', Category: 'University Core - Sciences (with Lab)', Credits: 4 },
    { Department: 'CSE', CourseCode: 'CHE101', CourseName: 'Chemistry I', Category: 'University Core - Sciences (with Lab)', Credits: 4 },
    { Department: 'CSE', CourseCode: 'MAT116', CourseName: 'Pre-Calculus', Category: 'School of Engineering and Physical Sciences (SEPS) Core', Credits: 0 },
    { Department: 'CSE', CourseCode: 'MAT120', CourseName: 'Calculus I', Category: 'School of Engineering and Physical Sciences (SEPS) Core', Credits: 3 },
    { Department: 'CSE', CourseCode: 'MAT130', CourseName: 'Calculus II', Category: 'School of Engineering and Physical Sciences (SEPS) Core', Credits: 3 },
    { Department: 'CSE', CourseCode: 'MAT250', CourseName: 'Calculus III', Category: 'School of Engineering and Physical Sciences (SEPS) Core', Credits: 3 },
    { Department: 'CSE', CourseCode: 'MAT350', CourseName: 'Engineering Mathematics', Category: 'School of Engineering and Physical Sciences (SEPS) Core', Credits: 3 },
    { Department: 'CSE', CourseCode: 'PHY108', CourseName: 'Physics II', Category: 'School of Engineering and Physical Sciences (SEPS) Core', Credits: 4 },
    { Department: 'CSE', CourseCode: 'EEE452', CourseName: 'Engineering Economics', Category: 'School of Engineering and Physical Sciences (SEPS) Core', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CEE110', CourseName: 'Engineering Drawing (EEE 154)', Category: 'School of Engineering and Physical Sciences (SEPS) Core', Credits: 1 },
    { Department: 'CSE', CourseCode: 'CSE173', CourseName: 'Discrete Mathematics', Category: 'CSE Core Courses', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE215', CourseName: 'Programming Language II', Category: 'CSE Core Courses', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE215L', CourseName: 'Programming Language II Lab', Category: 'CSE Core Courses', Credits: 1 },
    { Department: 'CSE', CourseCode: 'CSE225', CourseName: 'Data Structures and Algorithm', Category: 'CSE Core Courses', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE225L', CourseName: 'Data Structures and Algorithm Lab', Category: 'CSE Core Courses', Credits: 0 },
    { Department: 'CSE', CourseCode: 'CSE231', CourseName: 'Digital Logic Design', Category: 'CSE Core Courses', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE231L', CourseName: 'Digital Logic Design Lab', Category: 'CSE Core Courses', Credits: 0 },
    { Department: 'CSE', CourseCode: 'EEE141', CourseName: 'Electrical Circuits I', Category: 'CSE Core Courses', Credits: 3 },
    { Department: 'CSE', CourseCode: 'EEE141L', CourseName: 'Electrical Circuits I Lab', Category: 'CSE Core Courses', Credits: 1 },
    { Department: 'CSE', CourseCode: 'EEE111', CourseName: 'Analog Electronics I', Category: 'CSE Core Courses', Credits: 3 },
    { Department: 'CSE', CourseCode: 'EEE111L', CourseName: 'Analog Electronics I Lab', Category: 'CSE Core Courses', Credits: 1 },
    { Department: 'CSE', CourseCode: 'CSE311', CourseName: 'Database Systems', Category: 'CSE Core Courses', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE311L', CourseName: 'Database Systems Lab', Category: 'CSE Core Courses', Credits: 0 },
    { Department: 'CSE', CourseCode: 'CSE323', CourseName: 'Operating Systems Design', Category: 'CSE Core Courses', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE327', CourseName: 'Software Engineering', Category: 'CSE Core Courses', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE331', CourseName: 'Microprocessor Interfacing & Embedded Sys.', Category: 'CSE Core Courses', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE331L', CourseName: 'Microprocessor Interfacing & Emb. Sys.', Category: 'CSE Core Courses', Credits: 0 },
    { Department: 'CSE', CourseCode: 'CSE373', CourseName: 'Design and Analysis of Algorithms', Category: 'CSE Core Courses', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE332', CourseName: 'Computer Organization and Architecture', Category: 'CSE Core Courses', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE425', CourseName: 'Concepts of Programming Language', Category: 'CSE Core Courses', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE299', CourseName: 'Junior Design Project I', Category: 'CSE Major Capstone Design', Credits: 1 },
    { Department: 'CSE', CourseCode: 'CSE499A', CourseName: 'Senior Design Project I', Category: 'CSE Major Capstone Design', Credits: 1.5 },
    { Department: 'CSE', CourseCode: 'CSE499B', CourseName: 'Senior Design Project II', Category: 'CSE Major Capstone Design', Credits: 1.5 },
    { Department: 'CSE', CourseCode: 'CSE498', CourseName: 'Intern/Co-op', Category: 'Internship/Co-op', Credits: 0 },
    { Department: 'CSE', CourseCode: 'CSE401', CourseName: 'Advanced Programming Techniques', Category: 'CSE Specialized Elective Courses - Algorithms and Computation Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE417', CourseName: 'Numerical Methods', Category: 'CSE Specialized Elective Courses - Algorithms and Computation Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE418', CourseName: 'Computer Graphics', Category: 'CSE Specialized Elective Courses - Algorithms and Computation Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE426', CourseName: 'Compiler Constructions', Category: 'CSE Specialized Elective Courses - Algorithms and Computation Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE473', CourseName: 'Theory of Computation', Category: 'CSE Specialized Elective Courses - Algorithms and Computation Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE491', CourseName: 'Special Topics', Category: 'CSE Specialized Elective Courses - Algorithms and Computation Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE411', CourseName: 'Advanced Database Systems', Category: 'CSE Specialized Elective Courses - Software Engineering Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE427', CourseName: 'Software Quality Assurance & Testing', Category: 'CSE Specialized Elective Courses - Software Engineering Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE428', CourseName: 'Software Process Management', Category: 'CSE Specialized Elective Courses - Software Engineering Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE429', CourseName: 'Software System Architecture', Category: 'CSE Specialized Elective Courses - Software Engineering Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE492', CourseName: 'Special Topics', Category: 'CSE Specialized Elective Courses - Software Engineering Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE422', CourseName: 'Modelling and Simulation', Category: 'CSE Specialized Elective Courses - Networks Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE438', CourseName: 'Data Communication & Network', Category: 'CSE Specialized Elective Courses - Networks Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE482', CourseName: 'Internet and Web Technology', Category: 'CSE Specialized Elective Courses - Networks Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE485', CourseName: 'Digital Signal Processing', Category: 'CSE Specialized Elective Courses - Networks Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE486', CourseName: 'Mobile and Wireless Application Development', Category: 'CSE Specialized Elective Courses - Networks Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE493', CourseName: 'Special Topics', Category: 'CSE Specialized Elective Courses - Networks Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE433', CourseName: 'Advanced Architecture', Category: 'CSE Specialized Elective Courses - Computer Architecture and VLSI Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE435', CourseName: 'Introduction to VLSI Design', Category: 'CSE Specialized Elective Courses - Computer Architecture and VLSI Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE413', CourseName: 'Verilog HDL: Modelling, Simulation, and Synthesis', Category: 'CSE Specialized Elective Courses - Computer Architecture and VLSI Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE414', CourseName: 'Advanced Chip Design Methodology and Optimization using HDL', Category: 'CSE Specialized Elective Courses - Computer Architecture and VLSI Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE415', CourseName: 'VLSI Chip Testing', Category: 'CSE Specialized Elective Courses - Computer Architecture and VLSI Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE494', CourseName: 'Special Topics', Category: 'CSE Specialized Elective Courses - Computer Architecture and VLSI Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE440', CourseName: 'Artificial Intelligence', Category: 'CSE Specialized Elective Courses - Artificial Intelligence Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE445', CourseName: 'Machine Learning', Category: 'CSE Specialized Elective Courses - Artificial Intelligence Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE465', CourseName: 'Pattern Recognition and Neural Network', Category: 'CSE Specialized Elective Courses - Artificial Intelligence Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE467', CourseName: 'Digital Image Processing', Category: 'CSE Specialized Elective Courses - Artificial Intelligence Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE470', CourseName: 'Theory of Fuzzy Systems', Category: 'CSE Specialized Elective Courses - Artificial Intelligence Trail', Credits: 3 },
    { Department: 'CSE', CourseCode: 'CSE495', CourseName: 'Special Topics', Category: 'CSE Specialized Elective Courses - Artificial Intelligence Trail', Credits: 3 },
    { Department: 'BBA', CourseCode: 'ACT201', CourseName: 'Financial Accounting', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'ACT202', CourseName: 'Managerial Accounting', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'ENG105', CourseName: 'Business Communication', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BUS101', CourseName: 'Introduction to Business', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'ECO101', CourseName: 'Introduction to Microeconomics', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'ECO104', CourseName: 'Introduction to Macroeconomics', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'FIN250', CourseName: 'Principles of Finance', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'MGT210', CourseName: 'Principles of Management', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'MKT220', CourseName: 'Principles of Marketing', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'STA201', CourseName: 'Business Statistics', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'STA201', CourseName: 'Business Statistics', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA301', CourseName: 'Human Resources Management', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA302', CourseName: 'Organizational Behavior', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA303', CourseName: 'Business Law', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA304', CourseName: 'Business Mathematics', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA305', CourseName: 'Business Statistics', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA401', CourseName: 'Business Research Methods', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA402', CourseName: 'Entrepreneurship', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA403', CourseName: 'International Business', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA404', CourseName: 'Strategic Management', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA405', CourseName: 'Management Information Systems', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA406', CourseName: 'Financial Management', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA407', CourseName: 'Marketing Management', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA408', CourseName: 'Production and Operations Management', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA409', CourseName: 'Organizational Behavior', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA410', CourseName: 'Human Resource Management', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA411', CourseName: 'Business Ethics', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA412', CourseName: 'Business and Society', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA413', CourseName: 'Taxation', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA414', CourseName: 'Insurance', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA415', CourseName: 'Banking', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA416', CourseName: 'Investment Analysis', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA417', CourseName: 'Financial Institutions', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA418', CourseName: 'International Finance', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA419', CourseName: 'Financial Derivatives', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA420', CourseName: 'Consumer Behavior', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA421', CourseName: 'Advertising and Promotion Management', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA422', CourseName: 'Sales Management', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA423', CourseName: 'Retail Management', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA424', CourseName: 'Marketing Research', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA425', CourseName: 'E-Commerce', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA426', CourseName: 'Supply Chain Management', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA427', CourseName: 'Project Management', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA428', CourseName: 'Operations Research', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA429', CourseName: 'Total Quality Management', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA430', CourseName: 'Cross-Cultural Management', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA431', CourseName: 'Organizational Development', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA432', CourseName: 'Industrial Relations', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA433', CourseName: 'Compensation Management', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA434', CourseName: 'Training and Development', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA435', CourseName: 'Performance Management', Category: 'BBA Core Courses', Credits: 3 },
    { Department: 'BBA', CourseCode: 'BBA436', CourseName: 'Career Management', Category: 'BBA Core Courses', Credits: 3 }
 ];

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
let filteredCourses = allCourses;
let iterator;  // Declare iterator here

// This object maps letter grades to grade points as in the image
const gradePoints = {
  'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D+': 1.3, 'D': 1.0,
  'F': 0.0, 'I': 0.0, 'W': 0.0
};

// Array to store the user's added courses
const myCourses = [];


function displayCourses() {

//  Builder Class (Applied from here)
//builder class and ocncrete builder class
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
        button.innerHTML = text; // Use innerHTML to allow icons
        button.classList.add(...className.split(' ')); // Handles multiple classes
        button.dataset.code = dataCode;
        button.addEventListener('click', clickHandler.bind(button)); // Ensure correct 'this' context
        cell.appendChild(button);
        this.row.appendChild(cell);
        return this;
      }
  
    getRow() {
    return this.row;
    }
   }
  //main for builder design pattern and also haldle pagenation and logic to display the correct page of courses
   function displayCourses() {
    const courseTableBody = document.getElementById('course-table-body');
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
    const rowBuilder = new CourseTableRowBuilder(); // Create a builder instance
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
    function() { addCourseToMyCourses(this.dataset.code); }
    )
    .getRow();
  
    courseTableBody.appendChild(row);
    });
   }


 /*function displayCourses() {

  courseTableBody.innerHTML = '';
  
  const pageCourses = iterator.next();  // Get courses for the current page

  if (pageCourses.length === 0 && filteredCourses.length > 0) {
    currentPage = Math.ceil(filteredCourses.length / coursesPerPage);
    iterator = new CoursesIterator(filteredCourses, coursesPerPage);  // Reinitialize iterator with the correct filtered courses
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

  // Add event listeners to the "Add" buttons AFTER they are added to the DOM
  const addCourseButtons = document.querySelectorAll('.add-course-btn');
  addCourseButtons.forEach(button => {
    button.addEventListener('click', function() {
      addCourseToMyCourses(this.dataset.code);  // Pass course code directly
    });
  });
 }*/


function displayPaginationControls() {
  pageNumbers.innerHTML = '';
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageNumber = document.createElement('button');
    pageNumber.textContent = i;
    pageNumber.classList.add('btn', 'btn-light', 'pagination-button');
    if (i === currentPage) {
      pageNumber.classList.add('active');
    }
    pageNumber.addEventListener('click', () => {
      currentPage = i;
      iterator.currentPage = currentPage;  // Update iterator's current page
      displayCourses();
      displayPaginationControls();
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
      iterator.goToPreviousPage();
      displayCourses();
      displayPaginationControls();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages && totalPages > 0) {
      currentPage++;
      iterator.goToNextPage();
      displayCourses();
      displayPaginationControls();
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

  iterator = new CoursesIterator(filteredCourses, coursesPerPage);  // Reinitialize iterator when filtering
  currentPage = 1;  // Reset page to 1
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

// Attach event listeners
filterButton.addEventListener('click', filterCourses);

// Initialize the iterator with the full list of courses
iterator = new CoursesIterator(filteredCourses, coursesPerPage);
displayCourses();
displayPaginationControls();
