<?php
include('user.php');
ini_set('display_errors', 1);
error_reporting(E_ALL);
$users = [];

$userName = $_GET['userName'];
$userEmail = $_GET['userEmail'];
$userPass = $_GET['userPass'];


$hostname = "localhost:3306";
$user = "root";
$password = "";
$db = "cadlivros";

$conDB = mysqli_connect($hostname, $user ,$password, $db);
if($conDB)
{
  $query = "INSERT INTO user (userName,userEmail,userPass) VALUES ('$userName','$userEmail','$userPass');";
  
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

