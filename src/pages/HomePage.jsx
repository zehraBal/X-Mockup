import Header from "../components/Header";
import HomeFooter from "../components/HomeFooter";
import PostTweet from "../components/PostTweet";
import SideMenu from "../components/SideMenu";
import Trends from "../components/Trends";
import Tweets from "../components/Tweets";
import WhoToFollow from "../components/WhoToFollow";

export default function Homepage({ userDetail }) {
  return (
    <div className="homepage-container">
      <div className="left-section">
        {" "}
        <SideMenu userDetail={userDetail} />
      </div>
      <div className="middle-section">
        <Header />
        <PostTweet userDetail={userDetail} />
        {/*<Tweets />*/}
      </div>
      <div className="right-section">
        {" "}
        <Trends />
        <WhoToFollow />
        <HomeFooter />
      </div>
    </div>
  );
}
