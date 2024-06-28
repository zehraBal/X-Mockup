import { faFaceSmile, faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function PostTweet({ userDetail }) {
  const navigate = useNavigate();
  const initialUserTweet = {
    username: `${userDetail.username}`,
    userTag: `${userDetail.userat}`,
    userId: `${userDetail.id}`,
    tweetContent: "",
    whoCanReply: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    defaultValues: initialUserTweet,
    mode: "all",
  });

  const [userChoice, setUserChoice] = useState("Everyone");

  const handleClick = (e) => {
    setUserChoice(e.target.textContent);
  };

  const formSubmit = (data) => {
    const userTweet = {
      ...data,
      whoCanReply: userChoice,
    };

    axios
      .post("https://reqres.in/api/posts", userTweet)
      .then((response) => {
        console.log("Tweet posted:", response.data);
        reset(initialUserTweet);
        setUserChoice("Everyone");
      })
      .catch((error) => {
        console.error("Error posting tweet:", error);
      });
  };

  return (
    <div className="postTweet-section">
      <div className="sidepp">
        <img
          data-cy="profilePic"
          src={userDetail.profilePicture}
          alt=""
          onClick={() => navigate("/profile")}
        />
      </div>
      <div className="tweet-content">
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="tweetInput">
            <textarea
              {...register("tweetContent", {
                required: "Please enter some content",
              })}
              placeholder="What is happening?!"
            />
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
              <img
                className="postTweet-img"
                src="/src/assets/gif.png"
                alt="GIF"
              />
              <FontAwesomeIcon icon={faFaceSmile} />
              <img
                className="postTweet-img"
                src="/src/assets/calendar.png"
                alt="Calendar"
              />
              <img
                className="postTweet-img"
                src="/src/assets/placeholder.png"
                alt="Placeholder"
              />
              <button type="submit" className="post-btn" disabled={!isValid}>
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
