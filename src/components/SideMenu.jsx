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
import PostTweet from "./PostTweet";
import PostTweetModal from "./PostTweetModal";
export default function SideMenu({ userDetail }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleDismiss = () => {
    setShowModal(false);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="sidemenu">
      <div
        className="icons"
        onClick={() => {
          navigate("/home");
        }}
      >
        <img src="/logo-white.png" height="30" width="30" />
      </div>
      <div
        data-cy="homeBtn"
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
        <img src="/more.png" height="27" width="27" />
      </div>
      <div
        data-cy="postTweet"
        className="post"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <div>
          <FontAwesomeIcon icon={faPlus} style={{ fontSize: "27px" }} />
        </div>
      </div>
      <div data-cy="dropUp" className="dropup-container" onClick={toggleMenu}>
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
              data-cy="logOut"
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
      <PostTweetModal
        showModal={showModal}
        handleDismiss={handleDismiss}
        userDetail={userDetail}
      />
    </div>
  );
}
