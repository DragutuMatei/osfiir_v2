import React from "react";
import "./blog.scss";
import BlogPost from "./BlogPost";

function Blog() {
  return (
    <>
      <div className="banner">
        <h1>Blog</h1>
      </div>
      <div className="sections">
        <h2>Discover our projects</h2>
        <div className="sectiuni">
          <div className="sectiune">ALL</div>
          <div className="sectiune">PTC</div>
          <div className="sectiune">FIIR</div>
          <div className="sectiune">ERICSSON</div>
          <div className="sectiune">DUMNEZEU</div>
          <div className="sectiune">MAICA SFANTA</div>
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
    </>
  );
}

export default Blog;
