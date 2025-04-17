import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './OrdonnancesMedecin.css';

const OrdonnancesMedecin = () => {
  const [ordonnance, setOrdonnance] = useState('');
  const navigate = useNavigate();

  const handleCreateOrdonnance = () => {
    // Logique pour créer et envoyer une ordonnance
    console.log('Ordonnance envoyée:', ordonnance);
  };

  return (
    <div className="ordonnances-medecin container mt-5">
      <button className="btn btn-outline-secondary mb-4" onClick={() => navigate(-1)}>
        <FaArrowLeft /> Retour
      </button>
      <h2 className="mb-4">Prescrire une Ordonnance</h2>
      <textarea 
        className="form-control" 
        rows="6" 
        value={ordonnance} 
        onChange={(e) => setOrdonnance(e.target.value)} 
        placeholder="Écrire l'ordonnance ici..."
      ></textarea>
      <button className="btn btn-primary mt-3" onClick={handleCreateOrdonnance}>
        Envoyer l'Ordonnance
      </button>
    </div>
  );
};

export default OrdonnancesMedecin;
