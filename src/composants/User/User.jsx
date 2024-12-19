// ----- Lorsque l'on est connecté ----- //

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserDetails,
  updateUsername,
} from "../../redux/features/user/userSlice";
import "../User/user.scss";

function User() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  // Pour récupérer depuis userSlice
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const userName = useSelector((state) => state.user.userName);

  // Pour le formulaire
  const [username, setUsername] = useState("");
  const [display, setDisplay] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setUsername(userName || "");
  }, [userName]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/v1/user/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          dispatch(setUserDetails(data.body));
        } else {
          console.error(
            "Erreur lors de la récupération des données utilisateur."
          );
        }
      } catch (error) {
        console.error(
          "Erreur de récupération des données utilisateur :",
          error
        );
      }
    };

    fetchUserData();
  }, [dispatch, token]);

  const handleSubmitUsername = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userName: username }), // Attribut pour l'objet afin de le mettre à jour
        }
      );

      const data = await response.json();

      if (response.ok) {
        dispatch(updateUsername(username)); // MAJ de Redux pour la modif username
        setDisplay(false);
      } else {
        setErrorMessage(data.message || "Invalid fields.");
      }
    } catch (error) {
      setErrorMessage("Internal server error.");
      console.error("Erreur :", error);
    }
  };

  return (
    <div className="header">
      <h2>
        Bienvenue
        <br />
        {firstName && lastName
          ? `${firstName} ${lastName}`
          : "Nom et prénom non disponibles"}
      </h2>

      {display ? (
        <form onSubmit={handleSubmitUsername}>
          <div className="edit-input">
            <label htmlFor="username">User name:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="edit-input">
            <label htmlFor="firstname">First name:</label>
            <input
              type="text"
              id="firstname"
              value={firstName || ""}
              disabled={true} // Pour ne pas modifier
            />
          </div>
          <div className="edit-input">
            <label htmlFor="lastname">Last name:</label>
            <input
              type="text"
              id="lastname"
              value={lastName || ""}
              disabled={true} // Pour ne pas modifier
            />
          </div>
          <div className="buttons">
            <button type="submit" className="edit-username-button">
              Save
            </button>
            <button
              type="button"
              className="edit-username-button"
              onClick={() => setDisplay(false)}
            >
              Cancel
            </button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      ) : (
        <button className="edit-button" onClick={() => setDisplay(true)}>
          Edit name
        </button>
      )}
    </div>
  );
}

export default User;
