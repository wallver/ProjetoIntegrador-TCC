<?php
include('books.php');
ini_set("display_errors", 1);
error_reporting(E_ALL);

$hostname = "localhost:3306";
$userdb = "root";
$password = "";
$db = "cadlivros";

$dbConnection = mysqli_connect($hostname, $userdb, $password, $db);
if($dbConnection)
{
    $query = "select * from books;";//colocar o nome da tabela aqui
    $results = mysqli_query($dbConnection, $query);
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
    echo "Conexão falhou !!!";
    echo mysqli_connect_error();
}
?>