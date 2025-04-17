<?php

interface DataAccessInterface {
    public function getUserById($nsu_id);
    public function getCourses($page, $limit);
}

?>