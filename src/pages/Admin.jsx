import React, { useEffect, useState } from "react";
import { AXIOS } from "../utils/AxiosConfig";
import "./admin.scss";
import BlogPost from "./Blog/BlogPost";
import "../pages/Blog/blog.scss";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Admin = () => {
  const [title, setTitle] = useState("");
  const [ceE, setCeE] = useState("");
  const [cover, setCover] = useState(null);
  const [sections, setSections] = useState([]);

  const [blog, setBlog] = useState([]);
  const [anunturi, setAnunturi] = useState([]);

  const getBlogPosts = async () => {
    await AXIOS.get("/getBlogPosts/0").then((res) => {
      console.log(res.data.data);
      setBlog(res.data.data);
    });
  };

  const getAnunturi = async () => {
    await AXIOS.get("/getAnunturi").then((res) => {
      setAnunturi(res.data.data);
    });
  };

  useEffect(() => {
    getBlogPosts();
    getAnunturi();
  }, []);

  const deleteById = async (id) => {
    await AXIOS.post("/deleteById", { id: id }).then((res) => {
      console.log(res);
    });
  };

  const handleAddSection = () => {
    setSections([...sections, { subtitle: "", texts: [], img: null }]);
  };

  const handleDeleteSection = (index) => {
    const updatedSections = sections.filter((_, i) => i !== index);
    setSections(updatedSections);
  };

  const handleAddTextarea = (index) => {
    const updatedSections = [...sections];
    updatedSections[index].texts.push("");
    setSections(updatedSections);
  };

  const handleSubtitleChange = (index, value) => {
    const updatedSections = [...sections];
    updatedSections[index].subtitle = value;
    setSections(updatedSections);
  };

  const handleTextareaChange = (sectionIndex, textIndex, value) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].texts[textIndex] = value;
    setSections(updatedSections);
  };

  const handleFileChange = (sectionIndex, file) => {
    const updatedSections = [...sections];
    console.log(file);
    updatedSections[sectionIndex].img = null;
    updatedSections[sectionIndex].img = file;
    setSections(updatedSections);
  };

  const handleCoverChange = (e) => {
    setCover(e.target.files[0]);
  };
  const handleDeleteTextarea = (sectionIndex, textIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].texts = updatedSections[
      sectionIndex
    ].texts.filter((_, i) => i !== textIndex);
    setSections(updatedSections);
  };
  const handleSubmit = async () => {
    function isEmpty(obj) {
      for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) {
          return false;
        }
      }

      return true;
    }
    const payload = {
      title,
      ceE,
      galerie: galerie,
      cover: cover,
      category: category,
      imgs: sections.map((section) => section.img),
      sections: JSON.stringify(
        sections.map((section, index) => ({
          subtitle: section.subtitle,
          texts: section.texts,
          img: isEmpty(section.img) ? index : -1,
        }))
      ),
    };
    console.log(payload);

    await AXIOS.post("/addPost", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      console.log(res);
    });
  };
  const [galerie, setGalerie] = useState([]);
  const [category, setCategory] = useState("");

  const [user, loading, error] = useAuthState(auth);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        if (!user.email.includes("@osfiir.ro")) {
          auth.signOut();
          alert("DACA NU MERGE INSEAMNA CA NU AI CE FACE AICI:)")
        }
      })
      .catch((error) => {
        console.error("Login error: ", error);
      });
  };

  const logout = async () => {
    auth.signOut();
  };
  return (
    <>
      {!loading && user ? (
        <>
          <div className="admin-panel-form">
            <br />
            <br />
            <br />
            {/* <button onClick={logout}>Logout</button> */}

            <br />
            <br />
            <br />

            <h2>Admin Panel</h2>

            <div className="form-group">
              <label>Ce este?</label>
              <select
                className="form-input"
                onChange={(e) => {
                  setCeE(e.target.value);
                }}
              >
                <option value="">ce este</option>
                <option value="anunt">Anunt</option>
                <option value="blog">blog</option>
              </select>
            </div>
            <div className="form-group">
              <label>Title: </label>
              <input
                className="form-input"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Category: </label>
              <select
                className="form-input"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="">Category</option>
                <option value="FIIR">FIIR</option>
                <option value="OSFIIR">OSFIIR</option>
                <option value="PTC">PTC</option>
              </select>
            </div>

            <div className="form-group">
              <label>Cover: </label>
              <input
                className="form-input"
                type="file"
                onChange={handleCoverChange}
              />
            </div>

            <div className="form-group">
              <label>Galerie: </label>
              <input
                className="form-input"
                type="file"
                multiple
                onChange={(e) => {
                  const files = Array.from(e.target.files);
                  setGalerie((old) => [...files]);
                }}
              />
            </div>

            <hr />

            {sections.map((section, index) => (
              <div key={index} className="section-wrapper">
                <div className="form-group">
                  <label>Subtitle: </label>
                  <input
                    className="form-input"
                    type="text"
                    value={section.subtitle}
                    onChange={(e) =>
                      handleSubtitleChange(index, e.target.value)
                    }
                  />
                </div>

                {section.texts.map((text, textIndex) => (
                  <div key={textIndex} className="form-group">
                    <label>Textarea {textIndex + 1}: </label>
                    <textarea
                      className="form-input"
                      value={text}
                      onChange={(e) =>
                        handleTextareaChange(index, textIndex, e.target.value)
                      }
                    />
                    <button
                      className="form-button delete"
                      type="button"
                      onClick={() => handleDeleteTextarea(index, textIndex)}
                    >
                      Delete Textarea
                    </button>
                  </div>
                ))}

                <button
                  className="form-button add-textarea"
                  type="button"
                  onClick={() => handleAddTextarea(index)}
                >
                  Add Textarea
                </button>

                <div className="form-group">
                  <label>Image: </label>
                  <input
                    className="form-input"
                    type="file"
                    onChange={(e) => handleFileChange(index, e.target.files[0])}
                  />
                </div>

                <button
                  className="form-button delete-section"
                  type="button"
                  onClick={() => handleDeleteSection(index)}
                >
                  Delete Section
                </button>
              </div>
            ))}

            <button
              className="form-button add-section"
              type="button"
              onClick={handleAddSection}
            >
              Add Section
            </button>

            <hr />

            <button
              className="form-button submit"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          <div className="blog">
            {blog &&
              blog.map((post) => {
                return (
                  <>
                    <BlogPost
                      src={post.cover}
                      to={`/blog/${post.uid}`}
                      title={post.title}
                      by={"FIIR"}
                      delete_prop={() => {
                        deleteById(post.uid);
                      }}
                    />
                  </>
                );
              })}
          </div>

          <div className="anunturi">
            <div className="img"></div>
            <h2>anunturi</h2>
            <div className="al">
              {anunturi &&
                anunturi.map((anunt) => {
                  return (
                    <div className="anunt">
                      <h2>{anunt.title}</h2>
                      <p>{anunt.sections[0].texts[0]}</p>
                      <Link to={`/blog/${anunt.uid}`}>Afla mai multe</Link>
                      <button onClick={() => deleteById(anunt.uid)}>
                        delete
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </>
       ) : (
          <>
            <br /><br /><br /><br /><br /><br />
          <button onClick={handleLogin}>Log in with Google</button>
        </>
      )} 
    </>
  );
};

export default Admin;
