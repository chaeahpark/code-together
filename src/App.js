import "./App.css";
import Header from "./components/Header/Header";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

import ProjectProvider from "./contexts/ProjectContext";
import AuthProvider from "./contexts/AuthContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <ProjectProvider>
            <Header />
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </ProjectProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
