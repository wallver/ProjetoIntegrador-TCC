<?php
include('books.php');
      $hostname = "localhost:3306";
      $user = "root";
      $password = "";
      $db = "cadlivros";
      $con = mysqli_connect($hostname, $user ,$password, $db);
      if($con)
      {

        $search = $_GET['bookSearch'];
        $query = "SELECT * FROM `books` WHERE `bookName` LIKE '%$search%'";
        $results = mysqli_query($con, $query);
        $books = [];
        $index = 0;

        while($record = mysqli_fetch_row($results))
        {
        $book = new BOOK(
            $record[0],
            $record[1],
            $record[2],
            $record[3],
            $record[4],
            $record[5]);
             
            $books[$index] = $book;
            $index = $index + 1;
        }
        echo json_encode($books);
      }
      else
      {
          echo 'A conexão falhou';
          echo mysqli_connect_error();
      }
