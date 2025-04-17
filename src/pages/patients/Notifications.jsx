import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaBell } from "react-icons/fa";
import "../../pages/patients/notifications.css";

const Notifications = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/home-patient"); // Ajuste ce chemin si nécessaire
  };

  const notifications = [
    {
      title: "Rappel de rendez-vous",
      message: "Vous avez un rendez-vous demain à 14h avec Dr. Ndiaye.",
      date: "16 avril 2025",
    },
    {
      title: "Nouvelle ordonnance disponible",
      message: "Votre ordonnance suite à la consultation du 14 avril est disponible.",
      date: "15 avril 2025",
    },
    {
      title: "Message du médecin",
      message: "Dr. Diallo a ajouté un commentaire à votre dossier.",
      date: "14 avril 2025",
    },
  ];

  return (
    <div className="notifications-container container mt-4">
      <div className="d-flex align-items-center mb-4">
        <button className="btn btn-outline-secondary me-3" onClick={handleGoBack}>
          <FaArrowLeft />
          Retour
        </button>
        <h3 className="mb-0"><FaBell className="me-2" />Notifications</h3>
      </div>

      <div className="notifications-list">
        {notifications.map((notif, index) => (
          <div className="notification-card shadow-sm p-3 mb-3 rounded" key={index}>
            <h5 className="fw-bold">{notif.title}</h5>
            <p className="mb-1">{notif.message}</p>
            <small className="text-muted">{notif.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
