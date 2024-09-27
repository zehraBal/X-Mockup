import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faChartSimple, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState, useEffect } from "react";
import { differenceInWeeks } from "date-fns";

export default function Tweets() {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://twitter154.p.rapidapi.com/lists/tweets",
      params: {
        list_id: "1591033111726391297",
        limit: "40",
      },
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "twitter154.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((res) => {
        setTweets(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        setError(err);
        console.warn(err);
      });
  }, []);

  const weeks = (d) => {
    const apiDate = new Date(d);
    const today = new Date();
    const weeksDiff = differenceInWeeks(today, apiDate);
    return weeksDiff;
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="tweets-section">
      {tweets.map((tweet, index) => (
        <div key={tweet.tweet_id || index} className="tweet">
          {" "}
          {/* tweet_id yoksa index kullanılıyor */}
          <div className="userDetails">
            <div>
              <img src={tweet.user?.profile_pic_url} alt="User Profile" />{" "}
              {/* Kullanıcı bilgileri varsa */}
            </div>
            <div>{tweet.user?.name}</div>
            <div>@{tweet.user?.username}</div>
            <div>.{weeks(tweet.creation_date)} weeks ago</div>
          </div>
          <p>{tweet.text}</p>
          {tweet.media_url?.length > 0 /* Medya varsa render ediliyor */ && (
            <img
              className="tweetimg"
              src={tweet.media_url[0]}
              alt="Tweet Media"
            />
          )}
          <div className="postProperties">
            <div className="postProp">
              <FontAwesomeIcon icon={faComment} style={{ paddingTop: "4" }} />
              <p>{tweet.reply_count}</p>
            </div>
            <div className="postProp">
              <FontAwesomeIcon icon={faRetweet} style={{ paddingTop: "4" }} />
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
      ))}
    </div>
  );
}
