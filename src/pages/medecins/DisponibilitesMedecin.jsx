import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import './DisponibilitesMedecin.css';

const DisponibilitesMedecin = () => {
  const [disponibilites, setDisponibilites] = useState([]);
  const navigate = useNavigate();

  const handleAddAvailability = (e) => {
    e.preventDefault();
    const newAvailability = {
      day: e.target.day.value,
      time: e.target.time.value,
    };
    setDisponibilites([...disponibilites, newAvailability]);
  };

  return (
    <div className="disponibilites-medecin container mt-5">
      {/* Bouton de retour */}
      <button className="btn btn-outline-secondary mb-4" onClick={() => navigate(-1)}>
        <FaArrowLeft /> Retour
      </button>

      <h2 className="mb-4">Mes Disponibilités</h2>
      <form onSubmit={handleAddAvailability}>
        <div className="mb-3">
          <label>Jour</label>
          <input type="date" className="form-control" name="day" required />
        </div>
        <div className="mb-3">
          <label>Heure</label>
          <input type="time" className="form-control" name="time" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Ajouter Disponibilité
        </button>
      </form>

      {/* Liste des disponibilités */}
      <ul className="mt-4">
        {disponibilites.map((availability, index) => (
          <li key={index}>
            {availability.day} à {availability.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisponibilitesMedecin;
