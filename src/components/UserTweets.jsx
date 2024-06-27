import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faChartSimple, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState, useEffect } from "react";
import { differenceInWeeks } from "date-fns";
export default function UserTweets({ userDetail }) {
  const [userTweets, setUserTweets] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://twitter154.p.rapidapi.com/user/tweets",
      params: {
        username: "omarmhaimdat",
        limit: "40",
        user_id: "96479162",
        include_replies: "false",
        include_pinned: "false",
      },
      headers: {
        "x-rapidapi-key": "95ec85188amsh54a662dc270dd7ep17c336jsnfd8f82d872cf",
        "x-rapidapi-host": "twitter154.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((res) => {
        console.log(res.data.results);
        setUserTweets(res.data.results);
      })
      .catch((err) => console.warn(err));
  }, []);
  const weeks = (d) => {
    const apiDate = new Date(d);
    const today = new Date();
    const weeksDiff = differenceInWeeks(today, apiDate);
    return weeksDiff;
  };
  return (
    <div>
      {userTweets.map((tweet) => {
        return (
          <div key={userTweets.tweet_id}>
            <div key={tweet.tweet_id} className="tweet">
              <div className="userDetails">
                <div>
                  <img src={userDetail.profilePicture} />
                </div>
                <div>{userDetail.username}</div>
                <div>{userDetail.userat}</div>
                <div>.{weeks(tweet.creation_date)}h </div>
              </div>
              <p>{tweet.text}</p>
              {tweet.media_url && tweet.media_url.length > 0 && (
                <img
                  className="tweetimg"
                  src={tweet.media_url[0]}
                  alt="Tweet Media"
                />
              )}
              <div className="postProperties">
                <div className="postProp">
                  <FontAwesomeIcon
                    icon={faComment}
                    style={{ paddingTop: "4" }}
                  />
                  <p>{tweet.reply_count}</p>
                </div>
                <div className="postProp">
                  <FontAwesomeIcon
                    icon={faRetweet}
                    style={{ paddingTop: "4" }}
                  />
                  <p>{tweet.retweet_count}</p>
                </div>
                <div className="postProp">
                  <FontAwesomeIcon icon={faHeart} style={{ paddingTop: "4" }} />
                  <p>{tweet.favorite_count}</p>
                </div>

                <div className="postProp">
                  <FontAwesomeIcon
                    icon={faChartSimple}
                    style={{ paddingTop: "4" }}
                  />
                  <p>{tweet.views}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
