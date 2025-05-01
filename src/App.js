import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Test from "./pages/Test";
import About from "./pages/About/About";
import ScrollToTop from "./utils/ScrollToTop";
import Blog from "./pages/Blog/Blog";
import Faculate from "./pages/Facultate/Faculate";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import SimplePostPage from "./pages/Blog/SimplePostPage";
import Admin from "./pages/Admin";
import Voluntariat from "./pages/Voluntariat/Voluntariat";
import Departamentul_tau from "./pages/Depratamentul_tau/Departamentul_tau";
import Download from "./pages/Download"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/admin" element={<Admin />} />
        <Route path="/a" element={<Test />} />
        <Route path="/about" element={<About />} />
        {/*<Route path="/blog" element={<Blog />} />*/}
        <Route path="/blog/:slug" element={<SimplePostPage />} />
        <Route path="/about_facultate" element={<Faculate />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/voluntariat" element={<Voluntariat />} />
        <Route path="/departamentul_tau" element={<Departamentul_tau />} />
        <Route path="/download:nr" element={< Download />}/>
      </Routes>
      <ScrollToTop />
      <Footer />
    </Router>
  );
}

export default App;