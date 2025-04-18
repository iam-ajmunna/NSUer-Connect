// Iterator/ConcreteCourseIterator.js
import CourseIterator from './CourseIterator';

class ConcreteCourseIterator extends CourseIterator {
    constructor(courses) {
        super();
        this.courses = courses;
        this.index = 0;
    }

    next() {
        if (this.hasNext()) {
            return this.courses[this.index++];
        }
        return null;
    }

    hasNext() {
        return this.index < this.courses.length;
    }
}

export default ConcreteCourseIterator;
