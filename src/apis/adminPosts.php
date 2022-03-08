<?php

include_once('./cors.php');
include('./db.php');
$_POST = json_decode(file_get_contents("php://input"), true);


if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $sql = "SELECT * FROM residences";
    $residences = $pdo->query($sql);
    $residences = $residences->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($residences);
}
