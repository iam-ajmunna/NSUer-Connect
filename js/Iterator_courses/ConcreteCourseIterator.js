// Iterator/ConcreteCourseIterator.js
import CourseIterator from './CourseIterator.js';

class ConcreteCourseIterator extends CourseIterator {
    constructor(courses) {
        super();
        this.courses = Array.isArray(courses) ? courses : [];
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

    reset() {
        this.index = 0;
    }
}

export default ConcreteCourseIterator;
