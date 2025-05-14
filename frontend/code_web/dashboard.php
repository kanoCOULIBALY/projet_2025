<?php
session_start();
if (!isset($_SESSION['user'])) {
    header("Location: index.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard - SafeExchange</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Font Awesome -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
  <!-- Custom CSS -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="dashboard-container">
    <!-- Sidebar -->
    <div class="sidebar">
      <div class="logo-container">
        <img src="logo.png" alt="SafeExchange Logo" class="logo-img">
        <h2 class="logo-text">SafeExchange</h2>
      </div>
      <nav class="menu">
        <ul>
          <li><i class="fa fa-envelope"></i> Messages</li>
          <li><i class="fa fa-paper-plane"></i> Envoyer</li>
          <li><i class="fa fa-user"></i> Profil</li>
        </ul>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Header -->
      <div class="header">
        <h4>Message reçu</h4>
        <div class="user-icon">
          <i class="fa fa-user-circle"></i> <?= htmlspecialchars($_SESSION['user']) ?>
        </div>
        <a href="logout.php" class="btn btn-danger btn-sm">Logout</a>
      </div>

      <!-- Body -->
      <div class="content">
        <div class="message-list">
          <ul>
            <li>Message 1 : Test</li>
            <li>Message 2 : Test</li>
            <li>Message 3 : Test</li>
            <li>Message 4 : Test</li>
            <li>Message 5 : Test</li>
          </ul>
        </div>
        <div class="message-details">
          <p><strong>Objet :</strong> Test</p>
          <p><strong>De :</strong> contact@safeexchange.com</p>
          <p><strong>À :</strong> sav@safeexchange.com</p>
          <hr>
          <p>Message :</p>
          <p>Voici un exemple de message de démonstration.</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
