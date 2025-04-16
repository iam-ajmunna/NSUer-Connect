php
<?php
require_once 'db_config.php';

function authenticateUser($nsu_id, $password) {
    $conn = getDBConnection();
    $nsu_id = $conn->real_escape_string($nsu_id);
    $password = $conn->real_escape_string($password);

    $sql = "SELECT * FROM users WHERE nsu_id = '$nsu_id'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            return true; // Authentication successful
        } else {
            return false; // Incorrect password
        }
    } else {
        return false; // User not found
    }
}

// Handle POST request for login
if (isset($_SERVER["REQUEST_METHOD"]) && $_SERVER["REQUEST_METHOD"] == "POST") {
    $nsu_id = $_POST['nsu_id'];
    $password = $_POST['password'];

    if (authenticateUser($nsu_id, $password)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Invalid ID or password']);
    }
}
?>