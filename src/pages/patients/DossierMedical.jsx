import React from "react";
import { FaArrowLeft, FaFolderOpen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./dossier.css";

const DossierMedical = () => {
  const navigate = useNavigate();

  return (
    <div className="dossier-container container mt-4">
      <button className="btn btn-outline-secondary mb-4" onClick={() => navigate(-1)}>
        <FaArrowLeft className="me-2" /> Retour
      </button>
      <h2 className="text-center mb-4">Mon Dossier Médical</h2>

      <div className="row">
        {[1, 2].map((doc, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm p-3">
              <div className="d-flex align-items-center mb-3">
                <FaFolderOpen size={30} className="me-2 text-success" />
                <h5 className="mb-0">Examen #{index + 1}</h5>
              </div>
              <p><strong>Date:</strong> 10/04/2025</p>
              <p><strong>Type:</strong> Analyse sanguine</p>
              <p><strong>Résultat:</strong> Normal</p>
              <a href="#" className="btn btn-outline-success mt-auto">Voir le fichier</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DossierMedical;
