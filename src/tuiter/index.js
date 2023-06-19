import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowList from "./who-to-follow-list";
function Tuiter() {
  return (
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
          </Routes>
        </div>
        <div className=" d-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList />
        </div>
      </div>
    </div>
  );
}
export default Tuiter;
