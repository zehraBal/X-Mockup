import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faEnvelope,
  faBell,
} from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SideMenu({ userDetail }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="sidemenu">
      <div className="icons">
        <img src="/src/assets/logo-white.png" height="30" width="30" />
      </div>
      <div
        className="icons"
        onClick={() => {
          navigate("/home");
        }}
      >
        <FontAwesomeIcon icon={faHouse} style={{ fontSize: "27px" }} />
      </div>
      <div className="icons">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ fontSize: "27px" }}
        />
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faBell} style={{ fontSize: "27px" }} />
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "27px" }} />
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faUser} style={{ fontSize: "27px" }} />
      </div>
      <div className="icons">
        <img src="/src/assets/more.png" height="27" width="27" />
      </div>
      <div className="post">
        <div>
          <FontAwesomeIcon icon={faPlus} style={{ fontSize: "27px" }} />
        </div>
      </div>
      <div className="dropup-container" onClick={toggleMenu}>
        <img
          src={userDetail.profilePicture}
          alt="Clickable"
          className=" sidepp"
          width="40"
          height="40"
        />
        {isOpen && (
          <div className="dropup-menu">
            <div className="menu-item">Add an existing account</div>
            <div
              className="menu-item"
              onClick={() => {
                navigate("/");
              }}
            >
              Log out {userDetail.userat}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
