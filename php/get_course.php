<?php
 include 'db_config.php'; // Include the database configuration

 $conn = getDBConnection(); // Get the database connection

 $limit = 50; // Number of records per page
 $page = isset($_GET['page']) ? intval($_GET['page']) : 1; // Get current page number, default to 1
 $offset = ($page - 1) * $limit; // Calculate the offset

 // SQL to select limited courses
 $sql = "SELECT
  CourseCode,
  CourseName,
  CrHour,
  CourseDescription,
  Prerequisite
  FROM courses
  LIMIT $limit OFFSET $offset";

 $result = $conn->query($sql);

 $courses = []; // Array to store courses

 if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
  $courses[] = $row;
  }
 }

 // Get the total number of courses for pagination calculation
 $totalCoursesResult = $conn->query("SELECT COUNT(*) AS total FROM courses");
 $totalCourses = $totalCoursesResult->fetch_assoc()['total'];
 $totalPages = ceil($totalCourses / $limit);

 $response = [
  'data' => $courses,
  'totalPages' => $totalPages,
  'currentPage' => $page
 ];

 header('Content-Type: application/json'); // Set header to JSON
 echo json_encode($response); // Return the courses and pagination info

 $conn->close(); // Close the connection
 ?>