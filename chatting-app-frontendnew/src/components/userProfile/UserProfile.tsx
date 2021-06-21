import "./userProfile.css";
import ProfilePic from "../../images/userprofile5.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setupSocketConnection } from "../../services/socket";
import {
  addNewChat,
  getAllConnectedUsers,
  getChats,
} from "../../services/chatServices";
import SideNavBar from './ChatSideNav';

const UserProfile = () => {
  const [user, selectedUser, loggedIn] = useSelector((state: any) => [
    state.users.loggedIn,
    state.users.selectedUser,
    state.users.loggedIn,
  ]);

  const dispatch = useDispatch();

  const toggleInfo = (e: any) => {
    e.target.parentNode.classList.toggle("open");
  };
  const dark = useSelector((state: any) => state.mode.mode);
    console.log(dark);
    let style: any, style1:any;
    if (dark) {
      style = {
        background: '#20272e',
       
      };
      style1={
        color:'#fff',
      }
    }
    
  useEffect(() => {
    let socket = setupSocketConnection();

    socket.emit("setUserActive", loggedIn.username);

    socket.on("doneSettingUpUserActive", (user) => {
      console.log("seting up active state for : ", user);
      getAllConnectedUsers(dispatch);
    });

    socket.on("message-sent", (user: any) => {
      console.log("event message sent : " , user)
      if (user.by === loggedIn.username && user.to === selectedUser.username) {
        getChats(dispatch, user.to);
      }else if(user.to === loggedIn.username && user.by === selectedUser.username)
      {
        getChats(dispatch, user.by);
      }
    });
  }, [loggedIn]);
  console.log(user);
  return (
    <div  className="main__userprofile">
      <div style={style} className="profile__card user__profile__image">
        <div className="profile__image">
          <img src={"http://localhost:4000/" + user.profileImage} />
        </div>
        <h4 style={style1}>
          {user.firstName} {user.lastName}
        </h4>
        <p style={style1}>{user.username}</p>
      </div>
      <div style={style} className="profile__card">
        <div style={style} className="card__header" onClick={toggleInfo}>
          <h5 style={style1}>Bio</h5>
          <i className="fa fa-angle-down"></i>
        </div>
        <div style={style} className="card__content">{user.bioData}</div>
      </div>
      <SideNavBar />
    </div>
  );
};

export default UserProfile;
