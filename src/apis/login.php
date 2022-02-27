<?php
include_once('./cors.php');
include('./db.php');
$_POST = json_decode(file_get_contents("php://input"), true);
session_start();

if (isset($_POST)) {
    $email = $_POST['email'];
    $password = $_POST['password'];


    if (!empty($email) && !empty($password)) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

            $sql = "SELECT * FROM users WHERE email = '$email' LIMIT 1";
            $user = $pdo->query($sql);
            $user = $user->fetch(PDO::FETCH_ASSOC);

            if ($user['passw'] == $password) {
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['logged_in'] = true;
                $_SESSION['email'] = $email;
                $_SESSION['first_name'] = $user['first_name'];
                $_SESSION['is_admin'] = $user['role_id'];


                echo json_encode($user);
            }
        }
    }
}
