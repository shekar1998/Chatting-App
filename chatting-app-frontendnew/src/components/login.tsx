import { TextField } from "@material-ui/core";
import { useState } from "react";
import { selectForm } from "../redux/actions";
import { useDispatch } from "react-redux";
import {
 
  useHistory,

} from "react-router-dom";
// import OTPInput, { ResendOTP } from ""
import "../css/login.css";
import "../css/mainPage.css";
import { login } from "../services/userServices";
import React from "react";
import { Spin } from "antd";

const LoginForm = (params:any) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [validator, setValidator] = useState(false);

  const [loader, setLoader] = useState(false);

  const handleLogin = (e: any) => {
    e.preventDefault();
    setLoader(true);
    const data = {
      userId,
      password,
    };
    
    login(data).then((res: any) => {
      // console.log(res.data);

      if (res.data.status) {
        params.alert(res.data.message, "success")
        localStorage.setItem("token", res.data.token);
        history.push("/otp");
      }
    }).catch(err=>{params.alert("Enter correct information", "error");setLoader(false)})
  };

  const dispatch = useDispatch();

  return (
    <div className="login-form main-form">
      <div className="form">
        <h3 className="form-heading">Login</h3>
        <form>
          <div className="form-outline mb-4">
            <TextField
              className="textfield"
              label="Email, phone, or username"
              value={userId}
              error={validator && userId === ""}
              helperText={validator && userId === "" ? "Required" : ""}
              onChange={(e: any) => {
                setUserId(e.target.value);
              }}
            />
          </div>
          <div className="form-outline mb-4">
            <TextField
              className="textfield"
              type="password"
              label="Password"
              value={password}
              helperText={validator && password === "" ? "Required" : ""}
              error={validator && password === ""}
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="form2Example3"
                />
                <label className="form-check-label" htmlFor="form2Example3">
                  Remember me
                </label>
              </div>
            </div>

            <div className="col">
              <a className="link" href="#!">
                Forgot password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block mb-4 submit-btn"
            onClick={(e) => handleLogin(e)}
          >
            {!loader ? (
              "Log In"
            ) : (
              <Spin />
            )}
          </button>{" "}
          <div className="text-center">
            <p>
              Not a member?{" "}
              <a
                className="link"
                onClick={() => dispatch(selectForm("SIGN_UP"))}
              >
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
