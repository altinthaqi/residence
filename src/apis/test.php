<?php

include_once('./cors.php');
include('./db.php');


$select_sql = 'SELECT * FROM `users`';
$select_query = $pdo->query($select_sql);

$results = $select_query->fetchAll(PDO::FETCH_ASSOC);

print_r($_POST);

echo json_encode($results);
