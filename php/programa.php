<?php
  include('books.php');
  ini_set('display_errors', 1);
  error_reporting(E_ALL);
  $books = [];

  $bookName = $_GET['bookName'];
  $bookAuthor = $_GET['bookAuthor'];
  $bookGender = $_GET['bookGender'];
  $bookImage= $_GET['bookImage'];
  $bookDescription= $_GET['bookDescription'];

 
  $hostname = "localhost:3306";
  $user = "root";
  $password = "";
  $db = "cadlivros";
  
  $conDB = mysqli_connect($hostname, $user ,$password, $db);
  if($conDB)
  {
    $query = "insert into books (bookName,bookAuthor,bookGender,bookImage,bookDescription) values ('$bookName','$bookAuthor','$bookGender','$bookImage','$bookDescription');";
    
    $res = mysqli_query($conDB, $query);
    echo mysqli_error($conDB);

  }
  else
  {
    echo"Erro na conexão com o banco de dados!";
    echo mysqli_connect_error();
  }

  header("location: http://localhost:3000/index.html");
  
?>