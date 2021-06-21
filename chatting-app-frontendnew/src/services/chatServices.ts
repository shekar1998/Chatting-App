import axios from "axios";
import { setAllChats, setChatsToDisplay } from "../redux/actions";

export const getChats = async (dispatch: any, user: any) => {
  // console.log(`http://localhost:4000/api/chats/${user}`);
  let res = await axios.get(`http://localhost:4000/api/chats/${user}`, {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  console.log(res.data)
  dispatch(setChatsToDisplay(res.data));
};

export const sendMessage = async (dispatch: any, users: any, msg: string) => {
  await axios.post(
    "http://localhost:4000/api/chats",    
    
    {
      users,
      msg,
    },
    {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
  );
  // getChats(dispatch, users);
};

export const addNewChat = async (dispatch: any, userId: any) => {
  await axios.post(
    "http://localhost:4000/api/chats/new",
    { userId },
    {
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    }
  );

  getAllConnectedUsers(dispatch);
};

export const getAllConnectedUsers = async (dispatch: any) => {
  // console.log("getting all chats")
  let res = await axios.get(`http://localhost:4000/api/chats`, {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  // console.log(res.data);
  dispatch(setAllChats(res.data));
};
 