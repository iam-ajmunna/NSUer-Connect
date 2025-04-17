<?php

include(__DIR__ . '/../db_config.php'); 


$conn1 = getDBConnection();
$conn2 = getDBConnection();


if ($conn1 === $conn2) {
    echo "Singleton test passed: Same connection instance used.\n";
} else {
    echo "Singleton test failed: Different connection instances used.\n";
}


echo "Connection 1 hash: " . spl_object_hash($conn1) . "\n";
echo "Connection 2 hash: " . spl_object_hash($conn2) . "\n";

closeDBConnection();

?>