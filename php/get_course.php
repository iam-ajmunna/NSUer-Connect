<?php

require_once 'proxy/CourseDataProxy.php';

$limit = 50;
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;

// Use the Proxy to access course data
$dataAccess = new CourseDataProxy();
$result = $dataAccess->getCourses($page, $limit);

$response = [
    'data' => $result['data'],
    'totalPages' => $result['totalPages'],
    'currentPage' => $result['currentPage'],
];

header('Content-Type: application/json');
echo json_encode($response);

?>