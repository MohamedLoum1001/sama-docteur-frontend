import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaVideo } from "react-icons/fa";
import "../../pages/patients/videoConsultation.css";

const VideoConsultation = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/home-patient"); // Assure-toi que ce chemin correspond à ta route HomePatient
  };

  return (
    <div className="video-container container mt-4">
      {/* Bouton retour */}
      <button className="btn btn-outline-secondary mb-3" onClick={handleReturn}>
        <FaArrowLeft className="me-2" />
        Retour
      </button>

      <div className="consult-box shadow-sm p-4 bg-white rounded">
        <h2 className="text-center mb-4">
          <FaVideo className="me-2" /> Consultation Vidéo
        </h2>
        <p className="text-muted text-center mb-4">
          Démarrez une session de consultation vidéo avec un médecin.
        </p>

        <form className="consult-form">
          <div className="mb-3">
            <label>Spécialité</label>
            <select className="form-select">
              <option>Psychologie</option>
              <option>Généraliste</option>
              <option>Nutrition</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Médecin</label>
            <select className="form-select">
              <option>Dr. Sow</option>
              <option>Dr. Ba</option>
              <option>Dr. Gaye</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Date & Heure</label>
            <input type="datetime-local" className="form-control" />
          </div>

          <button className="btn btn-primary w-100">Lancer la consultation</button>
        </form>
      </div>
    </div>
  );
};

export default VideoConsultation;
