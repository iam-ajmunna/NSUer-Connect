<?php

require_once 'DataAccessInterface.php';
require_once 'CourseDataService.php';

class CourseDataProxy implements DataAccessInterface {
    private $realSubject;
    private $cache = [];

    public function __construct() {
        $this->realSubject = new CourseDataService();
    }

    public function getCourses($page, $limit) {
        // Create a cache key based on page and limit
        $cacheKey = "page_{$page}_limit_{$limit}";

        // Logging access
        error_log("Proxy: Accessing courses for page: $page, limit: $limit");

        // Check cache first
        if (isset($this->cache[$cacheKey])) {
            error_log("Proxy: Returning cached courses for page: $page, limit: $limit");
            return $this->cache[$cacheKey];
        }

        // Fetch from Real Subject
        $result = $this->realSubject->getCourses($page, $limit);

        // Cache the result
        $this->cache[$cacheKey] = $result;
        error_log("Proxy: Caching courses for page: $page, limit: $limit");

        return $result;
    }

    // Not used for course data, but required by the interface
    public function getUserById($nsu_id) {
        return null;
    }
}

?>