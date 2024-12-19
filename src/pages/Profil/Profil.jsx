import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../composants/User/User";
import Accounts from "../../composants/Accounts/Accounts";
import account from "../../donnees/account.json";
import "./profil.scss";

function Profil() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token")

  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      setError("Token non valide ou non fourni.");
      navigate("/login");
      return;
    }

  }, [token, navigate]);

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div className="background">
      <User />
      {account.map((account) => (
        <Accounts
          key={account.id}
          title={account.title}
          somme={account.somme}
          description={account.description}
        />
      ))}
    </div>
  );
}

export default Profil;
