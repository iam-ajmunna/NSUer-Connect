<?php
// auth.php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'error' => 'Only POST requests are allowed',
        'received_method' => $_SERVER['REQUEST_METHOD'],
    ]);
    exit;
}

if (!isset($_SERVER['CONTENT_TYPE']) || stripos($_SERVER['CONTENT_TYPE'], 'application/json') === false) {
    http_response_code(415);
    echo json_encode([
        'success' => false,
        'error' => 'Content-Type must be application/json',
    ]);
    exit;
}

include 'db_config.php';

$response = ['success' => false, 'error' => ''];

try {
    $input = json_decode(file_get_contents('php://input'), true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Invalid JSON format');
    }

    if (empty($input['nsu_id']) || empty($input['password'])) {
        throw new Exception('Both ID and password are required');
    }

    $nsu_id = trim($input['nsu_id']);
    $password = trim($input['password']);

    $conn = getDBConnection();
    $stmt = $conn->prepare("SELECT * FROM users WHERE nsu_id = ?");
    $stmt->bind_param("s", $nsu_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        throw new Exception('User not found');
    }

    $user = $result->fetch_assoc();

    if ($password !== $user['password']) {
        throw new Exception('Invalid credentials');
    }

    $response = [
        'success' => true,
        'user' => [
            'id' => $user['id'],
            'nsu_id' => $user['nsu_id'],
            'name' => $user['name'],
            'email' => $user['email'],
        ],
    ];
} catch (Exception $e) {
    $response['error'] = $e->getMessage();
    http_response_code(400);
} finally {
    echo json_encode($response);
    closeDBConnection(); 
    exit;
}
?>