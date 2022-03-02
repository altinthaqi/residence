<?php

include_once('./cors.php');
include('./db.php');
$_POST = json_decode(file_get_contents("php://input"), true);


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $city = $_POST['city'];
    $residenceType = $_POST['residenceType'];
    $nrRooms = $_POST['nrRooms'];


    $sql = "SELECT * FROM residences WHERE city = ? AND rooms >= ? AND category_id = ?";
    $filteredResidences = $pdo->prepare($sql);
    $filteredResidences->execute([$city, $nrRooms, $residenceType]);
    $filteredResidences = $filteredResidences->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($filteredResidences);
}
