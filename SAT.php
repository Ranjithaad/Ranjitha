<?php 
$servername = "localhost";
$username = "yourusername";
$password = "yourpassword";
$servername = "localhost";
$dbname = "yourdatabase";

$conn = new mysqli($servername,$username,$password,$dbname);

if($conn->connect_error)
{
die("connection failed:".$conn->connect_error);}
?>