import PageDecorator from './page_decorator.js';

class CoursesPageDecorator extends PageDecorator {
  constructor(page) {
    super(page);
  }

  render() {
    super.render(); 
    const coursesHTML = this.getCoursesHTML();
    this.page.setContent(coursesHTML); 
  }

  getCoursesHTML() {
    return `
      <section id="my-courses" class="courses-section">
    <h2 class="section-title">My Courses</h2>
    <div class="table-wrapper">
    <table class="course-table">
    <thead class="table-header">
    <tr>
    <th class="table-heading">Code</th>
    <th class="table-heading">Name</th>
    <th class="table-heading">Credits</th>
    <th class="table-heading">Grade</th>
    <th class="table-heading">Grade Points</th>
    </tr>
    </thead>
    <tbody id="my-courses-table-body" class="table-body">
    </tbody>
    </table>
     <div class="hist-grades">
                        <h2>Grade History of <b>2211796</b></h2>
                        <h3>Waiver Courses</h3>
                        <table id="" class="table table-bordered table-striped table-responsive">
                            <thead>
                            <tr class="center">
                                <th>Course Code</th>
                                <th>Course Credit</th>
                                <th>Course Title</th>
                                <th>Course Grade</th>
                            </tr>
                            </thead>

                            <tbody>
                                                            <tr class="">
                                    <td>MAT112</td>
                                    <td>3</td>
                                    <td>Elementary Mathematics</td>
                                    <td></td>
                                 </tr>
                            
                            <tr class="divider-td">
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            </tbody>
                        </table>

                        <h3>Transfer Courses</h3>
                        <table id="" class="table table-bordered table-striped table-responsive">
                            <thead>
                            <tr class="center">
                                <th>Course Code</th>
                                <th>Course Credit</th>
                                <th>Course Title</th>
                            </tr>
                            </thead>

                            <tbody>
                            
                            <tr class="divider-td">
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            </tbody>
                        </table>

                        <table id="" class="table table-bordered table-striped table-responsive">
                            <thead>
                            <tr class="center">
                                <th>Semester Name</th>
                                <th>Semester Year</th>
                                <th>Course Code</th>
                                <th>Section</th>
                                <th>FacultyCode</th>
                                <th>Faculty Name</th>
                                <th>Course Credit</th>
                                <th>Course Title</th>
                                <th>Course Grade</th>
                                <th>Cr.Count</th>
                                <th>Cr.Passed</th>
                            </tr>
                            </thead>

                            <tbody>
                                                                <tr class="">
                                        <td rowspan="1" class="special">Spring</td>
                                        <td rowspan="1" class="special">2022</td>
                                        <td>CSE115</td>
                                        <td>4</td>
                                        <td>SnS1</td>
                                        <td>Dr. Shahnewaz  Siddique</td>
                                        <td>3.00</td>
                                        <td>Programming Language I</td>
                                        <td>A</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>CSE115L</td>
                                        <td>4</td>
                                        <td>SnS1</td>
                                        <td>Dr. Shahnewaz  Siddique</td>
                                        <td>1.00</td>
                                        <td>Programming Language I Lab</td>
                                        <td>A</td>
                                        <td>1.00</td>
                                        <td>1.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>ENG102</td>
                                        <td>3</td>
                                        <td>Ssy</td>
                                        <td>Ms. Sakiba  Ferdousy</td>
                                        <td>3.00</td>
                                        <td>Introduction to Composition</td>
                                        <td>A-</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>MAT116</td>
                                        <td>27</td>
                                        <td>FDE</td>
                                        <td>Dr. Farah  Deeba </td>
                                        <td>3.00</td>
                                        <td>Pre-Calculus</td>
                                        <td>A-</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                    <tr class="divider-td">
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td> </td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td> </td>
                                            <td>&nbsp;</td>
                                            <td> </td>
                                            <td>&nbsp;</td>
                                        </tr>
                                                                        <tr class="">
                                        <td rowspan="1" class="special">Summer</td>
                                        <td rowspan="1" class="special">2022</td>
                                        <td>CSE173</td>
                                        <td>9</td>
                                        <td>SfT</td>
                                        <td>Dr. Saifuddin Md. Tareeq</td>
                                        <td>3.00</td>
                                        <td>Discrete Mathematics</td>
                                        <td>A</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>ENG103</td>
                                        <td>36</td>
                                        <td>Ssy</td>
                                        <td>Ms. Sakiba  Ferdousy</td>
                                        <td>3.00</td>
                                        <td>Intermediate Composition</td>
                                        <td>B+</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>MAT120</td>
                                        <td>23</td>
                                        <td>SK</td>
                                        <td>Dr. Shahansha  Khan</td>
                                        <td>3.00</td>
                                        <td>Calculus and Analytic Geometry-I</td>
                                        <td>B</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                    <tr class="divider-td">
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td> </td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td> </td>
                                            <td>&nbsp;</td>
                                            <td> </td>
                                            <td>&nbsp;</td>
                                        </tr>
                                                                        <tr class="">
                                        <td rowspan="1" class="special">Fall</td>
                                        <td rowspan="1" class="special">2022</td>
                                        <td>BEN205</td>
                                        <td>19</td>
                                        <td>Gdd</td>
                                        <td>Dr. Mohammad Giasuddin  </td>
                                        <td>3.00</td>
                                        <td>Bengali language and Literature</td>
                                        <td>A-</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>CSE215</td>
                                        <td>7</td>
                                        <td>MAY</td>
                                        <td>Dr. Mohammad Abu Yousuf</td>
                                        <td>3.00</td>
                                        <td>Programming Language II</td>
                                        <td>A</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>CSE215L</td>
                                        <td>7</td>
                                        <td>MAY</td>
                                        <td>Dr. Mohammad Abu Yousuf</td>
                                        <td>1.00</td>
                                        <td>Programming Language II Lab</td>
                                        <td>A</td>
                                        <td>1.00</td>
                                        <td>1.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>MAT130</td>
                                        <td>16</td>
                                        <td>Thr</td>
                                        <td>Dr. Mohammad Abu Taher</td>
                                        <td>3.00</td>
                                        <td>Calculus and Analytic Geometry-II</td>
                                        <td>A-</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                    <tr class="divider-td">
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td> </td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td> </td>
                                            <td>&nbsp;</td>
                                            <td> </td>
                                            <td>&nbsp;</td>
                                        </tr>
                                                                        <tr class="">
                                        <td rowspan="1" class="special">Spring</td>
                                        <td rowspan="1" class="special">2023</td>
                                        <td>CHE101</td>
                                        <td>23</td>
                                        <td>SQU</td>
                                        <td>Dr. Shamshad Begun Quraishi</td>
                                        <td>3.00</td>
                                        <td>General Chemistry</td>
                                        <td>A-</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>CSE225</td>
                                        <td>9</td>
                                        <td>AHbb</td>
                                        <td>Dr. Ahsan  Habib</td>
                                        <td>3.00</td>
                                        <td>Data Structure &amp; Algorithm</td>
                                        <td>A-</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>EEE154</td>
                                        <td>14</td>
                                        <td>NS</td>
                                        <td>Ms. Nabila  Sultana</td>
                                        <td>1.00</td>
                                        <td>Engineering Drawing</td>
                                        <td>A-</td>
                                        <td>1.00</td>
                                        <td>1.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>HIS103</td>
                                        <td>58</td>
                                        <td>DAMn</td>
                                        <td>Dr. Amena  Mohsin</td>
                                        <td>3.00</td>
                                        <td>Emergence of Bangladesh</td>
                                        <td>A-</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>MAT125</td>
                                        <td>1</td>
                                        <td>UMM</td>
                                        <td>Dr. Mohammad Monir Uddin</td>
                                        <td>3.00</td>
                                        <td>Introduction to Linear Algebra</td>
                                        <td>A-</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>MAT250</td>
                                        <td>17</td>
                                        <td>AmK</td>
                                        <td>Dr. M Abdul Hakim Khan</td>
                                        <td>3.00</td>
                                        <td>Calculus and Analytic Geometry IV</td>
                                        <td>C</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>PHY107</td>
                                        <td>2</td>
                                        <td>RUH</td>
                                        <td>Dr. Rubaiyet Iftekharul Haque</td>
                                        <td>3.00</td>
                                        <td>General Physics-I</td>
                                        <td>A-</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                    <tr class="divider-td">
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td> </td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td> </td>
                                            <td>&nbsp;</td>
                                            <td> </td>
                                            <td>&nbsp;</td>
                                        </tr>
                                                                        <tr class="">
                                        <td rowspan="1" class="special">Summer</td>
                                        <td rowspan="1" class="special">2023</td>
                                        <td>BIO103</td>
                                        <td>27</td>
                                        <td>HMS</td>
                                        <td>Dr. Hussain Md Shahjalal</td>
                                        <td>3.00</td>
                                        <td>Biology I</td>
                                        <td>A</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>CSE231</td>
                                        <td>5</td>
                                        <td>SMMA</td>
                                        <td>Dr. S M Mahfuz Alam</td>
                                        <td>3.00</td>
                                        <td>Digital Logic</td>
                                        <td>A-</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>EEE141</td>
                                        <td>17</td>
                                        <td>KMM</td>
                                        <td>Dr. Mohammad Monirujjaman Khan</td>
                                        <td>3.00</td>
                                        <td>Electrical Circuits</td>
                                        <td>A</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>EEE141L</td>
                                        <td>17</td>
                                        <td>KMM</td>
                                        <td>Dr. Mohammad Monirujjaman Khan</td>
                                        <td>1.00</td>
                                        <td>Electrical Circuits Lab</td>
                                        <td>A-</td>
                                        <td>1.00</td>
                                        <td>1.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>ENV203</td>
                                        <td>6</td>
                                        <td>RMr</td>
                                        <td>Dr. Md. Mizanur Rahman</td>
                                        <td>3.00</td>
                                        <td>Introduction to Geography</td>
                                        <td>A-</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>PHY107L</td>
                                        <td>16</td>
                                        <td>Nan</td>
                                        <td>Ms. Naureen  Ahsan</td>
                                        <td>1.00</td>
                                        <td>Physics I Lab</td>
                                        <td>B</td>
                                        <td>1.00</td>
                                        <td>1.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>PHY108</td>
                                        <td>6</td>
                                        <td>SCG</td>
                                        <td>Dr. Subir Chandra Ghosh</td>
                                        <td>3.00</td>
                                        <td>General Physics-II</td>
                                        <td>B+</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                    <tr class="divider-td">
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td> </td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td> </td>
                                            <td>&nbsp;</td>
                                            <td> </td>
                                            <td>&nbsp;</td>
                                        </tr>
                                                                        <tr class="">
                                        <td rowspan="1" class="special">Spring</td>
                                        <td rowspan="1" class="special">2024</td>
                                        <td>CSE311</td>
                                        <td>8</td>
                                        <td>KMN1</td>
                                        <td>Dr. Kamruddin Md. Nur</td>
                                        <td>3.00</td>
                                        <td>Database Management System</td>
                                        <td>A</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>CSE332</td>
                                        <td>5</td>
                                        <td>Sfm</td>
                                        <td>Dr. M Shafiul Alam</td>
                                        <td>3.00</td>
                                        <td>Computer Organization and Architecture</td>
                                        <td>A</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>ECO101</td>
                                        <td>60</td>
                                        <td>Stq</td>
                                        <td>Mr. Syed Iftekharul Huq</td>
                                        <td>3.00</td>
                                        <td>Introduction to Microeconomics</td>
                                        <td>A</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>HIS102</td>
                                        <td>12</td>
                                        <td>ABS3</td>
                                        <td>Dr. Md. Abdus Samad</td>
                                        <td>3.00</td>
                                        <td>Introduction to World Civilization</td>
                                        <td>A-</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>MAT350</td>
                                        <td>11</td>
                                        <td>PNG</td>
                                        <td>Dr. Preetom  Nag</td>
                                        <td>3.00</td>
                                        <td>Engineering Mathematics</td>
                                        <td>A</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>PHY108L</td>
                                        <td>7</td>
                                        <td>AuZ</td>
                                        <td>Dr. Muhammad Asad-Uz- Zaman</td>
                                        <td>1.00</td>
                                        <td>General Physics-II Lab</td>
                                        <td>A-</td>
                                        <td>1.00</td>
                                        <td>1.00</td>
                                    </tr>
                                

                                                                    <tr class="divider-td">
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td> </td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td>&nbsp;</td>
                                            <td> </td>
                                            <td>&nbsp;</td>
                                            <td> </td>
                                            <td>&nbsp;</td>
                                        </tr>
                                                                        <tr class="">
                                        <td rowspan="1" class="special">Summer</td>
                                        <td rowspan="1" class="special">2024</td>
                                        <td>CSE323</td>
                                        <td>2</td>
                                        <td>NvA</td>
                                        <td>Dr. Nova  Ahmed</td>
                                        <td>3.00</td>
                                        <td>Operating Systems Design</td>
                                        <td>B+</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>CSE331</td>
                                        <td>8</td>
                                        <td>SMH2</td>
                                        <td>Mr. Syed Mahmud Hossain</td>
                                        <td>3.00</td>
                                        <td>Microprocessor Interfacing &amp; Embedded System</td>
                                        <td>A</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>EEE111</td>
                                        <td>2</td>
                                        <td>Aqu</td>
                                        <td>Dr. Atiqur  Rahman</td>
                                        <td>3.00</td>
                                        <td>Analog Electronics</td>
                                        <td>A</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>EEE111L</td>
                                        <td>2</td>
                                        <td>Aqu</td>
                                        <td>Dr. Atiqur  Rahman</td>
                                        <td>1.00</td>
                                        <td>Analog Electronics Lab</td>
                                        <td>A</td>
                                        <td>1.00</td>
                                        <td>1.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>MAT361</td>
                                        <td>17</td>
                                        <td>MALN</td>
                                        <td>Dr. Md.  Alamin</td>
                                        <td>3.00</td>
                                        <td>Probability and Statistics</td>
                                        <td>A-</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                                <tr class="">
                                        <td rowspan="1"></td>
                                        <td rowspan="1"></td>
                                        <td>PHI104</td>
                                        <td>17</td>
                                        <td>SYN</td>
                                        <td>Dr. Syed Moynul Alam Nizar</td>
                                        <td>3.00</td>
                                        <td>Introduction to Ethics</td>
                                        <td>A</td>
                                        <td>3.00</td>
                                        <td>3.00</td>
                                    </tr>
                                

                                                        <tr class="divider-td">
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td> </td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td> </td>
                                <td>&nbsp;</td>
                                <td> </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
    </div>
    </section>
  
    <section id="cgpa-summary" class="courses-section">
    <h2 class="section-title">CGPA Summary</h2>
    <div class="cgpa-summary-container">
    <p>Total Credits: <span id="total-credits">0</span></p>
    <p>Total Grade Points: <span id="total-grade-points">0</span></p>
    <p>CGPA: <span id="total-cgpa">0.00</span></p>
    </div>
    </section>
  
    <section id="courses" class="courses-section">
    <h2 class="section-title">Course Information</h2>
    <div id="all-courses" class="course-section">
    <h3 class="subsection-title">All Courses</h3>
    <p class="section-description">Browse all courses offered at NSU.</p>
    <div class="course-filter">
    <input type="text" id="filter-input" class="filter-input" placeholder="Filter by course code or name">
    <select id="filter-select" class="filter-select">
    <option value="all">All Departments</option>
    <option value="CSE">CSE</option>
    <option value="BBA">BBA</option>
    </select>
    <button id="filter-button" class="btn btn-primary btn-filter">Filter</button>
    </div>
    <div class="table-wrapper">
    <table class="course-table">
    <thead class="table-header">
    <tr>
    <th class="table-heading">Code</th>
    <th class="table-heading">Name</th>
    <th class="table-heading">Department</th>
    <th class="table-heading">Category</th>
    <th class="table-heading">Credits</th>
    <th class="table-heading">Add</th>
    </tr>
    </thead>
    <tbody id="course-table-body" class="table-body">
    </tbody>
    </table>
    </div>
    <div class="pagination-controls" id="pagination-controls">
    <button id="prev-page" class="btn btn-secondary pagination-button">Previous</button>
    <div id="page-numbers" class="page-numbers">
    </div>
    <button id="next-page" class="btn btn-secondary pagination-button">Next</button>
    </div>
    </section>
    `;
  }
}

export default CoursesPageDecorator;