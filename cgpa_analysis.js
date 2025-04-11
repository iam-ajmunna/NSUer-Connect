// script.js

let courses = []; // Array to store course data

// Function to get values from input rows
function getCourseDataFromRow(row) {
  const courseCode = row.querySelector('.course-code').value;
  const grade = row.querySelector('.grade').value;
  const credits = parseInt(row.querySelector('.credits').value);
  return { courseCode, grade, credits };
}

// Function to clear input fields in a row
function clearRowInputs(row) {
  row.querySelector('.course-code').value = '';
  row.querySelector('.grade').value = '';
  row.querySelector('.credits').value = '';
}

function addCourse() {
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
      <input type="number" class="form-input credits" placeholder="e.g., 3" required>
    </div>
    <button type="button" class="btn btn-danger remove-row">X</button>
  `;
  gradeInputForm.insertBefore(newRow, document.getElementById('add-course-row'));

  // Add event listener to the new remove button
  newRow.querySelector('.remove-row').addEventListener('click', function() {
    newRow.remove();
    updateCoursesTable();
  });

  // Add event listeners to input fields in the new row
  newRow.querySelectorAll('.course-code, .grade, .credits').forEach(input => {
    input.addEventListener('change', updateCoursesTable);
  });
}

function updateCoursesTable() {
  console.log("updateCoursesTable() function called");
  const tableBody = document.getElementById('coursesTableBody');
  console.log("tableBody:", tableBody);
  if (tableBody) {
    tableBody.innerHTML = '';
    const gradeInputForm = document.getElementById('grade-input-form');
    const courseRows = gradeInputForm.querySelectorAll('.input-row:not(.heading-row)');

    courseRows.forEach(row => {
      const { courseCode, grade, credits } = getCourseDataFromRow(row);
      console.log("Extracted Data:", { courseCode, grade, credits });
      if (courseCode && grade && !isNaN(credits)) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
          <td>${courseCode}</td> 
          <td>${grade}</td>
          <td>${credits}</td>
        `;
        tableBody.appendChild(newRow);
      }
    });
  }
  console.log("updateCoursesTable() function completed");
}

function calculateCGPA() {
  const gradeInputForm = document.getElementById('grade-input-form');
  const courseRows = gradeInputForm.querySelectorAll('.input-row:not(.heading-row)');
  let totalGradePoints = 0;
  let totalCredits = 0;

  courseRows.forEach(row => {
    const { grade, credits } = getCourseDataFromRow(row);
    if (grade && !isNaN(credits)) {
      totalGradePoints += parseFloat(grade) * credits;
      totalCredits += credits;
    }
  });

  const cgpaResultElement = document.getElementById('current-cgpa');
  if (totalCredits > 0) {
    cgpaResultElement.textContent = (totalGradePoints / totalCredits).toFixed(2);
  } else {
    cgpaResultElement.textContent = '0.00';
  }
}

// Event listeners for buttons
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('add-course-row').addEventListener('click', addCourse);
  document.getElementById('calculate-cgpa').addEventListener('click', calculateCGPA);

  // Initial remove button event listeners
  document.querySelectorAll('.remove-row').forEach(button => {
    button.addEventListener('click', function() {
      this.parentElement.remove();
      updateCoursesTable();
    });
  });

  // Add event listeners to input fields in initial rows
  document.querySelectorAll('.input-row:not(.heading-row) .course-code, .input-row:not(.heading-row) .grade, .input-row:not(.heading-row) .credits').forEach(input => {
    input.addEventListener('change', updateCoursesTable);
  });

  updateCoursesTable(); // Initial table update
});