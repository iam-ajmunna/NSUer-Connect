<?php
$servername = "localhost"; // Or your specific server hostname
$username = "root";  // Your database username
$password = "";  // Your database password
$dbname = "nsuer_connect";  // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    echo "Database connection successful!"; // Temporary test
    die("Connection failed: " . $conn->connect_error);
}

// Function to get the database connection (for use in other files)
function getDBConnection() {
    global $conn;
    return $conn;
}
?>