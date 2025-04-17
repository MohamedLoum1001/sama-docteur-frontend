import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../../pages/patients/profile.css";

const Profile = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home-patient"); // ou "/" selon ta route d'accueil
  };

  return (
    <div className="profile-container container mt-5">
      {/* Bouton retour */}

      <button className="btn btn-outline-secondary me-3" onClick={handleBack}>
        <FaArrowLeft />
        Retour
      </button>

      <h2 className="mb-4">Mon Profil</h2>
      <form>
        <div className="mb-3">
          <label>Nom complet</label>
          <input type="text" className="form-control" placeholder="Votre nom" />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="email@example.com"
          />
        </div>
        <div className="mb-3">
          <label>Numéro de téléphone</label>
          <input type="tel" className="form-control" placeholder="06xxxxxxxx" />
        </div>
        <div className="mb-3">
          <label>Historique médical</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Votre historique médical..."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Mettre à jour
        </button>
      </form>
    </div>
  );
};

export default Profile;
