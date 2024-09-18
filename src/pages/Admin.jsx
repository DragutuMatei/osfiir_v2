// // // // import React, { useEffect, useRef, useState } from "react";

// // // // function Admin() {
// // // //   const [img1, setImg1] = useState("");
// // // //   const [title, setTitle] = useState("");
// // // //   const [subtitle1, setSubtitle1] = useState("");
// // // //   const [p1, setP1] = useState("");
// // // //   const [img2, setimg2] = useState("");
// // // //   const [sectiuni, setSectiuni] = useState([]);
// // // //   const [sectiuniData, setSectiuniData] = useState([[]]);
// // // //   const [i, setI] = useState(0);
// // // //   const [k, setK] = useState(0);

// // // //   const handle = (txt, index, j, k = null) => {
// // // //     console.log("k: ", k);
// // // //     setSectiuniData((old) => {
// // // //       if (old[index] && old[index].length > 0) old[index][j] = txt;
// // // //       //   else if (k != null) {
// // // //       //     old[index] = [];
// // // //       //     old[index][0] = [];
// // // //       //     old[index][j][k] = txt;
// // // //       //   }
// // // //       else {
// // // //         old[index] = [];
// // // //         old[index][j] = txt;
// // // //       }
// // // //       console.log(old);
// // // //       return [...old];
// // // //     });
// // // //   };

// // // //   const more = (index, r) => {
// // // //     console.log(index);

// // // //     setSectiuni((old) => {
// // // //       const node = document.createElement("textarea");
// // // //       node.setAttribute("onChange", (e) => handle(e.target.value, index, 1, k));

// // // //       ref.current.appendChild(node);

// // // //       return [...old];
// // // //     });
// // // //     setK((old) => old + 1);
// // // //   };

// // // //   const ref = useRef();
// // // //   const add = (id) => {
// // // //     setSectiuni((old) => [
// // // //       ...old,
// // // //       {
// // // //         id: id,
// // // //         html: (
// // // //           <section key={Math.random() * 800088} ref={ref}>
// // // //             <span>{i}</span>
// // // //             <input
// // // //               type="text"
// // // //               name={`subtitle${i}`}
// // // //               onChange={(e) => handle(e.target.value, i, 0)}
// // // //             />
// // // //             <textarea
// // // //               name="paragrafe"
// // // //               id=""
// // // //               onChange={(e) => handle(e.target.value, i, 1)}
// // // //             ></textarea>
// // // //             <button onClick={() => more(i, ref)}>more</button>
// // // //             <button onClick={() => delete_section(id, i)}>delete {i}</button>
// // // //           </section>
// // // //         ),
// // // //       },
// // // //     ]);
// // // //     setI((old) => old + 1);
// // // //   };

// // // //   const delete_section = (id, ind) => {
// // // //     console.log("ind: ", ind);
// // // //     setSectiuniData((old) => {
// // // //       //   old.splice(ind, 1);
// // // //       old = old.filter((a, index) => index != ind);
// // // //       // old = old.filter((a) => a !== undefined);
// // // //       return [...old];
// // // //     });
// // // //     setSectiuni((old) => {
// // // //       //   old.splice(ind, 1);

// // // //       old = old.filter((a, index) => a.id != id);
// // // //       //   old = old.filter((a) => a !== undefined);
// // // //       return [...old];
// // // //     });
// // // //   };

// // // //   const see = () => {
// // // //     console.log( sectiuniData);
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <br />
// // // //       <br />
// // // //       <br />
// // // //       <br />
// // // //       <br />
// // // //       <button onClick={see}>see</button>
// // // //       <button onClick={add}>add</button>
// // // //       {sectiuni &&
// // // //         sectiuni.map((sect) => {
// // // //           return sect.html;
// // // //         })}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Admin;

// // // import React, { useState } from "react";

// // // function Admin() {
// // //   const [sect, setSect] = useState([]);
// // //   const [data, setData] = useState({});
// // //   const [data2, setData2] = useState([]);

