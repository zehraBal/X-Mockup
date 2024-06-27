import { Route, BrowserRouter, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./pages/MainPage";
import "./Layout.css";
import Homepage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import { useState } from "react";
import { userProfileDetails } from "./userProfileDetails";
function App() {
  const [userDetail, setUserDetail] = useState({ ...userProfileDetails[0] });
  console.log("initialUserDetail: ", userDetail);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route
          exact
          path="/home"
          element={<Homepage userDetail={userDetail} />}
        />
        <Route
          exact
          path="/profile"
          element={
            <UserProfilePage
              userDetail={userDetail}
              setUserDetail={setUserDetail}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
