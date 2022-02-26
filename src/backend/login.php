<?php
include('./conexion.php');
isset($_POST['user']) ? $user = $_POST['user'] : $user = "";
isset($_POST['pass']) ? $pass = $_POST['pass'] : $pass = "";
$response = array();

$query = "SELECT * FROM dduser WHERE USEUSE = '$user' AND PASUSE = '$pass'";

$result = mysqli_query($conn, $query);

if($result)
{
    
    $response['ok'] = 'ok';
}
else {
    $response['error'] = 'error';
}
echo json_encode(array('data' => $response));

?>