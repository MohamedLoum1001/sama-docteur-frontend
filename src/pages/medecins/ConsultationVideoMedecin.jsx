import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaVideo } from 'react-icons/fa';
import './ConsultationVideoMedecin.css';

const ConsultationVideoMedecin = () => {
  const [isVideoCallStarted, setIsVideoCallStarted] = useState(false);
  const navigate = useNavigate();

  const startVideoCall = () => {
    // Intégration réelle de WebRTC ou service vidéo ici
    setIsVideoCallStarted(true);
  };

  return (
    <div className="consultation-video-medecin container mt-4">
      <button className="btn btn-outline-secondary mb-4" onClick={() => navigate(-1)}>
        <FaArrowLeft /> Retour
      </button>

      <h2 className="text-center mb-4">Consultation Vidéo</h2>

      <div className="video-section text-center">
        {isVideoCallStarted ? (
          <div className="video-call-box">
            <p>Consultation en cours...</p>
            {/* Vidéo intégrée ici dans le futur */}
          </div>
        ) : (
          <button className="btn btn-primary start-button" onClick={startVideoCall}>
            <FaVideo className="me-2" /> Démarrer la Consultation Vidéo
          </button>
        )}
      </div>
    </div>
  );
};

export default ConsultationVideoMedecin;
