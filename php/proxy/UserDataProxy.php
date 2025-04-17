<?php

require_once 'DataAccessInterface.php';
require_once 'UserDataService.php';

class UserDataProxy implements DataAccessInterface {
    private $realSubject;
    private $cache = [];

    public function __construct() {
        $this->realSubject = new UserDataService();
    }

    public function getUserById($nsu_id) {
        // Logging access (example of Proxy adding functionality)
        error_log("Proxy: Accessing user with NSU ID: $nsu_id");

        // Check cache first
        if (isset($this->cache[$nsu_id])) {
            error_log("Proxy: Returning cached user data for NSU ID: $nsu_id");
            return $this->cache[$nsu_id];
        }

        // Fetch from Real Subject
        $user = $this->realSubject->getUserById($nsu_id);

        // Cache the result
        if ($user) {
            $this->cache[$nsu_id] = $user;
            error_log("Proxy: Caching user data for NSU ID: $nsu_id");
        }

        return $user;
    }

    // Not used for user data, but required by the interface
    public function getCourses($page, $limit) {
        return [];
    }
}

?>