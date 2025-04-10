// Function to fetch and display courses
function fetchAndDisplayCourses() {
    fetch('php/get_course.php') // Corrected path
    .then(response => response.json())
    .then(courses => {
    const coursesContainer = document.getElementById('all-courses-grid'); // Or 'courses-container' if you change the HTML
    coursesContainer.innerHTML = '';
  
    courses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.className = 'course-card';
    courseCard.innerHTML = `
    <h3>${course.CourseCode} - ${course.CourseName}</h3>
    <p>Credits: ${course.CrHour}</p>
    <p>Description: ${course.CourseDescription || 'No description'}</p>
    <p>Prerequisite: ${course.Prerequisite || 'None'}</p>
    `;
    coursesContainer.appendChild(courseCard); // THE CORRECTED LINE
    });
    })
    .catch(error => console.error('Error fetching courses:', error));
   }
  
   // Call the function when the page loads
   window.onload = fetchAndDisplayCourses;