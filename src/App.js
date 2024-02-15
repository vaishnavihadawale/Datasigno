import "./App.css";
import LandingPage from "./component/Landing-Page/LandingPage";

import LoginPage from "./component/Login-Page/Login";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
