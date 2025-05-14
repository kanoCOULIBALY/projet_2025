<?php
// Ajout de la session PHP si nécessaire
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SafeExchange - Login</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Font Awesome (Pour les icônes) -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
  <!-- Custom CSS -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="login-container">
    <div class="login-card">
      <div class="logo text-center">
        <img src="logo.png" alt="SafeExchange Logo" class="logo-img">
        <h2 class="logo-text">SafeExchange</h2>
      </div>
      <form method="POST" action="process.php">
        <div class="input-group mb-3">
          <span class="input-group-text"><i class="fa fa-user"></i></span>
          <input type="text" class="form-control" id="username" name="username" placeholder="Username" required>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text"><i class="fa fa-lock"></i></span>
          <input type="password" class="form-control" id="password" name="password" placeholder="Password" required>
        </div>
        <button type="submit" class="btn btn-primary w-100">LOGIN</button>
        <div class="text-center mt-3">
          <a href="#" class="forgot-password">Forgot password?</a>
        </div>
      </form>
    </div>
  </div>
  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
