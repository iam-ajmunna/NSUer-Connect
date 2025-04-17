<?php

include 'db_config.php';

$conn = getDBConnection();

$limit = 50;
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;
$offset = ($page - 1) * $limit;

$sql = "SELECT CourseCode, CourseName, CrHour, CourseDescription, Prerequisite FROM courses LIMIT $limit OFFSET $offset";
$result = $conn->query($sql);

$courses = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $courses[] = $row;
    }
}

$totalCoursesResult = $conn->query("SELECT COUNT(*) AS total FROM courses");
$totalCourses = $totalCoursesResult->fetch_assoc()['total'];
$totalPages = ceil($totalCourses / $limit);

$response = [
    'data' => $courses,
    'totalPages' => $totalPages,
    'currentPage' => $page,
];

header('Content-Type: application/json');
echo json_encode($response);

closeDBConnection(); 
?>