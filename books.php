<?php
class BOOK{

    public function __construct(int $id, string $bookName, string $bookAuthor, string $bookGender, string $bookImage,string $bookDescription) {

        $this->id = $id;
        $this->bookName = $bookName;
        $this->bookAuthor = $bookAuthor;
        $this->bookGender = $bookGender;
        $this->bookImage = $bookImage;
        $this->bookDescription = $bookDescription;

    }
}
?> 
