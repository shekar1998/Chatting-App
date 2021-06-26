import React, {  useState } from 'react';
import './chatList.css';
import { Button } from 'antd';
import ChatListItems from '../chatList/ChatListItem';
import { addNewChat } from '../../services/chatServices';
import { useDispatch, useSelector } from 'react-redux';
import GroupChatModal from '../Modal/modal';

import { AutoComplete } from 'antd';

function ChatList() {
  const [Modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const allUsers = useSelector((state: any) => state.users.allUsers);
  const allChats = useSelector((state: any) => state.chat.allChats);
  console.log(allUsers, allChats);

  const startNewChat = (userId: any) => {
    addNewChat(dispatch, userId);
  };

  function groupChat(e: any) {
    setModal(() => !Modal);
  }

  const dark = useSelector((state: any) => state.mode.mode);
    console.log(dark);
    let style: any;
    if (!dark) {
      style = {
        background: "#20272e !important",
        "&:active": {
          background: "#2b333b !important"
        },
      };
    }
    

  return (
    <div style={style}>
      {Modal && <GroupChatModal />}
      <div className='main__chatlist'>
        <Button onClick={(e) => groupChat(e)} type='primary'>
         Group Chat
        </Button>
        <div className='chatlist__heading'>
          <h2>Chats</h2>
          <button className='btn-nobg'>
            <i className='fa fa-ellipsis-h'></i>
          </button>
        </div>
        <div  className='autocomplete'>
          <AutoComplete
            style={{ width: 200, margin: '-25% 1% 0% 10%', padding: '0px -24px' }}
            options={allUsers.map((user: any) => ({ value: user.username }))}
            placeholder='search for users'
            filterOption={(inputValue, option) => option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
            allowClear={true}
            notFoundContent='No user Present'
            onSelect={startNewChat}
            // onChange={(e: any) => console.log(e.target.value)}
          />
        </div>

        {/* <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div> */}
        <div  className='chatlist__items'>
          {allChats ? (
            allChats.map((item: any, index: number) => {
              // console.log(item.profileImage);
              return (
                <ChatListItems
                  firstName={item.firstName}
                  lastName={item.lastName}
                  username={item.username}
                  key={item.username}
                  animationDelay={index + 1}
                  active={item.active ? 'active' : ''}
                  isOnline={item.active ? 'active' : ''}
                  image={item.profileImage}
                  lastSeen={item.lastSeen}
                />
              );
            })
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatList;
