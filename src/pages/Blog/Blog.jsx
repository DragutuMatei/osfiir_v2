import React from "react";
import "./blog.scss";
import BlogPost from "./BlogPost";
import Footerbug from "../../components/FooterBughy";
import ScrollToTopButton from "../../components/Scrolltotop";
function Blog() {
  const filter = (index) => {
    const sectiuni = document.querySelectorAll(".sectiune");
    sectiuni.forEach((sec, i) => {
      if (sec.classList.contains("active")) {
        sec.classList.remove("active");
      }
      if (i == index) sec.classList.add("active");
    });
  };

  return (
    <>
      <div className="banner">
        <h1>Blog</h1>
      </div>
      <div className="sections">
        <h2>Discover our projects</h2>
        <div className="sectiuni">
          <div className="sectiune active" onClick={() => filter(0)}>
            ALL
          </div>
          <div className="sectiune" onClick={() => filter(1)}>
            PTC
          </div>
          <div className="sectiune" onClick={() => filter(2)}>
            FIIR
          </div>
          <div className="sectiune" onClick={() => filter(3)}>
            ERICSSON
          </div>
          <div className="sectiune" onClick={() => filter(4)}>
            DUMNEZEU
          </div>
          <div className="sectiune" onClick={() => filter(5)}>
            MAICA SFANTA
          </div>
        </div>
      </div>
      <div className="blog">
        <BlogPost
          src="https://dev-api.quantum-group.ro/storage/projects/165935181562e7b307c2ceb.JPG"
          to={"/blog/simple/idk"}
          title={"Nu trece nimeni facultatea"}
          by={"FIIR"}
        />
        <BlogPost
          src="https://dev-api.quantum-group.ro/storage/projects/165935181562e7b307c2ceb.JPG"
          to={"/blog/simple/idk"}
          title={"Nu trece nimeni facultatea"}
          by={"FIIR"}
        />
        <BlogPost
          src="https://dev-api.quantum-group.ro/storage/projects/165935181562e7b307c2ceb.JPG"
          to={"/blog/simple/idk"}
          title={"Nu trece nimeni facultatea"}
          by={"FIIR"}
        />
        <BlogPost
          src="https://dev-api.quantum-group.ro/storage/projects/165935181562e7b307c2ceb.JPG"
          to={"/blog/simple/idk"}
          title={"Nu trece nimeni facultatea"}
          by={"FIIR"}
        />
        <BlogPost
          src="https://dev-api.quantum-group.ro/storage/projects/165935181562e7b307c2ceb.JPG"
          to={"/blog/simple/idk"}
          title={"Nu trece nimeni facultatea"}
          by={"FIIR"}
        />
        <BlogPost
          src="https://dev-api.quantum-group.ro/storage/projects/165935181562e7b307c2ceb.JPG"
          to={"/blog/simple/idk"}
          title={"Nu trece nimeni facultatea"}
          by={"FIIR"}
        />
        <BlogPost
          src="https://dev-api.quantum-group.ro/storage/projects/165935181562e7b307c2ceb.JPG"
          to={"/blog/simple/idk"}
          title={"Nu trece nimeni facultatea"}
          by={"FIIR"}
        />
      </div>
      <Footerbug />
      <ScrollToTopButton/>
    </>
    
  );
}

export default Blog;
