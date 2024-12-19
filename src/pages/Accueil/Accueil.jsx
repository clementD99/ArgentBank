import image from "../../images/bank-tree.jpeg";
import chat from "../../images/icon-chat.png";
import money from "../../images/icon-money.png";
import security from "../../images/icon-security.png";
import "./accueil.scss";

function Accueil() {
  return (
    <div className="accueil">
      <img src={image} className="accueil-img" alt="image de plante"></img>
      <section className="description">
        <h2>Pas de frais.</h2>
        <h2>Pas de dépôt minimum.</h2>
        <h2>Taux d'intérêt élevés.</h2>
        <p>Ouvrez un compte d'épargne avec Argent Bank dès aujourd'hui !</p>
      </section>
      <div className="features">
        <div className="feature-item">
          <img src={chat} className="feature-img" alt="image de tchat"></img>
          <h3>Vous êtes notre priorité n°1</h3>
          <p>
            Besoin de parler à un représentant ? Vous pouvez le contacter grâce
            à notre chat 24/7 ou au téléphone en moins de 5 minutes.
          </p>
        </div>
        <div className="feature-item">
          <img src={money} className="feature-img" alt="image de tchat"></img>
          <h3>Plus d'économies pour des taux plus élevés</h3>
          <p>
            Plus vous économisez avec nous, plus votre taux d'intéret sera élevé
            !
          </p>
        </div>
        <div className="feature-item">
          <img
            src={security}
            className="feature-img"
            alt="image de tchat"
          ></img>
          <h3>Une sécurité que vous pouvez faire confiance</h3>
          <p>
            Nous utilisons un cryptage haut de gamme pour garantir que vos
            données et votre argent sont toujours en sécurité.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
