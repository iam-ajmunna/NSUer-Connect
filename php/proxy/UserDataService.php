<?php

require_once 'DataAccessInterface.php';

class UserDataService implements DataAccessInterface {
    private $users;

    public function __construct() {
        // Hardcoded user data (simulating a database)
        $this->users = [
            [
                'id' => 1,
                'nsu_id' => '2211796042',
                'name' => 'Assaduzzaman Munna',
                'email' => 'assaduzzaman.munna@northsouth.edu',
                'password' => 'test123'
            ],
            [
                'id' => 2,
                'nsu_id' => '2211426042',
                'name' => 'Mushfika Hossain Piya',
                'email' => 'mushfika.piya@northsouth.edu',
                'password' => 'test123'
            ],
            [
                'id' => 3,
                'nsu_id' => '2211263042',
                'name' => 'Ahammed Jumma',
                'email' => 'ahammed.jumma@northsouth.edu',
                'password' => 'test123'
            ],
            [
                'id' => 4,
                'nsu_id' => '2211548042',
                'name' => 'Asif Akbar Zishan',
                'email' => 'asif.zishan@northsouth.edu',
                'password' => 'test123'
            ]
        ];
    }

    public function getUserById($nsu_id) {
        foreach ($this->users as $user) {
            if ($user['nsu_id'] === $nsu_id) {
                return $user;
            }
        }
        return null;
    }

    // Not used for user data, but required by the interface
    public function getCourses($page, $limit) {
        return [];
    }
}

?>