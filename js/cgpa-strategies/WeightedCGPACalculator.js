import { CGPACalculatorStrategy } from './CGPACalculatorStrategy.js';

/**
 * Concrete strategy for calculating a weighted CGPA (example).
 */
class WeightedCGPACalculator extends CGPACalculatorStrategy {
    calculateCGPA(courses) {
        //  ...  Weighted CGPA calculation logic here ...
        return 0.00; //  Placeholder
    }
}

export { WeightedCGPACalculator };