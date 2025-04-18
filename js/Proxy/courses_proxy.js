export default class CoursesProxy {
  constructor() {
    // Hardcoded course data (fixed: removed duplicate STA201, corrected EEE141L)
    this.courses = [
      { Department: 'CSE', CourseCode: 'ENG102', CourseName: 'Introduction to Composition', Category: 'University Core - Languages', Credits: 3 },
      { Department: 'CSE', CourseCode: 'ENG103', CourseName: 'Intermediate Composition', Category: 'University Core - Languages', Credits: 3 },
      { Department: 'CSE', CourseCode: 'ENG111', CourseName: 'Public Speaking', Category: 'University Core - Languages', Credits: 3 },
      { Department: 'CSE', CourseCode: 'BEN205', CourseName: 'Bangla Language', Category: 'University Core - Languages', Credits: 3 },
      { Department: 'CSE', CourseCode: 'PHI104', CourseName: 'Introduction to Ethics', Category: 'University Core - Humanities', Credits: 3 },
      { Department: 'CSE', CourseCode: 'HIS102', CourseName: 'Introduction to World Civilization', Category: 'University Core - Humanities', Credits: 3 },
      { Department: 'CSE', CourseCode: 'HIS103', CourseName: 'Emergence of Bangladesh', Category: 'University Core - Humanities', Credits: 3 },
      { Department: 'CSE', CourseCode: 'ECO101', CourseName: 'Introduction to Microeconomics', Category: 'University Core - Social Sciences', Credits: 3 },
      { Department: 'CSE', CourseCode: 'ECO104', CourseName: 'Introduction to Macroeconomics', Category: 'University Core - Social Sciences', Credits: 3 },
      { Department: 'CSE', CourseCode: 'POL101', CourseName: 'Introduction to Political Science', Category: 'University Core - Social Sciences', Credits: 3 },
      { Department: 'CSE', CourseCode: 'POL104', CourseName: 'Introduction to Governance', Category: 'University Core - Social Sciences', Credits: 3 },
      { Department: 'CSE', CourseCode: 'SOC101', CourseName: 'Introduction to Sociology', Category: 'University Core - Social Sciences', Credits: 3 },
      { Department: 'CSE', CourseCode: 'ANT101', CourseName: 'Introduction to Anthropology', Category: 'University Core - Social Sciences', Credits: 3 },
      { Department: 'CSE', CourseCode: 'ENV203', CourseName: 'Introduction to Bangladesh Geography', Category: 'University Core - Social Sciences', Credits: 3 },
      { Department: 'CSE', CourseCode: 'GEO205', CourseName: 'Introduction to Bangladesh Geography', Category: 'University Core - Social Sciences', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE115', CourseName: 'Programming Language I', Category: 'University Core - Computer and Math Skills', Credits: 4 },
      { Department: 'CSE', CourseCode: 'CSE115L', CourseName: 'Programming Language I Lab', Category: 'University Core - Computer and Math Skills', Credits: 0 },
      { Department: 'CSE', CourseCode: 'MAT361', CourseName: 'Probability and Statistics', Category: 'University Core - Computer and Math Skills', Credits: 3 },
      { Department: 'CSE', CourseCode: 'MAT125', CourseName: 'Linear Algebra', Category: 'University Core - Computer and Math Skills', Credits: 3 },
      { Department: 'CSE', CourseCode: 'BIO103', CourseName: 'Biology', Category: 'University Core - Sciences (with Lab)', Credits: 4 },
      { Department: 'CSE', CourseCode: 'PHY107', CourseName: 'Physics I', Category: 'University Core - Sciences (with Lab)', Credits: 4 },
      { Department: 'CSE', CourseCode: 'CHE101', CourseName: 'Chemistry I', Category: 'University Core - Sciences (with Lab)', Credits: 4 },
      { Department: 'CSE', CourseCode: 'MAT116', CourseName: 'Pre-Calculus', Category: 'School of Engineering and Physical Sciences (SEPS) Core', Credits: 0 },
      { Department: 'CSE', CourseCode: 'MAT120', CourseName: 'Calculus I', Category: 'School of Engineering and Physical Sciences (SEPS) Core', Credits: 3 },
      { Department: 'CSE', CourseCode: 'MAT130', CourseName: 'Calculus II', Category: 'School of Engineering and Physical Sciences (SEPS) Core', Credits: 3 },
      { Department: 'CSE', CourseCode: 'MAT250', CourseName: 'Calculus III', Category: 'School of Engineering and Physical Sciences (SEPS) Core', Credits: 3 },
      { Department: 'CSE', CourseCode: 'MAT350', CourseName: 'Engineering Mathematics', Category: 'School of Engineering and Physical Sciences (SEPS) Core', Credits: 3 },
      { Department: 'CSE', CourseCode: 'PHY108', CourseName: 'Physics II', Category: 'School of Engineering and Physical Sciences (SEPS) Core', Credits: 4 },
      { Department: 'CSE', CourseCode: 'EEE452', CourseName: 'Engineering Economics', Category: 'School of Engineering and Physical Sciences (SEPS) Core', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CEE110', CourseName: 'Engineering Drawing (EEE 154)', Category: 'School of Engineering and Physical Sciences (SEPS) Core', Credits: 1 },
      { Department: 'CSE', CourseCode: 'CSE173', CourseName: 'Discrete Mathematics', Category: 'CSE Core Courses', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE215', CourseName: 'Programming Language II', Category: 'CSE Core Courses', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE215L', CourseName: 'Programming Language II Lab', Category: 'CSE Core Courses', Credits: 1 },
      { Department: 'CSE', CourseCode: 'CSE225', CourseName: 'Data Structures and Algorithm', Category: 'CSE Core Courses', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE225L', CourseName: 'Data Structures and Algorithm Lab', Category: 'CSE Core Courses', Credits: 0 },
      { Department: 'CSE', CourseCode: 'CSE231', CourseName: 'Digital Logic Design', Category: 'CSE Core Courses', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE231L', CourseName: 'Digital Logic Design Lab', Category: 'CSE Core Courses', Credits: 0 },
      { Department: 'CSE', CourseCode: 'EEE141', CourseName: 'Electrical Circuits I', Category: 'CSE Core Courses', Credits: 3 },
      { Department: 'CSE', CourseCode: 'EEE141L', CourseName: 'Electrical Circuits I Lab', Category: 'CSE Core Courses', Credits: 1 },
      { Department: 'CSE', CourseCode: 'EEE111', CourseName: 'Analog Electronics I', Category: 'CSE Core Courses', Credits: 3 },
      { Department: 'CSE', CourseCode: 'EEE111L', CourseName: 'Analog Electronics I Lab', Category: 'CSE Core Courses', Credits: 1 },
      { Department: 'CSE', CourseCode: 'CSE311', CourseName: 'Database Systems', Category: 'CSE Core Courses', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE311L', CourseName: 'Database Systems Lab', Category: 'CSE Core Courses', Credits: 0 },
      { Department: 'CSE', CourseCode: 'CSE323', CourseName: 'Operating Systems Design', Category: 'CSE Core Courses', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE327', CourseName: 'Software Engineering', Category: 'CSE Core Courses', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE331', CourseName: 'Microprocessor Interfacing & Embedded Sys.', Category: 'CSE Core Courses', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE331L', CourseName: 'Microprocessor Interfacing & Emb. Sys.', Category: 'CSE Core Courses', Credits: 0 },
      { Department: 'CSE', CourseCode: 'CSE373', CourseName: 'Design and Analysis of Algorithms', Category: 'CSE Core Courses', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE332', CourseName: 'Computer Organization and Architecture', Category: 'CSE Core Courses', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE425', CourseName: 'Concepts of Programming Language', Category: 'CSE Core Courses', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE299', CourseName: 'Junior Design Project I', Category: 'CSE Major Capstone Design', Credits: 1 },
      { Department: 'CSE', CourseCode: 'CSE499A', CourseName: 'Senior Design Project I', Category: 'CSE Major Capstone Design', Credits: 1.5 },
      { Department: 'CSE', CourseCode: 'CSE499B', CourseName: 'Senior Design Project II', Category: 'CSE Major Capstone Design', Credits: 1.5 },
      { Department: 'CSE', CourseCode: 'CSE498', CourseName: 'Intern/Co-op', Category: 'Internship/Co-op', Credits: 0 },
      { Department: 'CSE', CourseCode: 'CSE401', CourseName: 'Advanced Programming Techniques', Category: 'CSE Specialized Elective Courses - Algorithms and Computation Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE417', CourseName: 'Numerical Methods', Category: 'CSE Specialized Elective Courses - Algorithms and Computation Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE418', CourseName: 'Computer Graphics', Category: 'CSE Specialized Elective Courses - Algorithms and Computation Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE426', CourseName: 'Compiler Constructions', Category: 'CSE Specialized Elective Courses - Algorithms and Computation Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE473', CourseName: 'Theory of Computation', Category: 'CSE Specialized Elective Courses - Algorithms and Computation Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE491', CourseName: 'Special Topics', Category: 'CSE Specialized Elective Courses - Algorithms and Computation Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE411', CourseName: 'Advanced Database Systems', Category: 'CSE Specialized Elective Courses - Software Engineering Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE427', CourseName: 'Software Quality Assurance & Testing', Category: 'CSE Specialized Elective Courses - Software Engineering Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE428', CourseName: 'Software Process Management', Category: 'CSE Specialized Elective Courses - Software Engineering Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE429', CourseName: 'Software System Architecture', Category: 'CSE Specialized Elective Courses - Software Engineering Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE492', CourseName: 'Special Topics', Category: 'CSE Specialized Elective Courses - Software Engineering Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE422', CourseName: 'Modelling and Simulation', Category: 'CSE Specialized Elective Courses - Networks Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE438', CourseName: 'Data Communication & Network', Category: 'CSE Specialized Elective Courses - Networks Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE482', CourseName: 'Internet and Web Technology', Category: 'CSE Specialized Elective Courses - Networks Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE485', CourseName: 'Digital Signal Processing', Category: 'CSE Specialized Elective Courses - Networks Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE486', CourseName: 'Mobile and Wireless Application Development', Category: 'CSE Specialized Elective Courses - Networks Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE493', CourseName: 'Special Topics', Category: 'CSE Specialized Elective Courses - Networks Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE433', CourseName: 'Advanced Architecture', Category: 'CSE Specialized Elective Courses - Computer Architecture and VLSI Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE435', CourseName: 'Introduction to VLSI Design', Category: 'CSE Specialized Elective Courses - Computer Architecture and VLSI Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE413', CourseName: 'Verilog HDL: Modelling, Simulation, and Synthesis', Category: 'CSE Specialized Elective Courses - Computer Architecture and VLSI Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE414', CourseName: 'Advanced Chip Design Methodology and Optimization using HDL', Category: 'CSE Specialized Elective Courses - Computer Architecture and VLSI Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE415', CourseName: 'VLSI Chip Testing', Category: 'CSE Specialized Elective Courses - Computer Architecture and VLSI Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE494', CourseName: 'Special Topics', Category: 'CSE Specialized Elective Courses - Computer Architecture and VLSI Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE440', CourseName: 'Artificial Intelligence', Category: 'CSE Specialized Elective Courses - Artificial Intelligence Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE445', CourseName: 'Machine Learning', Category: 'CSE Specialized Elective Courses - Artificial Intelligence Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE465', CourseName: 'Pattern Recognition and Neural Network', Category: 'CSE Specialized Elective Courses - Artificial Intelligence Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE467', CourseName: 'Digital Image Processing', Category: 'CSE Specialized Elective Courses - Artificial Intelligence Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE470', CourseName: 'Theory of Fuzzy Systems', Category: 'CSE Specialized Elective Courses - Artificial Intelligence Trail', Credits: 3 },
      { Department: 'CSE', CourseCode: 'CSE495', CourseName: 'Special Topics', Category: 'CSE Specialized Elective Courses - Artificial Intelligence Trail', Credits: 3 },
      { Department: 'BBA', CourseCode: 'ACT201', CourseName: 'Financial Accounting', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'ACT202', CourseName: 'Managerial Accounting', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'ENG105', CourseName: 'Business Communication', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BUS101', CourseName: 'Introduction to Business', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'ECO101', CourseName: 'Introduction to Microeconomics', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'ECO104', CourseName: 'Introduction to Macroeconomics', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'FIN250', CourseName: 'Principles of Finance', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'MGT210', CourseName: 'Principles of Management', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'MKT220', CourseName: 'Principles of Marketing', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'STA201', CourseName: 'Business Statistics', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA301', CourseName: 'Human Resources Management', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA302', CourseName: 'Organizational Behavior', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA303', CourseName: 'Business Law', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA304', CourseName: 'Business Mathematics', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA305', CourseName: 'Business Statistics II', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA401', CourseName: 'Business Research Methods', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA402', CourseName: 'Entrepreneurship', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA403', CourseName: 'International Business', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA404', CourseName: 'Strategic Management', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA405', CourseName: 'Management Information Systems', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA406', CourseName: 'Financial Management', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA407', CourseName: 'Marketing Management', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA408', CourseName: 'Production and Operations Management', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA409', CourseName: 'Organizational Behavior', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA410', CourseName: 'Human Resource Management', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA411', CourseName: 'Business Ethics', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA412', CourseName: 'Business and Society', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA413', CourseName: 'Taxation', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA414', CourseName: 'Insurance', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA415', CourseName: 'Banking', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA416', CourseName: 'Investment Analysis', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA417', CourseName: 'Financial Institutions', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA418', CourseName: 'International Finance', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA419', CourseName: 'Financial Derivatives', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA420', CourseName: 'Consumer Behavior', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA421', CourseName: 'Advertising and Promotion Management', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA422', CourseName: 'Sales Management', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA423', CourseName: 'Retail Management', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA424', CourseName: 'Marketing Research', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA425', CourseName: 'E-Commerce', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA426', CourseName: 'Supply Chain Management', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA427', CourseName: 'Project Management', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA428', CourseName: 'Operations Research', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA429', CourseName: 'Total Quality Management', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA430', CourseName: 'Cross-Cultural Management', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA431', CourseName: 'Organizational Development', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA432', CourseName: 'Industrial Relations', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA433', CourseName: 'Compensation Management', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA434', CourseName: 'Training and Development', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA435', CourseName: 'Performance Management', Category: 'BBA Core Courses', Credits: 3 },
      { Department: 'BBA', CourseCode: 'BBA436', CourseName: 'Career Management', Category: 'BBA Core Courses', Credits: 3 }
    ];
    console.log(`Proxy: Initialized with ${this.courses.length} courses`);
    if (this.courses.length === 0) {
      console.warn('Proxy: No courses loaded');
    }
  }

  // Get all courses (for retrieving a specific course by code)
  getAllCourses() {
    console.log('Proxy: Fetching all courses');
    return [...this.courses];
  }

  // Get department options for filter dropdown
  getDepartmentOptions() {
    console.log('Proxy: Fetching department options');
    const departments = ['all', ...new Set(this.courses.map(course => course.Department))];
    const options = departments.map(dept => ({
      value: dept,
      label: dept === 'all' ? 'All Departments' : dept
    }));
    console.log(`Proxy: Returning ${options.length} department options`);
    return options;
  }

  // Get paginated and filtered courses
  getCourses(page, coursesPerPage, filters = {}) {
    console.log(`Proxy: Fetching courses: page=${page}, coursesPerPage=${coursesPerPage}, filters=`, filters);

    // Validate inputs
    page = Number(page);
    coursesPerPage = Number(coursesPerPage);
    if (!Number.isInteger(page) || page < 1) {
      console.warn('Proxy: Invalid page number, defaulting to 1');
      page = 1;
    }
    if (!Number.isInteger(coursesPerPage) || coursesPerPage < 1) {
      console.warn('Proxy: Invalid courses per page, defaulting to 60');
      coursesPerPage = 60;
    }

    // Apply filters
    let filteredCourses = [...this.courses];
    if (filters.department && filters.department !== 'all') {
      filteredCourses = filteredCourses.filter(course => course.Department === filters.department);
    }
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filteredCourses = filteredCourses.filter(course =>
        course.CourseCode.toLowerCase().includes(searchTerm) ||
        course.CourseName.toLowerCase().includes(searchTerm)
      );
    }

    // Pagination
    const totalCourses = filteredCourses.length;
    const totalPages = Math.ceil(totalCourses / coursesPerPage);
    const startIndex = (page - 1) * coursesPerPage;
    const paginatedCourses = filteredCourses.slice(startIndex, startIndex + coursesPerPage);

    console.log(`Proxy: Returning ${paginatedCourses.length} courses for page ${page} (total pages: ${totalPages})`);
    return {
      courses: paginatedCourses,
      totalPages,
      totalCourses
    };
  }

  // Get a single course by CourseCode (for addCourseToMyCourses)
  getCourseByCode(courseCode) {
    console.log(`Proxy: Fetching course with code ${courseCode}`);
    const course = this.courses.find(course => course.CourseCode === courseCode);
    if (!course) {
      console.warn(`Proxy: Course with code ${courseCode} not found`);
    }
    return course ? { ...course } : null;
  }
}