import BasePage from './Decorator/base_page.js';
import CGPAPageDecorator from './Decorator/cgpa_analysis_decorator.js';

//For Devcorator design patter
const basePage = new BasePage();
const cgpaPage = new CGPAPageDecorator(basePage);
cgpaPage.render();

//for strategy design patter

//import { CGPACalculatorStrategy } from './cgpa-strategies/CGPACalculatorStrategy.js';
import { StandardCGPACalculator } from './cgpa-strategies/StandardCGPACalculator.js';
//import { WeightedCGPACalculator } from './cgpa-strategies/WeightedCGPACalculator.js'; 


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
document.getElementById('calculate-cgpa').addEventListener('click', function() {
    const courses = getCoursesFromTable();
    if (courses.length === 0) {
        document.getElementById('current-cgpa').textContent = '0.00';
        return;
    }
    const cgpa = cgpaContext.calculateCGPA(courses);
    document.getElementById('current-cgpa').textContent = isNaN(cgpa) ? '0.00' : cgpa.toFixed(2);
});



let courses = []; // Array to store course data

// Function to get values from input rows
function getCourseDataFromRow(row) {
    const courseCode = row.querySelector('.course-code').value;
    const grade = row.querySelector('.grade').value;
    const credits = row.querySelector('.credits').value;
    console.log("getCourseDataFromRow:", { courseCode, grade, credits });
    return { courseCode, grade, credits: parseFloat(credits) }; // Parse credits to float
}

// Function to clear input fields in a row
function clearRowInputs(row) {
    row.querySelector('.course-code').value = '';
    row.querySelector('.grade').value = '';
    row.querySelector('.credits').value = '';
}

function addCourse() {
    console.log("addCourse function called");
    const gradeInputForm = document.getElementById('grade-input-form');
    const newRow = document.createElement('div');
    newRow.classList.add('input-row');
    newRow.innerHTML = `
        <div class="input-group">
            <input type="text" class="form-input course-code" placeholder="e.g., CSE111" required>
        </div>
        <div class="input-group">
            <select class="form-select grade" required>
                <option value="">Select Grade</option>
                <option value="4.0">A Excellent (4.0)</option>
                <option value="3.7">A- (3.7)</option>
                <option value="3.3">B+ (3.3)</option>
                <option value="3.0">B Good (3.0)</option>
                <option value="2.7">B- (2.7)</option>
                <option value="2.3">C+ (2.3)</option>
                <option value="2.0">C Average (2.0)</option>
                <option value="1.7">C- (1.7)</option>
                <option value="1.3">D+ (1.3)</option>
                <option value="1.0">D Poor (1.0)</option>
                <option value="0.0">F* Failure (0.0)</option>
                <option value="0.0">I** Incomplete (0.0)</option>
                <option value="0.0">W** Withdrawal (0.0)</option>
                <option value="0.0">R** Retaken (0.0)</option>
            </select>
        </div>
        <div class="input-group">
            <select class="form-select credits" required>
                <option value="">Select Credits</option>
                <option value="1.0">1.0</option>
                <option value="1.5">1.5</option>
                <option value="2.0">2.0</option>
                <option value="2.5">2.5</option>
                <option value="3.0">3.0</option>
            </select>
        </div>
        <button type="button" class="btn btn-danger remove-row">X</button>
    `;
    gradeInputForm.insertBefore(newRow, document.getElementById('add-course-row'));

    // Add event listener to the new remove button
    newRow.querySelector('.remove-row').addEventListener('click', function () {
        newRow.remove();
        updateCoursesTable();
    });

    // Add event listeners to input fields in the new row
    newRow.querySelectorAll('.course-code, .grade, .credits').forEach(input => {
        input.addEventListener('change', updateCoursesTable);
    });
    updateCoursesTable(); // Call updateCoursesTable after adding a row
}

