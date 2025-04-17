import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css"; // Pour un style personnalisé

const Register = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="auth-wrapper d-flex justify-content-center align-items-center vh-100 bg-light">
          <div
            className="card p-4 shadow-sm"
            style={{ width: "100%", maxWidth: "420px" }}
          >
            <h3 className="text-center mb-4">Créer un compte</h3>
            <form className="">
              <div className="form-group mb-3">
                <label>Nom complet</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-person-fill"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control col-12"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="form-group mb-3">
                <label>Email</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-envelope-fill"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control col-12"
                    placeholder="Votre email"
                  />
                </div>
              </div>

              <div className="form-group mb-3">
                <label>Mot de passe</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock-fill"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control col-12"
                    placeholder="Mot de passe"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                S'inscrire
              </button>
            </form>

            <p className="mt-3 text-center">
              Vous avez déjà un compte ? <Link to="/">Se connecter</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
