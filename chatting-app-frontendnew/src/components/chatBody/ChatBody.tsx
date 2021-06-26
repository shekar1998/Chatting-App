import React, { useEffect, useState } from 'react';
import './chatBody.css';
import ChatList from '../chatList/ChatList';
import ChatContent from '../chatContent/ChatContent';
import UserProfile from '../userProfile/UserProfile';
import { getAllUsers } from '../../services/userServices';
import { getAllConnectedUsers } from '../../services/chatServices';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedInUserDetails } from '../../services/userServices';
import { setDarkMode } from '../../redux/actions';

function ChatBody() {
  const dispatch = useDispatch();
  const [isDarkMode, setIsDarkMode] = useState(true);
  async function DarkReduce() {
    await setIsDarkMode(!isDarkMode);
    dispatch(setDarkMode(isDarkMode))
    }
    const dark = useSelector((state: any) => state.mode.mode);
    console.log(dark);
    let style: any;
    if (!dark) {
      style = {
        background: '#20272e',
      };
    }

  useEffect(() => {
    getAllUsers(dispatch);
    getAllConnectedUsers(dispatch);
    getLoggedInUserDetails(dispatch);
  }, [dispatch]);



  return (
    <div style={style} className='main-chatbody'>

      <ChatList />
      <div className="dark-mode">
        <DarkModeToggle onChange={DarkReduce} checked={isDarkMode} size={50} />
      </div>
      <ChatContent />
      <UserProfile />
    </div>
  );
}

export default ChatBody;
