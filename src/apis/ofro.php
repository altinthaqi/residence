<?php
include_once('./cors.php');
include('./db.php');
$_POST = json_decode(file_get_contents("php://input"), true);



// Check if image file is a actual image or fake image


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    echo "you just posted a residence";

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
    $residenceImage = $_POST['residenceImage'];


    $target_dir = "serverUploads/";
    $target_file = $target_dir . basename($_FILES["residenceImage"]["name"]);
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    move_uploaded_file($_FILES["residenceImage"]["tmp_name"], $target_file);

    $sql = 'INSERT INTO residences (title, descrip, img, city, neighborhood, street, rooms, price, square_meters, telephone_number, category_id, usr_id) VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    $query = $pdo->prepare($sql);

    $query->execute([$title, $description, $residenceImage, $city, $neighborhood, $street, $nrRooms, $price, $residenceSize, $tel, $residenceType, 1]);

    echo "User 'Altin' was inserted successfully!";

    print_r([$title, $description, $residenceImage, $city, $neighborhood, $street, $nrRooms, $price, $residenceSize, $tel, $residenceType, 1]);
}
