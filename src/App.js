import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Targ/Profile";
import Login from "./pages/Targ/Login";
import Home from "./pages/Home/Home";
import Test from "./pages/Test";
import About from "./pages/About/About";
import { useEffect } from "react";
import ScrollToTop from "./utils/ScrollToTop";
import Blog from "./pages/Blog/Blog";
import Faculate from "./pages/Facultate/Faculate";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import SimplePostPage from "./pages/Blog/SimplePostPage";
import Footerbug from "./components/FooterBughy"
import Admin from "./pages/Admin";

//  todo: culori, text + poze, securitate la admin, logo, 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
        <Route path="/a" element={<Test />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<SimplePostPage />} />
        <Route path="/anunt/:slug" element={<SimplePostPage />} />
        <Route path="/about_faculate" element={<Faculate />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTop />
      <Footer/>
    </Router>
  );
}

export default App;
