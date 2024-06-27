import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function UserHeader({ userDetail }) {
  const navigate = useNavigate();
  return (
    <div className="userHeader">
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      {userDetail.username}
    </div>
  );
}
