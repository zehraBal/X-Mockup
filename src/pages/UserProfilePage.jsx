import UserHeader from "../components/UserHeader";
import HomeFooter from "../components/HomeFooter";
import SideMenu from "../components/SideMenu";
import Trends from "../components/Trends";
import UserProfile from "../components/UserProfile";
import WhoToFollow from "../components/WhoToFollow";
export default function UserProfilePage({ userDetail, setUserDetail }) {
  return (
    <div className="userProfilePage">
      <div className="left-section">
        {" "}
        <SideMenu userDetail={userDetail} />
      </div>
      <div className="user-section">
        <UserHeader userDetail={userDetail} />
        <UserProfile userDetail={userDetail} setUserDetail={setUserDetail} />
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
