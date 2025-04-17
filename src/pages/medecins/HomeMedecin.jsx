import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserMd,
  FaClock,
  FaCalendarCheck,
  FaVideo,
  FaPrescriptionBottle,
  FaEnvelope,
  FaBell,
  FaSignOutAlt,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const actions = [
  {
    title: "Mon Profil",
    description: "Gérer mes informations personnelles",
    icon: <FaUserMd size={40} />,
    path: "/medecin/profile",
  },
  {
    title: "Mes Disponibilités",
    description: "Ajouter ou modifier mes horaires",
    icon: <FaClock size={40} />,
    path: "/medecin/disponibilites",
  },
  {
    title: "Rendez-vous",
    description: "Voir la liste de mes consultations",
    icon: <FaCalendarCheck size={40} />,
    path: "/medecin/rendezvous",
  },
  {
    title: "Consultation Vidéo",
    description: "Lancer une consultation en ligne",
    icon: <FaVideo size={40} />,
    path: "/medecin/consultation",
  },
  {
    title: "Ordonnances",
    description: "Prescrire et envoyer aux patients",
    icon: <FaPrescriptionBottle size={40} />,
    path: "/medecin/ordonnances",
  },
];

const HomeMedecin = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => navigate(path);
  const handleLogout = () => navigate("/");

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
          <span
            className="navbar-brand fw-bold"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Sama Docteur
          </span>
          <div className="ms-auto d-flex align-items-center">
            <button className="btn position-relative me-3">
              <FaEnvelope size={20} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
              </span>
            </button>
            <button className="btn position-relative me-3">
              <FaBell size={20} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                2
              </span>
            </button>
            <button className="btn btn-outline-danger" onClick={handleLogout}>
              <FaSignOutAlt className="me-2" /> Déconnexion
            </button>
          </div>
        </nav>

        {/* CONTENU */}
        <div className="container-fluid mt-5 pt-5">
          <h2 className="text-center mb-4">Bienvenue Docteur 👨‍⚕️</h2>
          <p className="text-center text-muted mb-5">Sélectionnez une action :</p>
          <div className="row justify-content-center">
            {actions.map((action, index) => (
              <div className="col-sm-12 col-md-6 col-lg-3  mb-4" key={index}>
                <div
                  className="card h-100 shadow-sm p-3 text-center hoverable"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleCardClick(action.path)}
                >
                  <div className="mb-3 text-primary">{action.icon}</div>
                  <h5 className="card-title">{action.title}</h5>
                  <p className="card-text text-muted">{action.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMedecin;
