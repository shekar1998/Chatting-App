import { useState } from 'react';
import './chatContent.css';
import Avatar from '../chatList/Avatar';
import ChatItem from '../chatContent/ChatItem';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../services/chatServices';
// import ReactEmojiPicker from '@bit/personal-dev.emoji-picker.react-emoji-picker';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import Welcome from './online-world-animate.svg';

function ChatContent(props: any) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [emoji, setEmoji] = useState(false);
  const dark = useSelector((state: any) => state.mode.mode);
  console.log(dark);
  let style: any,style1:any;
  if (dark) {
    style = {
      background: '#2b333b',
    };
    style1 ={
      background: '#20272e',
    }
  }
  const [selectedUser, loggedIn] = useSelector((store: any) => [store.users.selectedUser, store.users.loggedIn]);

  const chats = useSelector((state: any) => state.chat.chats);

  console.log(selectedUser);

  const handleSendMessage = (e: any) => {
    sendMessage(dispatch, selectedUser.username, message);
    setMessage('')
  };

  const selectEmoji = (e: any) => {
    console.log(e.native);
    setMessage(message + e.native);
  };

  return (
    <div style={style} className='main__chatcontent'>
      {Object.keys(selectedUser).length > 0 ? (
        <div>
          <div  className='content__header'>
            <div className='blocks'>
              <div className='current-chatting-user '>
                <Avatar isOnline={selectedUser.active ? 'none' : 'none'} image={selectedUser.profileImage} />
                <div className='userMeta'>
                  <p>
                    {selectedUser.firstName} {selectedUser.lastName}
                  </p>
                  <span className='activeTime'>{selectedUser.username}</span>
                </div>
              </div>
            </div>

            <div  className='blocks'>
              <div className='settings'>
                <span className='last-seen'>{selectedUser.lastSeen}</span>
                {/* <button className="btn-nobg">
                  <i className="fa fa-cog"></i>
                </button> */}
              </div>
            </div>
          </div>
          <div className='content__body'>
            <div className='chat__items'>
              {chats.map((item: any, index: number) => (
                <ChatItem
                  animationDelay={index + 2}
                  key={index}
                  user={item.sentBy !== loggedIn.username ? 'other' : 'me'}
                  msg={item.content}
                  image={item.sentBy !== loggedIn.username ? selectedUser.profileImage : loggedIn.profileImage}
                  time={item.time}
                  // active = {}
                />
              ))}
              {/* <div ref={messagesEndRef} /> */}
            </div>
          </div>
          {emoji ? (
            <div className='emojie-change'>
              <Picker onSelect={(e: any) => selectEmoji(e)} />
            </div>
          ) : (
            <div />
          )}
          <div className='content__footer'>
            <div style={style1} className='sendNewMessage'>
              <button className='addFiles'>
                <i className='fa fa-plus' onClick={() => setEmoji(!emoji)}></i>
              </button>
              <input
                type='text'
                placeholder='Type a message here'
                onChange={(e: any) => setMessage(e.target.value)}
                value={message}
              />
              <button className='btnSendMsg' id='sendMsgBtn' onClick={handleSendMessage}>
                <i className='fa fa-paper-plane'></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='welcome-message'>
          <div className='main-div'>
            <h1 className='main-title-heading'>Chat Hub</h1>
            <h5 className='main-title-heading-hub'>Connecting dil k tar...</h5>
          </div>
          <img className='welcome-svg' src={Welcome} alt='' />
        </div>
      )}
    </div>
  );
}

export default ChatContent;
