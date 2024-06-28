import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function UserHeader({ userDetail }) {
  const navigate = useNavigate();
  return (
    <div className="userHeader">
      <div>
        <button
          data-cy="back-btn"
          className="backBtn"
          onClick={() => {
            navigate("/home");
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
      <div>
        <h5> {userDetail.username}</h5>
      </div>
    </div>
  );
}
