<?php
class USER{

    public function __construct(int $id, string $userName, string $userEmail, string $userPass) {

        $this->id = $id;
        $this->userName = $userName;
        $this->userEmail = $userEmail;
        $this->userPass = $userPass;

    }
}
?> 
