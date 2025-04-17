import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../../pages/patients/appointment.css";

const Appointment = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home-patient"); // ou le chemin exact de HomePatient
  };

  return (
    <div className="appointment-container container mt-5">
      {/* Icône retour */}
      <button className="btn btn-outline-secondary me-3" onClick={handleBack}>
        <FaArrowLeft />
        Retour à l'accueil
      </button>

      <h2 className="text-center mb-4">Prendre un rendez-vous</h2>
      <form className="appointment-form">
        <div className="mb-3">
          <label>Spécialité</label>
          <select className="form-select">
            <option>Cardiologie</option>
            <option>Pédiatrie</option>
            <option>Gynécologie</option>
            <option>Dermatologie</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Médecin</label>
          <select className="form-select">
            <option>Dr. Ndiaye</option>
            <option>Dr. Diallo</option>
            <option>Dr. Faye</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Date</label>
          <input type="date" className="form-control" />
        </div>

        <div className="mb-3">
          <label>Heure</label>
          <input type="time" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Confirmer le rendez-vous
        </button>
      </form>
    </div>
  );
};

export default Appointment;
