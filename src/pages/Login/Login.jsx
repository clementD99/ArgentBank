import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberme, setRememberme] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const connexion = async (event) => {
    event.preventDefault();

    try {
      const reponse = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (reponse.ok) {
        const data = await reponse.json();
        const token = data?.body?.token;

        if (token) {
          localStorage.setItem("token", token);

          if (rememberme) {
            localStorage.setItem("rememberMe", true);
          }

          navigate("/profil", { replace: true });
        } else {
          setError("Erreur: le token est manquant dans la réponse.");
        }
      } else {
        setError("Le mot de passe et/ou votre identifiant est incorrect.");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      setError("Une erreur s'est produite lors de la tentative de connexion.");
    }
  };

  return (
    <div className="background-login">
      <section className="sign-in">
        <FontAwesomeIcon icon={faCircleUser} />
        <h2>Se connecter</h2>
        <form onSubmit={connexion}>
          <div className="username">
            <label htmlFor="username">Utilisateur</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberme}
              onChange={(event) => setRememberme(event.target.checked)}
            />
            <label htmlFor="remember-me">Se souvenir de moi</label>
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="sign-in-button">
            <button type="submit">Se connecter</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
