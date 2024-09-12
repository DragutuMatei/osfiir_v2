import React from "react";
import { Link } from "react-router-dom";

function BlogPost({ to, src, by, title }) {
  return (
    <Link to={to} className="post">
      <img src={src} alt="" />
      <h3>By {by}</h3>
      <h1>{title}</h1>
    </Link>
  );
}

export default BlogPost;
