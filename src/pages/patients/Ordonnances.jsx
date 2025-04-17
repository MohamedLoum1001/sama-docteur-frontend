import React from "react";
import { FaArrowLeft, FaFilePrescription } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ordonnances.css";

const Ordonnances = () => {
  const navigate = useNavigate();

  return (
    <div className="ordonnances-container container mt-4">
      <button className="btn btn-outline-secondary mb-4" onClick={() => navigate(-1)}>
        <FaArrowLeft className="me-2" /> Retour
      </button>
      <h2 className="text-center mb-4">Mes Ordonnances</h2>

      <div className="row">
        {[1, 2, 3].map((ordonnance, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm p-3">
              <div className="d-flex align-items-center mb-3">
                <FaFilePrescription size={30} className="me-2 text-primary" />
                <h5 className="mb-0">Ordonnance #{index + 1}</h5>
              </div>
              <p><strong>Date:</strong> 15/04/2025</p>
              <p><strong>Médecin:</strong> Dr. Ndiaye</p>
              <p><strong>Médicaments:</strong> Paracétamol, Amoxicilline</p>
              <a href="#" className="btn btn-outline-primary mt-auto">Télécharger</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ordonnances;
