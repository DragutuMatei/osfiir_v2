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


function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
     <Departamentul_tau />;
     <Footer />
    </Router>
  );
}

export default App;
