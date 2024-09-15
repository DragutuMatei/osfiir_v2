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
    if (top < 20) {
      document.getElementById("navbar").style.background = "#2f2f2f";
    }
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
    navigate("/targ/admin");
  };

  const close = () => {
    let clasa = ref.current.className;
    clasa = clasa.replace(" active", "");
    ref.current.className = clasa;
    console.log(ref.current.className);
  };

  return (
    <nav id="navbar" style={{ background: top > 20 && "#2f2f2f" }}>
      <div className="logo">
        <Link to={"/"} onClick={close}>
          <h1>OSFIIR</h1>
        </Link>
        <div className="resize" onClick={toogle}>
          <RxHamburgerMenu className="notsvg" />
        </div>
      </div>
      <div className="links" ref={ref}>
        <Link to={"/about"} onClick={close}>
          Despre noi
        </Link>
        <Link to={"/about_faculate"} onClick={close}>
          Despre facultate
        </Link>
        <Link to={"/blog"} onClick={close}>
          Blog
        </Link>
        <Link to={"/faq"} onClick={close}>
          FAQ
        </Link>
        <Link to={"/contact"} onClick={close}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
