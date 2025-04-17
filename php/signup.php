php
<?php
header('Content-Type: application/json');

// Include the database configuration file
require_once 'db_config.php';

// Check if all required parameters are present
if (empty($_POST['nsu_id']) || empty($_POST['password']) || empty($_POST['email'])) {
    http_response_code(400); // Bad Request
    echo json_encode(['success' => false, 'error' => 'Missing required parameters (nsu_id, password, email).']);
    exit;
}

$nsu_id = $_POST['nsu_id'];
$password = $_POST['password'];
$email = $_POST['email'];

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400); // Bad Request
    echo json_encode(['success' => false, 'error' => 'Invalid email format.']);
    exit;
}

// Get a database connection using the Singleton
$conn = getDBConnection();

try {
    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Prepare the SQL statement
    $stmt = $conn->prepare("INSERT INTO users (nsu_id, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $nsu_id, $email, $hashedPassword);

    // Execute the statement
    if ($stmt->execute()) {
        // Signup successful
        echo json_encode(['success' => true]);
    } else {
        // Signup failed
        http_response_code(500); // Internal Server Error
        echo json_encode(['success' => false, 'error' => 'Failed to create user.']);
    }

    // Close the statement
    $stmt->close();
} catch (Exception $e) {
    // Handle database errors
    http_response_code(500); // Internal Server Error
    echo json_encode(['success' => false, 'error' => 'Database error: ' . $e->getMessage()]);
} finally {
    // close the database connection
    closeDBConnection();
}
?>