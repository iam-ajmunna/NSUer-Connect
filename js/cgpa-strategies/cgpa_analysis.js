//  Import the necessary classes
import { CGPACalculatorStrategy } from './cgpa-strategies/CGPACalculatorStrategy.js';
import { StandardCGPACalculator } from './cgpa-strategies/StandardCGPACalculator.js';
//import { WeightedCGPACalculator } from './cgpa-strategies/WeightedCGPACalculator.js'; //  If you created this

//  Get the courses from the table
function getCoursesFromTable() {
    const table = document.getElementById('coursesTableBody');
    if (!table) {
        console.error('Could not find coursesTableBody element');
        return [];
    }
    const rows = table.querySelectorAll('tr');
    return Array.from(rows).map(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length < 3) {
            console.error('Row does not contain enough cells');
            return null; // Or some other error handling
        }
        return {
            code: cells[0].textContent,
            grade: cells[1].textContent,
            credits: cells[2].textContent
        };
    }).filter(course => course !== null); // Filter out any null courses
}

//  Context Class
class CGPACalculatorContext {
    constructor(strategy) {
        this.strategy = strategy || new StandardCGPACalculator(); //  Default strategy
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculateCGPA(courses) {
        if (!this.strategy) {
            console.error('No strategy set for CGPA calculation');
            return 0.00;
        }
        return this.strategy.calculateCGPA(courses);
    }
}

//  Create the Context with the default strategy
const cgpaContext = new CGPACalculatorContext();

//  Modify your calculateCGPA function
document.getElementById('calculate-cgpa').addEventListener('click', function() {
    const courses = getCoursesFromTable();
    if (courses.length === 0) {
        document.getElementById('current-cgpa').textContent = '0.00';
        return;
    }
    const cgpa = cgpaContext.calculateCGPA(courses);
    document.getElementById('current-cgpa').textContent = isNaN(cgpa) ? '0.00' : cgpa.toFixed(2);
});

//  ---  To switch strategies (hypothetical - button click, etc.)  ---
//  const weightedButton = document.getElementById('weighted-cgpa-button');
//  if (weightedButton) {
//  weightedButton.addEventListener('click', () => {
//  cgpaContext.setStrategy(new WeightedCGPACalculator());
//  const courses = getCoursesFromTable();
//  const cgpa = cgpaContext.calculateCGPA(courses);
//  document.getElementById('current-cgpa').textContent = cgpa.toFixed(2);
//  });
//  }





 /*// Basic client-side script for CGPA calculation (for demonstration)
 const gradeInputForm = document.getElementById('grade-input-form');
 const courseListTableBody = document.querySelector('#course-list .table-body');
 const calculateCgpaButton = document.getElementById('calculate-cgpa');
 const currentCgpaSpan = document.getElementById('current-cgpa');
 

 let courses = []; // Array to store course data
 

 gradeInputForm.addEventListener('submit', function(event) {
  event.preventDefault();
 

  const courseCode = document.getElementById('course-code').value;
  const grade = parseFloat(document.getElementById('grade').value);
  const credits = parseFloat(document.getElementById('credits').value);
 

  if (courseCode && !isNaN(grade) && !isNaN(credits)) {
  courses.push({ courseCode, grade, credits });
  addCourseToTable(courseCode, grade, credits);
  clearFormInputs();
  }
 });
 

 calculateCgpaButton.addEventListener('click', function() {
  if (courses.length > 0) {
  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
  const weightedGradePoints = courses.reduce((sum, course) => sum + course.grade * course.credits, 0);
  const cgpa = totalCredits > 0 ? weightedGradePoints / totalCredits : 0;
 

  currentCgpaSpan.textContent = cgpa.toFixed(2); // Display CGPA to 2 decimal places
  } else {
  currentCgpaSpan.textContent = 'N/A';
  }
 });
 

 function addCourseToTable(courseCode, grade, credits) {
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
  <td class="table-cell">${courseCode}</td>
  <td class="table-cell">${grade}</td>
  <td class="table-cell">${credits}</td>
  `;
  courseListTableBody.appendChild(newRow);
 }
 

 function clearFormInputs() {
  document.getElementById('course-code').value = '';
  document.getElementById('grade').selectedIndex = 0;
  document.getElementById('credits').value = '';
 } */