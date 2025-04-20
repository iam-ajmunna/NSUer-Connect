/**
 * Strategy interface for CGPA calculation.
 * All concrete strategies must implement this interface.
 */


class CGPACalculatorStrategy {
    calculateCGPA(courses) {
        throw new Error("calculateCGPA method must be implemented");
    }
}

//  Export the class to make it available to other modules
export { CGPACalculatorStrategy };