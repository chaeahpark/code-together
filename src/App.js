import "./App.css";
import Header from "./components/Header/Header";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import AddPost from "./pages/AddPost";
import ProjectDetails from "./pages/projectDetails/ProjectDetails";
import EditPost from "./pages/EditPost";
import MyProfile from "./pages/myProfile/MyProfile";
import NotFound from "./pages/NotFound";
import Comments from "./components/comments/Comments";
import ProjectProvider from "./contexts/ProjectContext";
import ProfileProvider from "./contexts/ProfileContext";
import AuthProvider from "./contexts/AuthContext";
import TagProvider from "./contexts/TagContext";
import CommentProvider from "./contexts/CommentContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <ProfileProvider>
            <ProjectProvider>
              <TagProvider>
                <CommentProvider>
                  <Header />
                  <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/addPost" element={<AddPost />}></Route>
                    <Route
                      path="/project/:postId"
                      element={<ProjectDetails />}
                    ></Route>
                    <Route
                      path="/editpost/:postId"
                      element={<EditPost />}
                    ></Route>
                    <Route path="/myprofile" element={<MyProfile />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                  </Routes>
                </CommentProvider>
              </TagProvider>
            </ProjectProvider>
          </ProfileProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
