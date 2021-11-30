<?php
include('user.php');
ini_set('display_errors', 1);
error_reporting(E_ALL);


$hostname = "localhost:3306";
$user = "root";
$password = "";
$db = "cadlivros";

$conDB = mysqli_connect($hostname, $user ,$password, $db);
if($conDB){
    $query = "SELECT * FROM `user` WHERE `userEmail=$userEmail`;";//colocar o nome da tabela aqui
    $results = mysqli_query($dbConnection, $query);
    $users = [];
    $index = 0;

while($record = mysqli_fetch_row($results))
    {
    $user = new USER(
        $record[0],
        $record[1],
        $record[2],
        $record[3],
        $record[4],
        $record[5]);

        $users[$index] = $user;
        $index = $index + 1;
    }
    echo json_encode($users);

}
else 
{
    echo "Conexão falhou !!!";
    echo mysqli_connect_error();
}
