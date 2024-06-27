import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UserTweets from "./UserTweets";
import { useNavigate } from "react-router-dom";

export default function UserProfile({ userDetail }) {
  const navigate = useNavigate();
  const joinDate = (d) => {
    const date = new Date(d);
    const options = { year: "numeric", month: "long" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="userProfile-section">
      <div className="userBanner">
        <img src={userDetail.banner} alt="User Banner" />
      </div>

      <div className="editProfile-container">
        <div className="profile-pic-and-button">
          <div className="userProfilePic">
            <img src={userDetail.profilePicture} alt="User Profile" />
          </div>
          <button className="edit-profile-button">Edit profile</button>
        </div>
        <div className="username">
          <p>{userDetail.username}</p>
          <p style={{ color: "gray" }}>{userDetail.userat}</p>
        </div>
        <div className="description" style={{ color: "gray" }}>
          {userDetail.description}
        </div>
        <div className="joined" style={{ color: "gray" }}>
          <FontAwesomeIcon icon={faCalendarDays} />
          Joined {joinDate(userDetail.creationDate)}
        </div>
        <div className="follower" style={{ color: "gray" }}>
          <div
            className="fllw"
            onClick={() => {
              navigate("/highlights");
            }}
          >
            {userDetail.following} Following
          </div>
          <div
            className="fllw"
            onClick={() => {
              navigate("/highlights");
            }}
          >
            {userDetail.follower} Follower
          </div>
        </div>
      </div>
      {/* <UserTweets />*/}
    </div>
  );
}
