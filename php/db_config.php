<?php

class Database {
    private static $instance;
    private $connection;

    private $servername = "localhost";
    private $username = "root";
    private $password = "";
    private $dbname = "nsuer_connect";

    private function __construct() {
        echo "Creating new database connection...\n";  
        $this->connection = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
        if ($this->connection->connect_error) {
            die("Connection failed: " . $this->connection->connect_error);
        }
    }

    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new Database();
        }
        return self::$instance;
    }

    public function getConnection() {
        if ($this->connection === null) {
            return null; 
        }

        if ($this->connection->connect_error) {
            
            return null; 
        }

        return $this->connection;
    }

    public function closeConnection() {
        if ($this->connection) {
            $this->connection->close();
            $this->connection = null; 
        }
    }
}


function getDBConnection() {
    return Database::getInstance()->getConnection();
}

function closeDBConnection(){
    Database::getInstance()->closeConnection();
}

?>
