import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePatient from "./pages/patients/HomePatient";
import Profile from "./pages/patients/Profile";
import Appointment from "./pages/patients/Appointment";
import Notifications from "./pages/patients/Notifications";
import TicketPayment from "./pages/patients/TicketPayment";
import VideoConsultation from "./pages/patients/VideoConsultation";
import DossierMedical from "./pages/patients/DossierMedical";
import Ordonnances from "./pages/patients/Ordonnances";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import HomeMedecin from "./pages/medecins/HomeMedecin";
import ProfileMedecin from "./pages/medecins/ProfileMedecin";
import DisponibilitesMedecin from "./pages/medecins/DisponibilitesMedecin";
import RendezVousMedecin from "./pages/medecins/RendezVousMedecin";
import ConsultationVideoMedecin from "./pages/medecins/ConsultationVideoMedecin";
import OrdonnancesMedecin from "./pages/medecins/OrdonnancesMedecin";

// Import des pages du médecin
// import ProfileMedecin from "./pages/medecin/ProfileMedecin";
// import DisponibilitesMedecin from "./pages/medecin/DisponibilitesMedecin";
// import RendezVousMedecin from "./pages/medecin/RendezVousMedecin";
// import ConsultationVideoMedecin from "./pages/medecin/ConsultationVideoMedecin";
// import OrdonnancesMedecin from "./pages/medecin/OrdonnancesMedecin";
// import HomeMedecin from "./pages/medecins/HomeMedecin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        {/* <Route path="/home-patient" element={<HomePatient />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/rendez-vous" element={<Appointment />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/paiement" element={<TicketPayment />} />
        <Route path="/consultation" element={<VideoConsultation />} />
        <Route path="/dossier" element={<DossierMedical />} />
        <Route path="/ordonnances" element={<Ordonnances />} /> */}

        {/* Routes pour le médecin*/}
        <Route path="/medecin/home" element={<HomeMedecin />} />
        <Route path="/medecin/profile" element={<ProfileMedecin />} />
        <Route path="/medecin/disponibilites" element={<DisponibilitesMedecin />} />
        <Route path="/medecin/rendezvous" element={<RendezVousMedecin />} />
        <Route path="/medecin/consultation" element={<ConsultationVideoMedecin />} />
        <Route path="/medecin/ordonnances" element={<OrdonnancesMedecin />} /> 
      </Routes>
    </Router>
  );
};

export default App;
