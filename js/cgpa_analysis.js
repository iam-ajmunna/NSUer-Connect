// cgpa_analysis.js
 

 // Basic client-side script for CGPA calculation (for demonstration)
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
 }