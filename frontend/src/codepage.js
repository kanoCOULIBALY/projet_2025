import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./codepage.css";

function CodePage() {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", ""]);
  const [showResendPopup, setShowResendPopup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Vérifie si le numéro est valide (10 chiffres)
  const validatePhoneNumber = (number) => /^[0-9]{10}$/.test(number);

  // Gère l'entrée du code
  const handleCodeInput = (index, event) => {
    const newCode = [...code];
    newCode[index] = event.target.value.replace(/[^0-9]/g, "").slice(0, 1); // Limite à 1 chiffre
    setCode(newCode);

    // Passe au champ suivant automatiquement
    if (newCode[index] && index < code.length - 1) {
      document.querySelectorAll(".code-box")[index + 1].focus();
    }
  };

  // Gère l'entrée du numéro de téléphone
  const handlePhoneInput = (event) => {
    const newNumber = event.target.value.replace(/[^0-9]/g, "");
    setPhoneNumber(newNumber);
    setPhoneError(validatePhoneNumber(newNumber) ? "" : "Numéro invalide (10 chiffres)");
  };

  // Valide le code
  const handleSubmit = (e) => {
    e.preventDefault();
    const fullCode = code.join("");
    if (fullCode.length !== 4 || isNaN(fullCode)) {
      alert("Le code doit être composé de 4 chiffres.");
      return;
    }
    // Simuler une validation réussie
    alert("Code vérifié avec succès !");
    navigate("/message"); // Rediriger vers la page de messagerie
  };

  // Renvoyer le code
  const handleResendCode = () => {
    if (validatePhoneNumber(phoneNumber)) {
      setShowResendPopup(false);
      alert("Un nouveau code a été envoyé à " + phoneNumber);
    } else {
      setPhoneError("Numéro invalide (10 chiffres)");
    }
  };

  // Redirige vers la connexion
  const handleBackToLogin = () => {
    navigate("/");
  };

  return (
    <div className="page-container">
      <img src="/logo.png" alt="SafeExchange Logo" className="logo" />
      <h1>Vérification</h1>
      <p>Entrez le code reçu par SMS :</p>

      <form onSubmit={handleSubmit}>
        <div className="code-inputs">
          {code.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="code-box"
              value={value}
              onChange={(event) => handleCodeInput(index, event)}
              required
            />
          ))}
        </div>

        <button type="submit">Valider</button>
      </form>
      <a href="/" onClick={(e) => { e.preventDefault(); setShowResendPopup(true); }}>Renvoyer le code</a>

      {/* Popup pour renvoyer le code */}
      {showResendPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Renvoyer le code</h2>
            <p>Entrez votre numéro de téléphone :</p>
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneInput}
              placeholder="Numéro de téléphone"
              maxLength="10"
            />
            {phoneError && <p className="error-message">{phoneError}</p>}

            <div className="popup-buttons">
              <button onClick={() => setShowResendPopup(false)}>Annuler</button>
              <button onClick={handleResendCode}>Envoyer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CodePage;