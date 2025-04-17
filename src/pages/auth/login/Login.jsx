import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css"; // Importer le fichier CSS ici
import { FaEnvelope, FaLock } from "react-icons/fa"; // Importer les icônes

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simule une authentification réussie
    // navigate("/home-patient");
    navigate("/medecin/home");

  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
          <form
            onSubmit={handleLogin}
            className="p-4 shadow rounded bg-white w-100"
            style={{ maxWidth: "400px" }}
          >
            <h3 className="mb-3 text-center">Connexion</h3>
            <div className="mb-3">
              <label>Email</label>
              <div className="input-group">
                <div className="input-group-text">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Entrez votre email"
                />
              </div>
            </div>
            <div className="mb-3">
              <label>Mot de passe</label>
              <div className="input-group">
                <div className="input-group-text">
                  <FaLock />
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Entrez votre mot de passe"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Se connecter
            </button>
            <p className="mt-3 text-center">
              Pas de compte ? <a href="/register">S'inscrire</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
