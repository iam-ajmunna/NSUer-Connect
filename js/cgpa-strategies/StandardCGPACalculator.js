import { CGPACalculatorStrategy } from './CGPACalculatorStrategy.js';

/**
 * Concrete strategy for calculating CGPA using the standard method.
 */

class StandardCGPACalculator extends CGPACalculatorStrategy {
    calculateCGPA(courses) {
        let totalCredits = 0;
        let totalGradePoints = 0;

        for (const course of courses) {
            //  Ensure credits and grade are treated as numbers
            const gradeValue = parseFloat(course.grade);
            const creditValue = parseFloat(course.credits);

            if (!isNaN(gradeValue) && !isNaN(creditValue)) {
                totalCredits += creditValue;
                totalGradePoints += gradeValue * creditValue;
            }
        }

        return totalCredits === 0 ? 0.00 : totalGradePoints / totalCredits;
    }
}

export { StandardCGPACalculator };