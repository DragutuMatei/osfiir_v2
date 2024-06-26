import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Fire from "../../utils/Fire";
import { useAuthState } from "react-firebase-hooks/auth";

const fire = new Fire();
function Login() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(fire.getUser());
  const [main, setUser] = useState(user);

  const [log_email, setLogEmail] = useState("");
  const [log_pass, setLogPass] = useState("");
  const login = async () => {
    await fire.loginUser_for_targ(log_email, log_pass).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    console.log("fire 1: ", fire.getUser1());
    const aa = async () => {
      if (user) {
        await fire.getUserByEmail("/targ_users", user.email).then((res) => {
          console.log(res);
          setUser(res);
          navigate(`/targ/profile/${res.email}`);
        });
      }
    };
    aa();
  }, [user]);
  return (
    <>
      <div className="login">
        <h1>OSFIIR</h1>
        <img src={require("../../assets/img/logo.png")} alt="" />
        <div className="form">
          <div className="input_field">
            <h3>Email</h3>
            <input type="email" onChange={(e) => setLogEmail(e.target.value)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
