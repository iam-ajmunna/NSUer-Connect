import { CGPACalculatorStrategy } from './CGPACalculatorStrategy.js';

/**
 * Concrete strategy for calculating a weighted CGPA
 */
class WeightedCGPACalculator extends CGPACalculatorStrategy {
    calculateCGPA(courses) {
        let totalWeightedGradePoints = 0;
        let totalCredits = 0;

        // Define a grade point scale (This might vary by institution)
        const gradePoints = {
            'A+': 4.0, 'A': 4.0, 'A-': 3.7,
            'B+': 3.3, 'B': 3.0, 'B-': 2.7,
            'C+': 2.3, 'C': 2.0, 'C-': 1.7,
            'D+': 1.3, 'D': 1.0, 'F': 0.0
        };

        for (const course of courses) {
            const grade = course.grade.toUpperCase(); // Ensure case-insensitivity
            const credits = parseFloat(course.credits);

            // First, validate the data
            if (gradePoints[grade] === undefined || isNaN(credits)) {
                console.error(`Invalid grade or credits for course: ${course.courseCode}`);
                continue; // Skip this course and go to the next
            }

            const gradePoint = gradePoints[grade];
            totalWeightedGradePoints += gradePoint * credits;
            totalCredits += credits;
        }

        return totalCredits === 0 ? 0.00 : totalWeightedGradePoints / totalCredits;
    }
}

export { WeightedCGPACalculator };