import PageDecorator from './page_decorator.js';

class CGPAPageDecorator extends PageDecorator {
  constructor(page) {
    super(page);
  }

  render() {
    super.render();
    const cgpaHTML = this.getCGPAAnalysisHTML();
    this.setContent(cgpaHTML);
  }

  getCGPAAnalysisHTML() {
    return `
       <section id="cgpa-analysis" class="cgpa-section">
                <h2 class="section-title">CGPA Analysis</h2>

                <div id="cgpa-calculator" class="cgpa-subsection">
                    <h3 class="subsection-title">CGPA Calculator</h3>

                    <div id="strategy-selection" class="form">
                        <label for="cgpa-strategy">Select CGPA Calculation:</label>
                        <select id="cgpa-strategy" class="form-select">
                            <option value="standard" selected>Standard CGPA</option>
                            <option value="weighted">Weighted CGPA</option>
                            </select>
                    </div>

                    <div id="grade-input-form" class="form">
                        <div class="input-row heading-row">
                            <label class="form-label">Course Code</label>
                            <label class="form-label">Grade</label>
                            <label class="form-label">Credits</label>
                            <label class="form-label">#</label>
                        </div>

                        <div class="input-row">
                            <div class="input-group">
                                <input type="text" class="form-input course-code" placeholder="e.g., CSE111" required>
                            </div>
                            <div class="input-group">
                                <select class="form-select grade" required>
                                    <option value="">Select Grade</option>
                                    <option value="4.0">A Excellent (4.0)</option>
                                    <option value="3.7">A- (3.7)</option>
                                    <option value="3.3">B+ (3.3)</option>
                                    <option value="3.0">B Good (3.0)</option>
                                    <option value="2.7">B- (2.7)</option>
                                    <option value="2.3">C+ (2.3)</option>
                                    <option value="2.0">C Average (2.0)</option>
                                    <option value="1.7">C- (1.7)</option>
                                    <option value="1.3">D+ (1.3)</option>
                                    <option value="1.0">D Poor (1.0)</option>
                                    <option value="0.0">F* Failure (0.0)</option>
                                    <option value="0.0">I** Incomplete (0.0)</option>
                                    <option value="0.0">W** Withdrawal (0.0)</option>
                                    <option value="0.0">R** Retaken (0.0)</option>
                                </select>
                            </div>
                            <div class="input-group">
                                <select class="form-select credits" required>
                                    <option value="1">1</option>
                                    <option value="1.5">1.5</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <button type="button" class="btn btn-danger remove-row">X</button>
                        </div>
                        <div class="input-row">
                            <div class="input-group">
                                <input type="text" class="form-input course-code" placeholder="e.g., CSE111" required>
                            </div>
                            <div class="input-group">
                                <select class="form-select grade" required>
                                    <option value="">Select Grade</option>
                                    <option value="4.0">A Excellent (4.0)</option>
                                    <option value="3.7">A- (3.7)</option>
                                    <option value="3.3">B+ (3.3)</option>
                                    <option value="3.0">B Good (3.0)</option>
                                    <option value="2.7">B- (2.7)</option>
                                    <option value="2.3">C+ (2.3)</option>
                                    <option value="2.0">C Average (2.0)</option>
                                    <option value="1.7">C- (1.7)</option>
                                    <option value="1.3">D+ (1.3)</option>
                                    <option value="1.0">D Poor (1.0)</option>
                                    <option value="0.0">F* Failure (0.0)</option>
                                    <option value="0.0">I** Incomplete (0.0)</option>
                                    <option value="0.0">W** Withdrawal (0.0)</option>
                                    <option value="0.0">R** Retaken (0.0)</option>
                                </select>
                            </div>
                            <div class="input-group">
                                <select class="form-select credits" required>
                                    <option value="1">1</option>
                                    <option value="1.5">1.5</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <button type="button" class="btn btn-danger remove-row">X</button>
                        </div>

                        <button type="button" id="add-course-row" class="btn btn-primary">+</button>
                    </div>

                    <div id="course-list" class="course-list-container">
                        <h4 class="subsection-title">Courses Added</h4>
                        <div class="table-wrapper">
                            <table class="course-table">
                                <thead class="table-header">
                                    <tr>
                                        <th class="table-heading">Course Code</th>
                                        <th class="table-heading">Grade</th>
                                        <th class="table-heading">Credits</th>
                                    </tr>
                                </thead>
                                <tbody class="table-body" id="coursesTableBody">
                                </tbody>
                            </table>
                        </div>
                        <div style="text-align: center;"> <button id="calculate-cgpa" class="btn btn-secondary">Calculate CGPA</button> </div>
                        <p class="cgpa-result">Total Credits: <span id="total-credits">0</span></p>
                        <p class="cgpa-result">Current CGPA: <span id="current-cgpa">0.00</span></p>
                    </div>
                </div>

                <div id="cgpa-prediction" class="cgpa-subsection">
                    <h3 class="subsection-title">CGPA Prediction</h3>
                    <p class="section-description">Analyze your past performance to predict future CGPA.</p>
                </div>
            </section>
    `;
  }
}

export default CGPAPageDecorator;