<?php

include(__DIR__ . '/../db_config.php'); 

echo "Testing Database Connection...\n";

$conn = getDBConnection();

if ($conn) {
    echo "Database connection successful!\n";
} else {
    echo "Database connection failed.\n";
}

echo "\nTesting Singleton Instance...\n";

$conn1 = getDBConnection();
$conn2 = getDBConnection();

if ($conn1 === $conn2 && $conn1 !== null) {
    echo "Singleton instance confirmed: Both calls return the same connection.\n";
} else {
    echo "Singleton instance test failed.\n";
}

closeDBConnection(); 

?>
