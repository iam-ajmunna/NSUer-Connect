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

// Update Content-Type check for form data (since index.js sends application/x-www-form-urlencoded)
if (!isset($_SERVER['CONTENT_TYPE']) || stripos($_SERVER['CONTENT_TYPE'], 'application/x-www-form-urlencoded') === false) {
    http_response_code(415);
    echo json_encode([
        'success' => false,
        'error' => 'Content-Type must be application/x-www-form-urlencoded',
    ]);
    exit;
}

require_once 'proxy/UserDataProxy.php';

$response = ['success' => false, 'error' => ''];

try {
    // Parse form data
    $nsu_id = isset($_POST['nsu_id']) ? trim($_POST['nsu_id']) : '';
    $password = isset($_POST['password']) ? trim($_POST['password']) : '';

    if (empty($nsu_id) || empty($password)) {
        throw new Exception('Both ID and password are required');
    }

    // Use the Proxy to access user data
    $dataAccess = new UserDataProxy();
    $user = $dataAccess->getUserById($nsu_id);

    if ($user === null) {
        throw new Exception('User not found');
    }

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
    exit;
}
?>