function updateCoursesTable() {
    console.log("updateCoursesTable() function called");
    const tableBody = document.getElementById('coursesTableBody');
    console.log("tableBody:", tableBody);
    if (tableBody) {
        tableBody.innerHTML = '';
        const gradeInputForm = document.getElementById('grade-input-form');
        const courseRows = gradeInputForm.querySelectorAll('.input-row:not(.heading-row)');

        courses = []; // Clear the courses array
        courseRows.forEach(row => {
            const { courseCode, grade, credits } = getCourseDataFromRow(row);
            console.log("Extracted Data:", { courseCode, grade, credits });
            if (courseCode && grade && !isNaN(credits)) {
                courses.push({ courseCode, grade, credits }); //push the data
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${courseCode}</td> 
                    <td>${grade}</td>
                    <td>${credits}</td>
                `;
                tableBody.appendChild(newRow);
            }
        });
        if (courses.length === 0) { //check if there are any courses
            const totalCreditsElement = document.getElementById('total-credits');
            const cgpaResultElement = document.getElementById('current-cgpa');
            cgpaResultElement.textContent = '0.00';
            totalCreditsElement.textContent = '0.00';
        }
    }
    console.log("updateCoursesTable() function completed");
}

function calculateCGPA() {
    console.log("calculateCGPA function called");
    const gradeInputForm = document.getElementById('grade-input-form');
    const courseRows = gradeInputForm.querySelectorAll('.input-row:not(.heading-row)');
    let totalGradePoints = 0;
    let totalCredits = 0;

    courses.forEach(course => { // use the courses array
        console.log("Processing course:", course);
        if (course.grade && !isNaN(course.credits)) {
            totalGradePoints += parseFloat(course.grade) * course.credits;
            totalCredits += course.credits;
            console.log("Accumulated:", { totalGradePoints, totalCredits });
        }
    });

    const totalCreditsElement = document.getElementById('total-credits');
    const cgpaResultElement = document.getElementById('current-cgpa');


    let cgpa = 0.00;
    if (totalCredits > 0) {
        cgpa = (totalGradePoints / totalCredits).toFixed(2);
        cgpaResultElement.textContent = cgpa;
        cgpaResultElement.style.fontWeight = "bold";
        cgpaResultElement.style.fontSize = "20px";
        cgpaResultElement.style.fontFamily = "Poppins, sans-serif";

        totalCreditsElement.textContent = totalCredits.toFixed(2);
        totalCreditsElement.style.fontWeight = "bold";
        totalCreditsElement.style.fontSize = "20px";
        totalCreditsElement.style.fontFamily = "Poppins, sans-serif";
        console.log("Calculated CGPA:", cgpa);
    } else {
        cgpaResultElement.textContent = '0.00';
        totalCreditsElement.textContent = '0.00';
        console.log("No credits, CGPA is 0.00");
    }
}

// Event listeners for buttons
document.addEventListener('DOMContentLoaded', function () {
    const addCourseButton = document.getElementById('add-course-row');
    const calculateCGPAButton = document.getElementById('calculate-cgpa');

    if (addCourseButton) {
        addCourseButton.addEventListener('click', addCourse);
        console.log("addCourseButton event listener attached");
    } else {
        console.error("addCourseButton is null");
    }

    if (calculateCGPAButton) {
        calculateCGPAButton.addEventListener('click', calculateCGPA);
        console.log("calculateCGPAButton event listener attached");
    } else {
        console.error("calculateCGPAButton is null");
    }


    // Initial remove button event listeners
    document.querySelectorAll('.remove-row').forEach(button => {
        button.addEventListener('click', function () {
            this.parentElement.remove();
            updateCoursesTable();
        });
    });

    // Add event listeners to input fields in initial rows
    document.querySelectorAll('.input-row:not(.heading-row) .course-code, .input-row:not(.heading-row) .grade, .input-row:not(.heading-row) .credits').forEach(input => {
        input.addEventListener('change', updateCoursesTable);
    });

    updateCoursesTable(); // Initial table update
    console.log("DOMContentLoaded completed");
});
