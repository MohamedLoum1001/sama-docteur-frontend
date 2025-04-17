import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './rendezvousMedecin.css'; // Importation du CSS

const RendezVousMedecin = () => {
  const [rendezvous, setRendezvous] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simuler la récupération des rendez-vous
    const fetchRendezvous = async () => {
      const data = await fetch('/api/rendezvous'); // Remplacer avec une vraie API
      const result = await data.json();
      setRendezvous(result);
    };
    fetchRendezvous();
  }, []);

  return (
    <div className="rendezvous-medecin container mt-5">
      <button
        className="btn btn-outline-secondary mb-3"
        onClick={() => navigate(-1)}
      >
        Retour
      </button>
      <h2 className="mb-4">Mes Rendez-vous Programmés</h2>
      <ul>
        {rendezvous.map((rendezvousItem, index) => (
          <li key={index}>
            <span className="rendezvous-date">{rendezvousItem.date}</span> - 
            <span className="patient-name"> {rendezvousItem.patient}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RendezVousMedecin;
