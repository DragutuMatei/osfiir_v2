import React from "react";
import { useNavigate } from "react-router-dom";
import "./buttons.scss";

function Button({ text, link }) {
  const navigate = useNavigate();
  const nav = () => {
    navigate(link);
  };
  return (
    <button className="mainButton" onClick={link && nav}>
      {text}
    </button>
  );
}

export default Button;
