import React from "react";
import logo from "../../images/argentBankLogo.png";
import "./header.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { setUserDetails } from "../../redux/features/user/userSlice";

function Header() {
  const dispatch = useDispatch();

  const { userName } = useSelector((state) => state.user);
  const isLoggedIn = userName !== ""; // userName de qui est connecté

  const handleLogout = () => {
    dispatch(setUserDetails({ userName: "" }));
  };

  return (
    <header>
      <nav className="nav">
        <Link to="/">
          <img src={logo} className="logo" alt="Logo d'ArgentBank" />
        </Link>
        <div className="lien-login">
          {isLoggedIn ? (
            <div className="logged">
              <Link to="/profil" className="user">
                <FontAwesomeIcon icon={faCircleUser} className="user-icon" />
                <span>{userName}</span>{" "}
                {/* Pour afficher le  userName dans profil */}
              </Link>
              <Link to="/" onClick={handleLogout} className="logout">
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                Se déconnecter
              </Link>
            </div>
          ) : (
            <Link className="lien" to="/login">
              <FontAwesomeIcon icon={faCircleUser} className="user-icon" />
              Se connecter
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
