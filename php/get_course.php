<?php
 include 'db_config.php'; // Include the database configuration
 

 $conn = getDBConnection(); // Get the database connection
 

 // SQL to select all courses
 $sql = "SELECT 
  CourseCode, 
  CourseName, 
  CrHour, 
  CourseDescription,
  Prerequisite 
  FROM Courses";
 $result = $conn->query($sql);
 

 $courses = []; // Array to store courses
 

 if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
  $courses[] = $row;
  }
 }
 

 header('Content-Type: application/json'); // Set header to JSON
 echo json_encode($courses); // Return the courses as JSON
 

 $conn->close(); // Close the connection
 ?>