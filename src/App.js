import "./App.css";
import Header from "./components/Header/Header";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

import ProjectProvider from "./contexts/ProjectContext";

function App() {
  return (
    <div className="App">
      {/* <ProjectProvider>
        <Header />
        <Main />
        <Login />
      </ProjectProvider> */}
      <Signup />
    </div>
  );
}

export default App;
