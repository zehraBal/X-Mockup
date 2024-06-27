import { userProfileDetails } from "../userProfileDetails";
export default function WhoToFollow() {
  return (
    <div className="followRec">
      <h3>Who to follow</h3>{" "}
      {userProfileDetails.slice(1, 4).map((user, index) => {
        return (
          <div key={index} className="follow">
            <div>
              <img src={user.profilePicture} />
            </div>
            <div>
              <p>{user.username}</p>
              <p>{user.userat}</p>
            </div>
            <div>
              <button>Follow</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
