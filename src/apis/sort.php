<?php

include_once('./cors.php');
include('./db.php');
$_POST = json_decode(file_get_contents("php://input"), true);


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $type = $_POST['type'];



    $sql = "SELECT * FROM residences ORDER BY price $type";
    $sortResidences = $pdo->query($sql);
    $sortResidences = $sortResidences->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($sortResidences);
}
