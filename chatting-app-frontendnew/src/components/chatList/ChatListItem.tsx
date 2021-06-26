import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../../redux/actions';
import { getChats } from '../../services/chatServices';
import Avatar from './Avatar';

function ChatListItem(props: any) {
  const dispatch = useDispatch();

  const selectChat = (e: any, username: string) => {
    e.preventDefault();
    getChats(dispatch, username)

    dispatch(
      setSelectedUser({
        firstName: props.firstName,
        lastName: props.lastName,
        username: props.username,
        profileImage: props.image,
        active: props.isOnline === 'active' ? true : false,
        lastSeen: props.lastSeen,
      })
    );
  };

  const dark = useSelector((state: any) => state.mode.mode);
  console.log(dark);
  let style: any;
  if (!dark) {
    style = {
      background: '#20272e',
      '&:active': {
        background: '#2b333b',
      },
    };
  }

  return (
    <div style={style}>
      <div
        style={{ animationDelay: `0.${props.animationDelay}s` }}
        onClick={(e: any) => selectChat(e, props.username)}
        className={`chatlist__item ${props.active ? props.active : ''} `}
      >
        <Avatar image={props.image} isOnline={props.isOnline} />

        <div className='userMeta'>
          <p>
            {props.firstName} {props.lastName}
          </p>
          <span className='activeTime'>{props.username}</span>
        </div>
      </div>
    </div>
  );
}

export default ChatListItem;
