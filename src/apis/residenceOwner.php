<?php

include_once('./cors.php');
include('./db.php');
$_POST = json_decode(file_get_contents("php://input"), true);


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $user_id = $_POST['user_id'];

    $sql = "SELECT * FROM users WHERE id = $user_id";
    $user = $pdo->query($sql);
    $user = $user->fetch(PDO::FETCH_ASSOC);

    echo json_encode($user);
}