// // //   const handle = (text, id) => {
// // //     setData((old) => {
// // //       // if (old[id] == undefined) {
// // //       //   old[id] = "";
// // //       //   old[id] = text;
// // //       // } else {
// // //       //   old[id] = text;
// // //       // }
// // //       old[`id${id}`] = "";
// // //       old[`id${id}`] = text;

// // //       return old;
// // //     });
// // //   };

// // //   const add = (id) => {
// // //     setSect((old) => {
// // //       old.push({
// // //         id: id,
// // //         html: (
// // //           <section>
// // //             <span>{id}</span>
// // //             <input type="text" onChange={(e) => handle(e.target.value, id)} />
// // //             <button
// // //               onClick={() => {
// // //                 delete_p(id);
// // //               }}
// // //             >
// // //               delete
// // //             </button>
// // //           </section>
// // //         ),
// // //       });
// // //       return [...old];
// // //     });
// // //   };
// // //   const delete_p = (id) => {
// // //     console.log(id);
// // //     setSect((o) => {
// // //       o = o.filter((it) => it.id !== id);
// // //       return [...o];
// // //     });
// // //     setData((old) => {
// // //       delete old[`id${id}`];
// // //       return old;
// // //     });
// // //   };

// // //   const see = () => {
// // //     console.log(data);
// // //   };

// // //   return (
// // //     <div contentEditable="false">
// // //       <br />
// // //       <br />
// // //       <br />
// // //       <br />
// // //       <br />
// // //       <br />
// // //       <br />
// // //       <br />
// // //       <br />
// // //       <br />
// // //       <br />
// // //       <br />
// // //       <button onClick={() => add(Math.random())}>Add</button>
// // //       <button onClick={see}>See</button>
// // //       {sect &&
// // //         sect.map((s) => {
// // //           return s.html;
// // //         })}
// // //     </div>
// // //   );
// // // }

// // // export default Admin;
// // import React, { useState } from "react";

// // const Admin = () => {
// //   const [sections, setSections] = useState([]);

// //   const addSection = () => {
// //     setSections((prevSections) => [...prevSections, { input: "", textareas: [] }]);
// //   };

// //   const deleteSection = (index) => {
// //     setSections((prevSections) => prevSections.filter((_, i) => i !== index));
// //   };

// //   const updateInput = (index, value) => {
// //     setSections((prevSections) =>
// //       prevSections.map((section, i) =>
// //         i === index ? { ...section, input: value } : section
// //       )
// //     );
// //   };

// //   const addTextarea = (index) => {
// //     setSections((prevSections) =>
// //       prevSections.map((section, i) =>
// //         i === index ? { ...section, textareas: [...section.textareas, ""] } : section
// //       )
// //     );
// //   };

// //   const updateTextarea = (sectionIndex, textareaIndex, value) => {
// //     setSections((prevSections) =>
// //       prevSections.map((section, i) =>
// //         i === sectionIndex
// //           ? {
// //               ...section,
// //               textareas: section.textareas.map((textarea, j) =>
// //                 j === textareaIndex ? value : textarea
// //               ),
// //             }
// //           : section
// //       )
// //     );
// //   };

// //   const handleSave = () => {
// //     const savedData = sections.map((section) => [section.input, ...section.textareas]);
// //     console.log(savedData); // This will print the array in the desired format
// //   };

// //   return (
// //     <div>
// //       <br /><br /><br /><br /><br /><br />
// //       <h1>Titlul postarii</h1>
// //       <input type="text" placeholder="titlu postare" />
// //       <h1>Cover image</h1>
// //       <input type="file" name="" id="" />

