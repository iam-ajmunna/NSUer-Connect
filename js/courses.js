document.addEventListener('DOMContentLoaded', function() {
    const allCoursesGrid = document.getElementById('all-courses-grid');

    if (!allCoursesGrid) {
        console.error("Error: allCoursesGrid element not found in HTML.");
        return;
    }

    fetch('php/get_course.php')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const courses = data.data;
            console.log('Fetched courses data:', courses);

            if (courses.length > 0) {
                const table = document.createElement('table');
                table.classList.add('course-table'); // You might want to reuse your existing table styles

                const thead = document.createElement('thead');
                thead.classList.add('table-header');
                const headerRow = document.createElement('tr');
                headerRow.innerHTML = `
                    <th class="table-heading">Code</th>
                    <th class="table-heading">Name</th>
                    <th class="table-heading">Credits</th>
                    <th class="table-heading">Description</th>
                    <th class="table-heading">Prerequisite</th>
                `;
                thead.appendChild(headerRow);
                table.appendChild(thead);

                const tbody = document.createElement('tbody');
                tbody.classList.add('table-body');
                courses.forEach(course => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td class="table-cell">${course.CourseCode}</td>
                        <td class="table-cell">${course.CourseName}</td>
                        <td class="table-cell">${course.CrHour}</td>
                        <td class="table-cell">${course.CourseDescription || 'N/A'}</td>
                        <td class="table-cell">${course.Prerequisite || 'None'}</td>
                    `;
                    tbody.appendChild(row);
                });
                table.appendChild(tbody);

                allCoursesGrid.appendChild(table);
            } else {
                allCoursesGrid.innerHTML = '<p>No courses found.</p>';
            }

            console.log('Total Pages:', data.totalPages);
            console.log('Current Page:', data.currentPage);

        })
        .catch(error => {
            console.error('Error fetching courses:', error);
            allCoursesGrid.innerHTML = '<p>Error loading courses.</p>';
        });
});