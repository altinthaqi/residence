<?php
$host = 'localhost:8111';
$db = 'residence_db';
$charset = 'utf8mb4';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$username = 'root';
$password = '';

$pdo = new PDO($dsn, $username, $password);

// $results = $select_query->fetchAll(PDO::FETCH_ASSOC);

session_start();
