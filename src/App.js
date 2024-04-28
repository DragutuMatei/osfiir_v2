import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Admin from "./pages/Targ/Admin";
import Profile from "./pages/Targ/Profile";
import Login from "./pages/Targ/Login";
import Home from "./pages/Home/Home";
import Test from "./pages/Test";
import About from "./pages/About/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a" element={<Test />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/targ/admin" element={<Admin />} />
        <Route path="/targ/login" element={<Login />} />
        <Route path="/targ/profile/:email" element={<Profile />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
