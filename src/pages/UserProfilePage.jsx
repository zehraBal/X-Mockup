import UserHeader from "../components/Header";
import HomeFooter from "../components/HomeFooter";
import SideMenu from "../components/SideMenu";
import Trends from "../components/Trends";
import UserProfile from "../components/UserProfile";
import WhoToFollow from "../components/WhoToFollow";
export default function UserProfilePage({ userDetail }) {
  return (
    <div className="userProfilePage">
      <div className="left-section">
        {" "}
        <SideMenu userDetail={userDetail} />
      </div>
      <div className="middle-section">
        <UserHeader userDetail={userDetail} />
        <UserProfile userDetail={userDetail} />
      </div>
      <div className="right-section">
        {" "}
        <WhoToFollow />
        <Trends />
        <HomeFooter />
      </div>
    </div>
  );
}
