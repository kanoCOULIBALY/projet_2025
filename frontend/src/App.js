import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate(); // Permet de naviguer entre les pages
  const [showForgotPopup, setShowForgotPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  // Vérifie si l'email est valide
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Gère l'entrée de l'email
  const handleEmailInput = (event) => {
    setEmail(event.target.value);
    if (!validateEmail(event.target.value) && event.target.value !== "") {
      setEmailError("Adresse e-mail invalide");
    } else {
      setEmailError("");
    }
  };

  // Simule l'envoi avec un chargement
  const handleSendEmail = () => {
    if (!validateEmail(email)) {
      setEmailError("Veuillez entrer une adresse valide.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setConfirmationMessage("Email envoyé !");
      setTimeout(() => setShowForgotPopup(false), 2000);
    }, 2000);
  };

  // Redirige vers la page de vérification
  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/verify");
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <img src="/logo.png" alt="SafeExchange Logo" className="logo" />
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <a href="/" onClick={(e) => { e.preventDefault(); setShowForgotPopup(true); }}>Forgot password?</a>
      </div>

      {/* Popup pour "Mot de passe oublié" */}
      {showForgotPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Mot de passe oublié</h2>
            <p>Entrez votre adresse e-mail :</p>
            <input type="email" value={email} onChange={handleEmailInput} placeholder="Email" required />
            {emailError && <p className="error-message">{emailError}</p>}

            {confirmationMessage ? (
              <p className="confirmation-message">{confirmationMessage}</p>
            ) : (
              <div className="popup-buttons">
                <button onClick={() => setShowForgotPopup(false)}>Annuler</button>
                <button onClick={handleSendEmail} disabled={isLoading || !validateEmail(email)}>
                  {isLoading ? <span className="loader"></span> : "Envoyer"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
