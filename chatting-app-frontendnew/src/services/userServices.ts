import axios from "axios";
import { UserLogin } from "../interfaces/userInterface";
import {
  selectForm,
  setAllChats,
  setAllUsers,
  setLoggedUser,
  setAllUsersDetails
} from "../redux/actions";

export const signUp = async (dispatch: any, user: any) => {
  // for(var i in user.entre)
  try {
  await axios.post("http://localhost:4000/api/user/signup", user);
  } catch (err) {
    console.log(err);
  }

  dispatch(selectForm("LOGIN_FORM"));
};

export const login = async (user: UserLogin) => {
  let res = await axios.post("http://localhost:4000/api/user/login", user);

  return res;
};

export const checkOtp = async (dispatch: any, otp: any) => {
  let res = await axios.post(
    "http://localhost:4000/api/user/verify/otp",
    { otp },
    {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
  );
  return res;
};

export const getAllUsers = async (dispatch: any) => {
  let res = await axios.get("http://localhost:4000/api/user");
  dispatch(setAllUsers(res.data));
};

export const getAllUsersDetails = async (dispatch: any) => {
  let res = await axios.get("http://localhost:4000/api/user/all");
  console.log('User Services get all users ', res);
  dispatch(setAllUsersDetails(res.data));
};

export const getUsersByUserName = async (dispatch: any, userName: string) => {
  let res = await axios.get(`http://localhost:4000/api/user/${userName}`);
  dispatch(setAllChats(res.data));
};

export const getLoggedInUserDetails = async (dispatch: any) => {
  let res = await axios.get("http://localhost:4000/api/user/token", {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  // console.log(res)
  dispatch(setLoggedUser(res.data));
};
