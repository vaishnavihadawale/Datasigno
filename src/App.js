import "./App.css";
import LandingPage from "./component/Landing-Page/LandingPage";
import RegisterPage from "./component/Register-Page/RegisterPage";
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
      <Route path="/signup" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
