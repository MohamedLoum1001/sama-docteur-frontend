import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../../pages/patients/ticketpayment.css";

const TicketPayment = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home-patient"); // Redirige vers la page d'accueil ou une autre route définie
  };

  return (
    <div className="ticket-payment-container container mt-5">
      <button className="btn btn-outline-secondary mb-4" onClick={handleBack}>
        <FaArrowLeft className="me-2" />
        Retour
      </button>

      <h2 className="text-center mb-4">Acheter un Ticket Médical</h2>

      <form className="ticket-form">
        <div className="mb-3">
          <label>Nom du patient</label>
          <input type="text" className="form-control" placeholder="Votre nom complet" />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="email@example.com" />
        </div>

        <div className="mb-3">
          <label>Type de ticket</label>
          <select className="form-select">
            <option>Consultation générale</option>
            <option>Consultation spécialisée</option>
            <option>Consultation d'urgence</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Méthode de paiement</label>
          <select className="form-select">
            <option>Carte bancaire</option>
            <option>Mobile Money</option>
            <option>PayPal</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Montant</label>
          <input type="text" className="form-control" placeholder="15.000 FCFA" />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Payer maintenant
        </button>
      </form>
    </div>
  );
};

export default TicketPayment;
