<?php
include_once('./cors.php');
include('./db.php');
$_POST = json_decode(file_get_contents("php://input"), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];

    $sql = 'INSERT INTO subscribers (email) VALUE (?)';
    $query = $pdo->prepare($sql);
    $query->execute([$email]);

    echo "$email successfully subscribed!";
}
