<?php

include_once('./cors.php');
include('./db.php');
$_POST = json_decode(file_get_contents("php://input"), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['resId'];

    $sql = "DELETE FROM residences WHERE id = ?";
    $delete_query = $pdo->prepare($sql);
    $delete_query->execute([$id]);
}
