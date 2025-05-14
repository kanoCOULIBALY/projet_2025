<?php
session_start();

// Configuration de la base de données
$host = 'localhost';
$dbname = 'safe_exchange';
$username = 'root'; // Votre utilisateur MySQL
$password = 'Kano2001'; // Votre mot de passe MySQL

// Connexion à la base de données
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}

// Traitement du formulaire de connexion
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = $_POST['username'];
    $pass = md5($_POST['password']); // Hachage du mot de passe (simple pour l'exemple)

    // Vérification des informations de connexion
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
    $stmt->execute([$user, $pass]);
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($result) {
        $_SESSION['user'] = $result['username'];
        header("Location: dashboard.php");
        exit;
    } else {
        $_SESSION['error'] = "Nom d'utilisateur ou mot de passe incorrect.";
        header("Location: index.php");
        exit;
    }
}
?>
