<?php

include_once('./cors.php');
include('./db.php');
$_POST = json_decode(file_get_contents("php://input"), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $id = $_POST['id'];
    $first_name = $_POST['name'];
    $last_name = $_POST['lastname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $city = $_POST['city'];

    $sql = 'UPDATE users SET email = ?, first_name = ?, last_name = ?, passw = ?, city = ? WHERE id = ?';
    $query = $pdo->prepare($sql);
    $query->execute([$email, $first_name, $last_name, $password, $city, $id]);

    print_r([$id, $first_name, $last_name, $email, $password, $city]);
}
