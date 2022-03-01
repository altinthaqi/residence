<?php
include_once('./cors.php');
include('./db.php');
$_POST = json_decode(file_get_contents("php://input"), true);


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $title = $_POST['title'];
    $description = $_POST['description'];
    $residenceType = $_POST['residenceType'];
    $nrRooms = $_POST['nrRooms'];
    $residenceSize = $_POST['residenceSize'];
    $price = $_POST['price'];
    $city = $_POST['city'];
    $neighborhood = $_POST['neighborhood'];
    $street = $_POST['street'];
    $tel = $_POST['tel'];
    $userId = $_POST['userId'];

    $residenceImage = $_POST['residenceImage'];


    $sql = 'INSERT INTO residences (title, descrip, img, city, neighborhood, street, rooms, price, square_meters, telephone_number, category_id, usr_id) VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    $query = $pdo->prepare($sql);

    $query->execute([$title, $description, $residenceImage, $city, $neighborhood, $street, $nrRooms, $price, $residenceSize, $tel, $residenceType, $userId]);

    echo "User id $userId successfully inserted a residence!";

    print_r([$title, $description, $residenceImage, $city, $neighborhood, $street, $nrRooms, $price, $residenceSize, $tel, $residenceType, $userId]);
}
