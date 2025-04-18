import CourseIterator from './CourseIterator.js';

export default class CoursesIterator extends CourseIterator {

  constructor(courses, coursesPerPage) {
    super();
    this.courses = Array.isArray(courses) ? courses : [];
    this.coursesPerPage = coursesPerPage || 5;
    this.currentPage = 1;
  }

  /** Returns the items for the current page. */
  next() {
    const start = (this.currentPage - 1) * this.coursesPerPage;
    const end = this.currentPage * this.coursesPerPage;
    return this.courses.slice(start, end);
  }

  /** True if there's another page after the current one. */
  hasNext() {
    return this.currentPage < this.getTotalPages();
  }

  /** True if there's a previous page. */
  hasPrevious() {
    return this.currentPage > 1;
  }

  goToNextPage() {
    if (this.hasNext()) this.currentPage++;
  }

  goToPreviousPage() {
    if (this.hasPrevious()) this.currentPage--;
  }

  reset() {
    this.currentPage = 1;
  }

  getCurrentPageNumber() {
    return this.currentPage;
  }

  getTotalPages() {
    return Math.ceil(this.courses.length / this.coursesPerPage);
  }
}
