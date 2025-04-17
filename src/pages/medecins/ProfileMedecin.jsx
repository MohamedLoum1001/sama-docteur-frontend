import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfileMedecin.css'; // Ajoute cette ligne pour inclure le CSS

const ProfileMedecin = () => {
  const navigate = useNavigate();
  const [medecinInfo, setMedecinInfo] = useState({
    name: 'Dr. Dupont',
    email: 'dupont@example.com',
    speciality: 'Cardiologie',
  });

  const handleInputChange = (e) => {
    setMedecinInfo({ ...medecinInfo, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Sauvegarder les informations du médecin
    console.log('Profil du médecin mis à jour', medecinInfo);
  };

  return (
    <div className="profile-medecin container-fluid mt-5">
      {/* Bouton retour */}
      <button className="btn btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
        Retour
      </button>

      <h2 className="mb-4">Mon Profil</h2>
      <form>
        <div className="mb-3">
          <label>Nom</label>
          <input 
            type="text" 
            className="form-control" 
            name="name" 
            value={medecinInfo.name} 
            onChange={handleInputChange} 
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input 
            type="email" 
            className="form-control" 
            name="email" 
            value={medecinInfo.email} 
            onChange={handleInputChange} 
          />
        </div>
        <div className="mb-3">
          <label>Spécialité</label>
          <input 
            type="text" 
            className="form-control" 
            name="speciality" 
            value={medecinInfo.speciality} 
            onChange={handleInputChange} 
          />
        </div>
        <button type="button" className="btn btn-primary w-100" onClick={handleSave}>
          Mettre à jour
        </button>
      </form>
    </div>
  );
};

export default ProfileMedecin;
