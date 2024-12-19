import "../Accounts/accounts.scss";

function Accounts({ title, somme, description }) {
  return (
    <section className="accounts">
      <div className="account-content">
        <h3>{title}</h3>
        <p>{somme}</p>
        <span>{description}</span>
      </div>
      <div className="accounts-wrapper">
        <button>Voir les transactions</button>
      </div>
    </section>
  );
}

export default Accounts;
