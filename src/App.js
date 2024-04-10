import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Admin from "./pages/Targ/Admin";
import Profile from "./pages/Targ/Profile";
import Login from "./pages/Targ/Login";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/targ/admin" element={<Admin />} />
        <Route path="/targ/login" element={<Login />} />
        <Route path="/targ/profile/:email" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
