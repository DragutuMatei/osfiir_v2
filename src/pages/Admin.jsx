import React, { useEffect, useRef, useState } from "react";

function Admin() {
  const [img1, setImg1] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle1, setSubtitle1] = useState("");
  const [p1, setP1] = useState("");
  const [img2, setimg2] = useState("");
  const [sectiuni, setSectiuni] = useState([]);
  const [sectiuniData, setSectiuniData] = useState([[]]);
  const [i, setI] = useState(0);
  const [k, setK] = useState(0);

  const handle = (txt, index, j, k = null) => {
    console.log("k: ", k);
    setSectiuniData((old) => {
      if (old[index] && old[index].length > 0) old[index][j] = txt;
      //   else if (k != null) {
      //     old[index] = [];
      //     old[index][0] = [];
      //     old[index][j][k] = txt;
      //   }
      else {
        old[index] = [];
        old[index][j] = txt;
      }
      console.log(old);
      return [...old];
    });
  };

  const more = (index, r) => {
    console.log(index);

    setSectiuni((old) => {
      const node = document.createElement("textarea");
      node.setAttribute("onChange", (e) => handle(e.target.value, index, 1, k));

      ref.current.appendChild(node);

      return [...old];
    });
    setK((old) => old + 1);
  };

  const ref = useRef();
  const add = (id) => {
    setSectiuni((old) => [
      ...old,
      {
        id: id,
        html: (
          <section key={Math.random() * 800088} ref={ref}>
            <span>{i}</span>
            <input
              type="text"
              name={`subtitle${i}`}
              onChange={(e) => handle(e.target.value, i, 0)}
            />
            <textarea
              name="paragrafe"
              id=""
              onChange={(e) => handle(e.target.value, i, 1)}
            ></textarea>
            <button onClick={() => more(i, ref)}>more</button>
            <button onClick={() => delete_section(id, i)}>delete {i}</button>
          </section>
        ),
      },
    ]);
    setI((old) => old + 1);
  };

  const delete_section = (id, ind) => {
    console.log("ind: ", ind);
    setSectiuniData((old) => {
      //   old.splice(ind, 1);
      old = old.filter((a, index) => index != ind);
      // old = old.filter((a) => a !== undefined);
      return [...old];
    });
    setSectiuni((old) => {
      //   old.splice(ind, 1);

      old = old.filter((a, index) => a.id != id);
      //   old = old.filter((a) => a !== undefined);
      return [...old];
    });
  };

  const see = () => {
    console.log(sectiuni, sectiuniData);
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={see}>see</button>
      <button onClick={add}>add</button>
      {sectiuni &&
        sectiuni.map((sect) => {
          return sect.html;
        })}
    </div>
  );
}

export default Admin;

// import React, { useState } from "react";

// function Admin() {
//   const [sect, setSect] = useState([]);
//   const [data, setData] = useState([]);
//   const [data2, setData2] = useState([]);

//   const add = (id) => {
//     setSect((old) => {
//       old.push({
//         id: id,
//         html: (
//           <section>
//             <span>{id}</span>
//             <input type="text" />
//             <button
//               onClick={() => {
//                 delete_p(id);
//               }}
//             >
//               delete
//             </button>
//           </section>
//         ),
//       });
//       return [...old];
//     });
//   };
//   const delete_p = (id) => {
//     console.log(id);
//     setSect((o) => {
//       o = o.filter((it) => it.id !== id);
//       return [...o];
//     });
//   };

//   const see = () => {};

//   return (
//     <div>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <button onClick={() => add(Math.random())}>Add</button>
//       {sect &&
//         sect.map((s) => {
//           return s.html;
//         })}
//     </div>
//   );
// }

// export default Admin;