// //       <button onClick={addSection}>Add Section</button>
// //       {sections.map((section, index) => (
// //         <div key={index} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
// //           <input
// //             type="text"
// //             value={section.input}
// //             onChange={(e) => updateInput(index, e.target.value)}
// //             placeholder={`subtitlu nr. ${index} `}
// //           />
// //           <button onClick={() => deleteSection(index)}>Delete Section</button>
// //           <button onClick={() => addTextarea(index)}>Add Textarea</button>
// //           {section.textareas.map((textarea, tIndex) => (
// //             <textarea
// //               key={tIndex}
// //               value={textarea}
// //               onChange={(e) => updateTextarea(index, tIndex, e.target.value)}
// //               placeholder={`Textarea ${tIndex + 1}`}
// //             />
// //           ))}
// //         </div>
// //       ))}
// //       <button onClick={handleSave}>Save Data</button>
// //     </div>
// //   );
// // };

// // export default Admin;

// import React, { useState } from "react";
// import { FileUploader } from "react-drag-drop-files";
// import { AXIOS } from "../utils/AxiosConfig";

// const FILE_TYPE = ["JPG", "PNG", "GIF"];

// const Admin = () => {
//   const [sections, setSections] = useState([]);
//   const [title, setTitle] = useState("");
//   const [cover, setCover] = useState(null);

//   const addSection = () => {
//     setSections((prevSections) => [
//       ...prevSections,
//       { input: "", textareas: [], file: null },
//     ]);
//   };

//   const deleteSection = (index) => {
//     setSections((prevSections) => prevSections.filter((_, i) => i !== index));
//   };

//   const updateInput = (index, value) => {
//     setSections((prevSections) =>
//       prevSections.map((section, i) =>
//         i === index ? { ...section, input: value } : section
//       )
//     );
//   };

//   const addTextarea = (index) => {
//     setSections((prevSections) =>
//       prevSections.map((section, i) =>
//         i === index
//           ? { ...section, textareas: [...section.textareas, ""] }
//           : section
//       )
//     );
//   };

//   const updateTextarea = (sectionIndex, textareaIndex, value) => {
//     setSections((prevSections) =>
//       prevSections.map((section, i) =>
//         i === sectionIndex
//           ? {
//               ...section,
//               textareas: section.textareas.map((textarea, j) =>
//                 j === textareaIndex ? value : textarea
//               ),
//             }
//           : section
//       )
//     );
//   };

//   const updateFile = (e, index, file) => {
//     console.log(e);
//     setSections((prevSections) =>
//       prevSections.map((section, i) =>
//         i === index ? { ...section, file } : section
//       )
//     );
//   };

//   const handleSave = async () => {
//     const savedData = sections.map((section) => [
//       section.input,
//       ...section.textareas,
//     ]);

//     const savedfiles = sections.map((section) => {

//       console.log(section.file)
//       return section.file
//     });
//     console.log(savedfiles);
//     await AXIOS.post(
//       "/addBlogPost",
//       {
//         title: title,
//         cover: cover,
//         data: JSON.stringify(savedData),
//         files: savedfiles,
//       },

//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     ).then((res) => {
//       console.log(res);
//     });
//   };

//   return (
//     <div>
//       <br />
//       <br />
//       <br />
//       <br />
//       <h1>Admin Panel</h1>
//       <h2>Titlul postarii</h2>
//       <input
//         type="text"
//         placeholder="titlu postare"
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <h2>Cover image</h2>
//       <FileUploader handleChange={setCover} name="file" types={FILE_TYPE} />
//       {/* <input
//         type="file"
//         name=""
//         id=""
//         onChange={(e) => setCover(e.target.files[0])}
//       /> */}
//       <br />
//       <button onClick={addSection}>Add Section</button>
//       {sections.map((section, index) => (
//         <div
//           key={index}
//           style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
//         >
//           <input
//             type="text"
//             value={section.input}
//             onChange={(e) => updateInput(index, e.target.value)}
//             placeholder="Input"
//           />
//           <button onClick={() => deleteSection(index)}>Delete Section</button>
//           <button onClick={() => addTextarea(index)}>Add Textarea</button>
//           {section.textareas.map((textarea, tIndex) => (
//             <textarea
//               key={tIndex}
//               value={textarea}
//               onChange={(e) => updateTextarea(index, tIndex, e.target.value)}
//               placeholder={`Textarea ${tIndex + 1}`}
//             />
//           ))}
//           <br />

