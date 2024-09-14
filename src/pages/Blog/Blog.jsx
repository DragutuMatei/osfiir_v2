import React, { useEffect, useState } from "react";
import "./blog.scss";
import BlogPost from "./BlogPost";
import Footerbug from "../../components/FooterBughy";
import ScrollToTopButton from "../../components/Scrolltotop";
import { AXIOS } from "../../utils/AxiosConfig";
function Blog() {
  const [data, setData] = useState([]);
  const getBlogPosts = async () => {
    AXIOS.get("/getBlogPosts").then((res) => {
      console.log(res);
      if (res.data.ok) setData(res.data.data);
    });
  };
  useEffect(() => {
    getBlogPosts();
  }, []);

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
          {data &&
            data.map((dat, index) => {
              let i = index + 1;
              // if (i >= data.length) i = index;
              return (
                <div className="sectiune " onClick={() => filter(i)}>
                  {dat.category}
                </div>
              );
            })}
          {/* <div className="sectiune active" onClick={() => filter(0)}>
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
          </div> */}
        </div>
      </div>
      <div className="blog">
        {data &&
          data.map((post) => {
            return (
              <BlogPost
                src={post.cover}
                to={`/blog/${post.uid}`}
                title={post.title}
                by={"FIIR"}
              />
            );
          })}
        {/* <BlogPost
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
        /> */}
      </div>
      <Footerbug />
      <ScrollToTopButton />
    </>
  );
}

export default Blog;
