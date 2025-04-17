import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaCalendarAlt,
  FaMoneyBill,
  FaVideo,
  FaBell,
  FaFilePrescription,
  FaFolderOpen,
  FaStar,
  FaEnvelope,
  FaSignOutAlt,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const actions = [
  {
    title: "Mon Profil",
    description: "Infos personnelles et historique médical",
    icon: <FaUser size={40} />,
    path: "/profil",
  },
  {
    title: "Prendre un rendez-vous",
    description: "Choisir une spécialité et un médecin",
    icon: <FaCalendarAlt size={40} />,
    path: "/rendez-vous",
  },
  {
    title: "Acheter un ticket",
    description: "Paiement en ligne",
    icon: <FaMoneyBill size={40} />,
    path: "/paiement",
  },
  {
    title: "Consultation en ligne",
    description: "Séance vidéo",
    icon: <FaVideo size={40} />,
    path: "/consultation",
  },
  {
    title: "Notifications",
    description: "Rappels et alertes",
    icon: <FaBell size={40} />,
    path: "/notifications",
  },
  {
    title: "Ordonnances",
    description: "Prescriptions médicales",
    icon: <FaFilePrescription size={40} />,
    path: "/ordonnances",
  },
  {
    title: "Dossier médical",
    description: "Résultats et examens",
    icon: <FaFolderOpen size={40} />,
    path: "/dossier",
  },
  {
    title: "Laisser un avis",
    description: "Évaluer un médecin",
    icon: <FaStar size={40} />,
    path: "/avis",
  },
];

const HomePatient = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => navigate(path);
  const handleLogout = () => navigate("/");

  return (
    <div className="container-fluid">
      <div className="row">
        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
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
                5
              </span>
            </button>
            <button className="btn btn-outline-danger" onClick={handleLogout}>
              <FaSignOutAlt className="me-2" /> Déconnexion
            </button>
          </div>
        </nav>

        {/* CONTENU */}
        <div className="container-fluid mt-4">
          <h2 className="text-center mb-4">Bienvenue 👋</h2>
          <p className="text-center text-muted mb-5">Choisissez une action :</p>
          <div className="row justify-content-center">
            {actions.map((action, index) => (
              <div className="col-sm-12 col-md-6 col-lg-3 mb-4" key={index}>
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

export default HomePatient;
