// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import React from "react";
// import $ from "jquery";
// import { Link } from "react-router-dom";
// import { useRef } from "react";
// import './navbar.scss'

// function Navbar() {
//   const { pathname } = useLocation();
//   const nav = useRef(null);

//   const size = useWindowSize();
//   const nav_click = () => {
//     $("nav ul").slideToggle();
//     nav.current.classList.toggle("active");
//   };

//   useEffect(() => {
//     const ul = document.querySelector("nav ul");
//     if (size.width >= 799) {
//     } else {
//       if (ul.style.display !== "block") {
//       }
//     }
//   }, [size]);

//   useEffect(() => {
//     if (size.width <= 799) {
//       const ul = document.querySelector("nav ul");
//       nav.current.classList.remove("active");
//       ul.style.display = "none";
//     }
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return (
//     <section className="navigation">
//       <div className="nav-container">
//         <div className="brand">
//           <Link to="/">
//             <img
//               src={'https://fiirbots.netlify.app/static/media/logo.e2c5582e4df45ee5c3c2.png'}
//               style={{ width: "auto", height: 50, objectFit: "contain" }}
//               alt="logo"
//             />
//           </Link>
//         </div>
//         <nav>
//           <div className="nav-mobile">
//             <a id="nav-toggle" href="#!" onClick={nav_click} ref={nav}>
//               <span></span>
//             </a>
//           </div>
//           <ul className="nav-list">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             {/* <li>
//               <Link to="/blog">Blog</Link>
//             </li> */}
//             <li>
//               <Link to="/despre">About</Link>
//             </li>
//             <li>
//               <Link to="/team">Team</Link>
//             </li>
//             {/* <li>
//               <Link to="/sponsors">Sponsors</Link>
//             </li> */}
//           </ul>
//         </nav>
//       </div>
//     </section>
//   );
// }

// export default Navbar;
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import useWindowSize from "../utils/useWindowSize";
import Fire from "../utils/Fire";
import { useAuthState } from "react-firebase-hooks/auth";
const fire = new Fire();

function Navbar() {
  const { width, height } = useWindowSize();
  const [user, loading, error] = useAuthState(fire.getUser());
  const ref = useRef(null);
  const [top, setScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toogle = () => {
    let clasa = ref.current.className;
    if (!clasa.includes("active")) {
      clasa += " active";
    } else {
      clasa = clasa.replace(" active", "");
    }
    ref.current.className = clasa;
    console.log(ref.current.className);
  };
  const navigate = useNavigate();
  const logout = async () => {
    await fire.logout();
    navigate("/targ/admin")
  };

  return (
    <nav style={{ background: top > 20 && "#2f2f2f" }}>
      <div className="logo">
        <h1>OSFIIR</h1>
        <div className="resize" onClick={toogle}>
          <RxHamburgerMenu className="notsvg" />
        </div>
      </div>
      <div className="links" ref={ref}>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>About</Link>
        {user && (
          <Link to={"#"} onClick={logout}>
            Log out
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
