<?php

include_once('./cors.php');
include('./db.php');
$_POST = json_decode(file_get_contents("php://input"), true);


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $rooms = $_POST['rooms'];

    $sql = "SELECT * FROM residences WHERE rooms = $rooms LIMIT 4";
    $similarResidences = $pdo->query($sql);
    $similarResidences = $similarResidences->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($similarResidences);
}
