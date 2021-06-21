import { useSelector } from "react-redux";
import "../css/mainPage.css";
import LoginForm from "./login";
import SignUpForm from "./signup";
import { message } from "antd";

const MainPage = () => {

  const displayForm = useSelector((state: any) => {
    return state.form.formDisplay;
  });

  const alert = (msg: string , type:string) => {
    type=== "success" ? message.success(msg, 3) : message.error(msg, 3);
  };


  return (
    <div className="main-div">
      <div className="main-page">
        {/* <div className="main-form"> */}
        {displayForm === "LOGIN_FORM" ? <LoginForm alert={alert}/> : <SignUpForm alert={alert}/>}
        {/* </div> */}
        <h1 className="main-title-heading">
          Chat <div className="main-title-heading-hub"> Hub </div>
        </h1>
        <h5>Connecting dil k taar...</h5>
        <img
          className="image-div"
          src="https://applian.com/img/login.svg"
          alt="some img"
        ></img>
        {/* <h1>discuter</h1>
      <br />
      <h2>It helps you connect and share with the people in your life.</h2> */}
      </div>
    </div>
  );
};

export default MainPage;
