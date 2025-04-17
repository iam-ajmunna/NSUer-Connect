import CoursesIterator from './courses_iterator.js';

const courses = [
    { CourseCode: 'CS101', CourseName: 'Intro to CS', Credits: 3 },
    { CourseCode: 'MATH201', CourseName: 'Calculus I', Credits: 4 },
    { CourseCode: 'ENG101', CourseName: 'English Comp', Credits: 3 },
    { CourseCode: 'PHYS101', CourseName: 'Physics I', Credits: 4 },
    { CourseCode: 'HIST101', CourseName: 'World History', Credits: 3 },
    { CourseCode: 'BIO101', CourseName: 'Biology I', Credits: 4 },
    { CourseCode: 'CHEM101', CourseName: 'Chemistry I', Credits: 4 },
    { CourseCode: 'PSYCH101', CourseName: 'Intro to Psychology', Credits: 3 },
    { CourseCode: 'ECON101', CourseName: 'Microeconomics', Credits: 3 }
];

const coursesPerPage = 3;
const iterator = new CoursesIterator(courses, coursesPerPage);
const outputDiv = document.getElementById('output');

// Create a separate div to hold the courses list
const coursesListDiv = document.createElement('div');
outputDiv.appendChild(coursesListDiv);

function displayPage(pageCourses) {
    coursesListDiv.innerHTML = ''; // Clear only the courses list
    pageCourses.forEach(course => {
        coursesListDiv.innerHTML += `<p>${course.CourseCode} - ${course.CourseName}</p>`;
    });
}

// Display the first page
displayPage(iterator.next());

// Add buttons to navigate pages
const prevButton = document.createElement('button');
prevButton.textContent = 'Previous';
prevButton.addEventListener('click', () => {
    iterator.goToPreviousPage();
    displayPage(iterator.next());
    updateButtonStates();
});

const nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.addEventListener('click', () => {
    iterator.goToNextPage();
    displayPage(iterator.next());
    iterator.currentPage = iterator.currentPage;
    updateButtonStates();
});

function updateButtonStates() {
    prevButton.disabled = iterator.currentPage === 1;
    nextButton.disabled = !iterator.hasNext();
}

// Initial button states
updateButtonStates();

// Append buttons to the outputDiv
outputDiv.appendChild(prevButton);
outputDiv.appendChild(nextButton);