<?php

include_once('./cors.php');
include('./db.php');
$_POST = json_decode(file_get_contents("php://input"), true);


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $id = $_POST['id'];

    $sql = "SELECT * FROM residences WHERE id = $id";
    $residence = $pdo->query($sql);
    $residence = $residence->fetch(PDO::FETCH_ASSOC);

    echo json_encode($residence);
}
