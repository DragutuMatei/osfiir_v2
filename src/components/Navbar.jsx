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
    navigate("/targ/admin");
  };

  // const close = () => {

  // }

  return (
    <nav style={{ background: top > 20 && "#2f2f2f" }}>
      <div className="logo">
        <Link to={"/"}>
          <h1>OSFIIR</h1>
        </Link>
        <div className="resize" onClick={toogle}>
          <RxHamburgerMenu className="notsvg" />
        </div>
      </div>
      <div className="links" ref={ref}>
        <Link to={"/about"}>
          Despre noi
        </Link>
        <Link to={"/about_faculate"}>
          Despre facultate
        </Link>
        <Link to={"/blog"}>
          Blog
        </Link>
        <Link to={"/faq"}>
          FAQ
        </Link>
        <Link to={"/contact"}>
          Contact
        </Link>
        {/* <Link to={"/"}>About</Link>
        <Link to={"/"}>About</Link>
        {user && (
          <Link to={"#"} onClick={logout}>
            Log out
          </Link>
        )} */}
      </div>
    </nav>
  );
}

export default Navbar;
