import { faFaceSmile, faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
export default function PostTweet({ userDetail }) {
  const navigate = useNavigate();
  const [userChoice, setUSerChoice] = useState("Everyone");
  const handleClick = (e) => {
    setUSerChoice(e.target.textContent);
  };
  return (
    <div className="postTweet-section">
      <div className="sidepp">
        {" "}
        <img
          src={userDetail.profilePicture}
          alt=""
          onClick={() => navigate("/profile")}
        />
      </div>
      <div className="tweet-content">
        <div className="tweetInput">
          <input type="text" placeholder="What is happening?!" />
        </div>
        <div className="reply-sec">
          <div className="reply-dropdown">
            <Dropdown>
              <Dropdown.Toggle
                className="dropdown-btn btn-success"
                variant="success"
                id="dropdown-basic"
              >
                {userChoice} can reply
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handleClick}>Everyone</Dropdown.Item>
                <Dropdown.Item onClick={handleClick}>
                  Accounts you follow
                </Dropdown.Item>
                <Dropdown.Item onClick={handleClick}>
                  Verified accounts
                </Dropdown.Item>
                <Dropdown.Item onClick={handleClick}>
                  Only accounts you mention
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="tweet-actions">
            <FontAwesomeIcon icon={faImage} />
            <img className="postTweet-img" src="/src/assets/gif.png" />
            <FontAwesomeIcon icon={faFaceSmile} />
            <img className="postTweet-img" src="/src/assets/calendar.png" />
            <img
              className="postTweet-img"
              src="/src/assets/placeholder.png"
              alt=""
            />
            <button className="post-btn">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}
