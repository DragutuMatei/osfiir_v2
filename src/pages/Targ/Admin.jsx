// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Fire from "../../utils/Fire";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { Html5QrcodeScanner } from "html5-qrcode";
// import "./admin.scss";

// const fire = new Fire();
// function Admin() {
//   const navigate = useNavigate();
//   const [user, loading, error] = useAuthState(fire.getUser());
//   const [email, setEmail] = useState("");
//   const [company, setCompany] = useState("");
//   const [main, setUser] = useState(user);
//   const submit = async () => {
//     await fire.addData("/companies", { email, company }).then((res) => {
//       console.log(res);
//     });
//   };
//   // const [reg_email, setRegEmail] = useState("");
//   // const [reg_pass, setRegPass] = useState("");

//   // const register = async () => {
//   //   await fire.registerUser(reg_email, reg_pass).then((res) => {
//   //     console.log(res);
//   //   });
//   // };

//   const [log_email, setLogEmail] = useState("");
//   const [log_pass, setLogPass] = useState("");
//   const login = async () => {
//     await fire.loginUser_for_targ(log_email, log_pass).then((res) => {
//       console.log(res);
//       // setUser();
//     });
//   };

//   useEffect(() => {
//     console.log("fire 1: ", fire.getUser1());
//     const aa = async () => {
//       if (user) {
//         await fire.getUserByEmail("/targ_users", user.email).then((res) => {
//           console.log(res);
//           setUser(res);
//           navigate(`/targ/profile/${res.email}`);
//         });
//       }
//     };
//     aa();
//   }, [user]);

//   //=======================SCANNER==========================================

//   // const [scanResult, setScanResult] = useState("");

//   // const handleScan = (data) => {
//   //   alert(data);
//   //   if (data) {
//   //     setScanResult(data);
//   //     console.log("Scanned link:", data);
//   //   }
//   // };

//   // const handleError = (err) => {
//   //   console.error(err);
//   //   alert(err)
//   // };
//   useEffect(() => {
//     const scanner = new Html5QrcodeScanner("reader", {
//       qrbox: {
//         height: 250,
//         width: 250,
//       },
//       disableFlip: true,
//       rememberLastUsedCamera: true,
      
//       fps: 10,
//     });
//     const suc = (rez) => {
//       // scanner.clear();
//       alert(rez);
//     };
//     const er = (err) => {
//       // alert(err);
//     };
//     scanner.render(suc, er);
//   }, []);

//   return (
//     <>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <h2>{user && user.email}</h2>
//       <br />
//       <hr />
//       <h2>{main && main.email}</h2>
//       <br />
//       <h2>{main && main.rol}</h2>
//       <br />
//       <br />
//       <div className="admin">
//         <h2>Add email for company</h2>
//         <h3>email</h3>
//         <input
//           type="email"
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         />
//         <h3>Company</h3>
//         <input
//           type="text"
//           onChange={(e) => {
//             setCompany(e.target.value);
//           }}
//         />
//         <button onClick={submit}>Submit</button>
//       </div>
//       <br />
//       <br />
//       <button
//         onClick={async () => {
//           await fire.logout();
//         }}
//       >
//         logout
//       </button>
//       <br />
//       {/* <br />
//       <br />
//       <br />
//       <br /> */}
//       {/* <h1>Register</h1>
//       <input type="text" onChange={(e) => setRegEmail(e.target.value)} />
//       <input type="password" onChange={(e) => setRegPass(e.target.value)} />
//       <button onClick={register}>register</button> */}
//       <br />
//       <br />
//       <br />
//       <br />
//       <h1>Login</h1>
//       <input type="text" onChange={(e) => setLogEmail(e.target.value)} />
//       <input type="password" onChange={(e) => setLogPass(e.target.value)} />
//       <button onClick={login}>Login</button>
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

//       {user && user.rol}

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
//       <br />
//       <br />
//       <br />
//       <div id="reader"></div>
//       {/* 
//       <QrReader
//         constraints={{
//           facingMode: "environment",
//         }}
//         delay={300}
//         onError={handleError}
//         onScan={handleScan}
//         style={{ width: "100%" }}
//       />
//       <p>Scanned Link: {scanResult}</p> */}
//     </>
//   );
// }

// export default Admin;
