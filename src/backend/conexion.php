<?php
$hostname = "localhost";
$username = "root";
$password = "";
$db_name  = "ddms";
$tableName = "";

$conn = mysqli_connect($hostname, $username, $password, $db_name);

mysqli_set_charset($conn, "utf-8");

?>