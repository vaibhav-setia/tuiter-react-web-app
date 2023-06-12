import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import tuitsListReducer from "./reducers/tuits-list-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ProfileScreen from "./user/profile-screen";
import { useSelector } from "react-redux";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";
const store = configureStore({
  reducer: {
    who: whoReducer,
    tuitslist: tuitsListReducer,
    tuits: tuitsReducer,
    user: authReducer,
  },
});
function Tuiter() {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <div className="row">
          <div className="col-12 col-xl-2 col-md-3 col-lg-2 col-sm-3">
            <NavigationSidebar />
          </div>
          <div className="col-12 col-xl-6 col-md-9 col-sm-9 col-lg-6">
            <Routes>
              <Route path="/notifications" element={<h1>Notifications</h1>} />
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/explore" element={<ExploreScreen />} />
              <Route path="/bookmarks" element={<BookmarksScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          </div>
          <div className=" d-none d-lg-block col-lg-4 col-xl-4">
            <WhoToFollowList />
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Tuiter;
