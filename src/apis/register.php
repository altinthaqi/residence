<?php

include_once('./cors.php');
include('./db.php');
$_POST = json_decode(file_get_contents("php://input"), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo "you just posted";

    $first_name = $_POST['name'];
    $last_name = $_POST['lastname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $city = $_POST['city'];

    $sql = 'INSERT INTO users (email, first_name, last_name, passw, city) VALUE (?, ?, ?, ?, ?)';
    $query = $pdo->prepare($sql);
    $query->execute([$email, $first_name, $last_name, $password, $city]);

    echo "User 'Altin' was inserted successfully!";
}
