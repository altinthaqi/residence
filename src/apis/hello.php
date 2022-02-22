// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Credentials: true");
// header("Access-Control-Max-Age: 1000");
// header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
// header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");


// $host = 'localhost:8111';
// $db = 'residence_db';
// $charset = 'utf8mb4';
// $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
// $username = 'root';
// $password = '';

// $pdo = new PDO($dsn, $username, $password);


// if (isset($_GET['action']) && $_GET['action'] == 'delete') {
// $user_id = $_GET['id'];
// $delete_sql = 'DELETE FROM `users` WHERE `id`= ?';
// $delete_query = $pdo->prepare($delete_sql);
// $delete_query->execute([$user_id]);
// header('Location: database-crud.php');
// echo "Delete Done!";