//           <input
//             type="file"
//             onChange={(e) => updateFile(e, index, e.target.files[0])}
//             name="file"
//           />
//         </div>
//       ))}
//       <button onClick={handleSave}>Save Data</button>
//     </div>
//   );
// };

// export default Admin;

import React, { useState } from "react";
import { AXIOS } from "../utils/AxiosConfig";
import "./admin.scss";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState(null);
  const [sections, setSections] = useState([]);

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

    await AXIOS.post("/addBlogPost", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      console.log(res);
    });
    // try {
    //   const response = await AXIOS.post("/addBlogPost", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });
    //   console.log("Response:", response.data);
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    // }
  };
  const [galerie, setGalerie] = useState([]);
  const [category, setCategory] = useState("");

  return (
    // <div>
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <h2>Admin Panel</h2>

    //   <div>
    //     <label>Title: </label>
    //     <input
    //       type="text"
    //       value={title}
    //       onChange={(e) => setTitle(e.target.value)}
    //     />
    //   </div>
    //   <div>
    //     <label>Category: </label>
    //     <select
    //       onChange={(e) => {
    //         setCategory(e.target.value);
    //       }}
    //     >
    //       <option value="">Category</option>
    //       <option value="FIIR">FIIR</option>
    //       <option value="OSFIIR">OSFIIR</option>
    //       <option value="PTC">PTC</option>
    //     </select>
    //   </div>

    //   <div>
    //     <label>Cover: </label>
    //     <input type="file" onChange={handleCoverChange} />
    //   </div>
    //   <div>
    //     <label>Galerie: </label>
    //     <input
    //       type="file"
    //       multiple
    //       onChange={(e) => {
    //         const files = Array.from(e.target.files);
    //         setGalerie((old) => [...files]);
    //       }}
    //     />
    //   </div>
    //   <hr />

    //   {sections.map((section, index) => (
    //     <div
    //       key={index}
    //       style={{
    //         border: "1px solid #ccc",
    //         padding: "10px",
    //         marginBottom: "10px",
    //       }}
    //     >
    //       <div>
    //         <label>Subtitle: </label>
    //         <input
    //           type="text"
    //           value={section.subtitle}
    //           onChange={(e) => handleSubtitleChange(index, e.target.value)}
    //         />
    //       </div>{" "}
    //       {section.texts.map((text, textIndex) => (
    //         <div key={textIndex} style={{ marginBottom: "5px" }}>
    //           <label>Textarea {textIndex + 1}: </label>
    //           <textarea
    //             value={text}
    //             onChange={(e) =>
    //               handleTextareaChange(index, textIndex, e.target.value)
    //             }
    //           />
    //           <button
    //             type="button"
    //             onClick={() => handleDeleteTextarea(index, textIndex)}
    //           >
    //             Delete Textarea
    //           </button>
    //         </div>
    //       ))}
    //       <button type="button" onClick={() => handleAddTextarea(index)}>
    //         Add Textarea
    //       </button>
    //       <div>
    //         <label>Image: </label>
    //         <input
    //           type="file"
    //           onChange={(e) => handleFileChange(index, e.target.files[0])}
    //         />
    //       </div>
    //       <button type="button" onClick={() => handleDeleteSection(index)}>
    //         Delete Section
    //       </button>
    //     </div>
    //   ))}

    //   <button type="button" onClick={handleAddSection}>
    //     Add Section
    //   </button>

    //   <hr />

    //   <button type="button" onClick={handleSubmit}>
    //     Submit
    //   </button>
    // </div>


    <div className="admin-panel-form">
  <br />
  <br />
  <br />
  <br />
  <br />
  <h2>Admin Panel</h2>

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
    <div
      key={index}
      className="section-wrapper"
    >
      <div className="form-group">
        <label>Subtitle: </label>
        <input
          className="form-input"
          type="text"
          value={section.subtitle}
          onChange={(e) => handleSubtitleChange(index, e.target.value)}
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

  );
};

export default Admin;
