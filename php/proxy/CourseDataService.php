<?php

require_once 'DataAccessInterface.php';

class CourseDataService implements DataAccessInterface {
    private $courses;

    public function __construct() {
        // Hardcoded course data (taken from js/courses.js)
        $this->courses = [
            ['CourseCode' => 'ENG102', 'CourseName' => 'Introduction to Composition', 'CrHour' => 3, 'CourseDescription' => 'University Core - Languages', 'Prerequisite' => 'None'],
            ['CourseCode' => 'ENG103', 'CourseName' => 'Intermediate Composition', 'CrHour' => 3, 'CourseDescription' => 'University Core - Languages', 'Prerequisite' => 'ENG102'],
            ['CourseCode' => 'ENG111', 'CourseName' => 'Public Speaking', 'CrHour' => 3, 'CourseDescription' => 'University Core - Languages', 'Prerequisite' => 'None'],
            ['CourseCode' => 'BEN205', 'CourseName' => 'Bangla Language', 'CrHour' => 3, 'CourseDescription' => 'University Core - Languages', 'Prerequisite' => 'None'],
            ['CourseCode' => 'PHI104', 'CourseName' => 'Introduction to Ethics', 'CrHour' => 3, 'CourseDescription' => 'University Core - Humanities', 'Prerequisite' => 'None'],
            ['CourseCode' => 'HIS102', 'CourseName' => 'Introduction to World Civilization', 'CrHour' => 3, 'CourseDescription' => 'University Core - Humanities', 'Prerequisite' => 'None'],
            ['CourseCode' => 'HIS103', 'CourseName' => 'Emergence of Bangladesh', 'CrHour' => 3, 'CourseDescription' => 'University Core - Humanities', 'Prerequisite' => 'None'],
            ['CourseCode' => 'ECO101', 'CourseName' => 'Introduction to Microeconomics', 'CrHour' => 3, 'CourseDescription' => 'University Core - Social Sciences', 'Prerequisite' => 'None'],
            ['CourseCode' => 'ECO104', 'CourseName' => 'Introduction to Macroeconomics', 'CrHour' => 3, 'CourseDescription' => 'University Core - Social Sciences', 'Prerequisite' => 'ECO101'],
            ['CourseCode' => 'POL101', 'CourseName' => 'Introduction to Political Science', 'CrHour' => 3, 'CourseDescription' => 'University Core - Social Sciences', 'Prerequisite' => 'None'],
            ['CourseCode' => 'CSE115', 'CourseName' => 'Programming Language I', 'CrHour' => 4, 'CourseDescription' => 'University Core - Computer and Math Skills', 'Prerequisite' => 'None'],
            ['CourseCode' => 'CSE115L', 'CourseName' => 'Programming Language I Lab', 'CrHour' => 0, 'CourseDescription' => 'University Core - Computer and Math Skills', 'Prerequisite' => 'CSE115'],
            ['CourseCode' => 'MAT361', 'CourseName' => 'Probability and Statistics', 'CrHour' => 3, 'CourseDescription' => 'University Core - Computer and Math Skills', 'Prerequisite' => 'MAT120'],
            ['CourseCode' => 'MAT125', 'CourseName' => 'Linear Algebra', 'CrHour' => 3, 'CourseDescription' => 'University Core - Computer and Math Skills', 'Prerequisite' => 'MAT120'],
            ['CourseCode' => 'BIO103', 'CourseName' => 'Biology', 'CrHour' => 4, 'CourseDescription' => 'University Core - Sciences (with Lab)', 'Prerequisite' => 'None'],
            ['CourseCode' => 'PHY107', 'CourseName' => 'Physics I', 'CrHour' => 4, 'CourseDescription' => 'University Core - Sciences (with Lab)', 'Prerequisite' => 'None'],
            ['CourseCode' => 'CHE101', 'CourseName' => 'Chemistry I', 'CrHour' => 4, 'CourseDescription' => 'University Core - Sciences (with Lab)', 'Prerequisite' => 'None'],
            // Add more courses as needed (this is a subset for brevity)
        ];
    }

    public function getCourses($page, $limit) {
        $offset = ($page - 1) * $limit;
        $totalCourses = count($this->courses);
        $slicedCourses = array_slice($this->courses, $offset, $limit);

        return [
            'data' => $slicedCourses,
            'totalCourses' => $totalCourses,
            'totalPages' => ceil($totalCourses / $limit),
            'currentPage' => $page
        ];
    }

    // Not used for course data, but required by the interface
    public function getUserById($nsu_id) {
        return null;
    }
}

?>