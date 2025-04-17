// Iterator_courses/courses_iterator.js

import CourseIterator from './CourseIterator.js';

export default class CoursesIterator extends CourseIterator {
  constructor(courses, coursesPerPage) {
    super();
    this.courses        = courses;
    this.coursesPerPage = coursesPerPage;
    this.currentPage    = 1;
  }

  /** Returns the items for the current page. */
  next() {
    const start = (this.currentPage - 1) * this.coursesPerPage;
    const end   = this.currentPage * this.coursesPerPage;
    return this.courses.slice(start, end);
  }

  /** True if there's another page after the current one. */
  hasNext() {
    const totalPages = Math.ceil(this.courses.length / this.coursesPerPage);
    return this.currentPage < totalPages;
  }
goToNextPage() {
  if (this.hasNext()) this.currentPage++;
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
