class CoursesIterator {
    constructor(courses, coursesPerPage) {
        this.courses = courses;  // All the filtered courses
        this.coursesPerPage = coursesPerPage;  // Courses per page
        this.currentPage = 1;  // Start on the first page
    }

    next() {
        // Get courses for the current page
        const start = (this.currentPage - 1) * this.coursesPerPage;
        const end = this.currentPage * this.coursesPerPage;
        return this.courses.slice(start, end);
    }

    hasNext() {
        // Check if there's a next page
        const totalPages = Math.ceil(this.courses.length / this.coursesPerPage);
        return this.currentPage < totalPages;
    }

    goToNextPage() {
        if (this.hasNext()) {
            this.currentPage++;
        }
    }

    goToPreviousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }

    reset() {
        this.currentPage = 1;
    }
}

export default CoursesIterator;
