<?php

include_once('./cors.php');
include('./db.php');
$_POST = json_decode(file_get_contents("php://input"), true);


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $usr_id = $_POST['id'];

    $sql = "SELECT * FROM residences WHERE usr_id = $usr_id";
    $residences = $pdo->query($sql);
    $residences = $residences->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($residences);
}
