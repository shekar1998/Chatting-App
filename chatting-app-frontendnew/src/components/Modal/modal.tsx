import React, { useState } from 'react';
import { Modal } from 'antd';
import { useEffect } from 'react';
import '../chatList/chatList.css';
import ChatListItems from '../chatList/ChatListItem';
import Chip from '@material-ui/core/Chip';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersDetails } from '../../services/userServices';
console.log('EnterINg INto MOdal');

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));
export default function App() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [groupChat, setGroupChat] = useState([{}]);

  useEffect(() => {
    getAllUsersDetails(dispatch);
  }, [dispatch]);

  const allUsersDetails = useSelector((state: any) => {
    console.log(state);

    return state.users.allUsersDetails;
  });
  console.log('Users ', allUsersDetails);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleDelete = (chipToDelete: any) => () => {
    setGroupChat((data: any) => data.filter((data: any) => data.userName !== chipToDelete.userName));
  };

  async function displayChat(id: any, e: any) {
    e.preventDefault();
    await setGroupChat((groupChat: any) => [...groupChat, id]);
    console.log(id);
  }

  return (
    <>
      <Modal title='Basic Modal' visible={isModalVisible} onOk={handleOk}>
        <div className='chatlist__items'>
          <div>
            {groupChat.map((data: any) => {
              return (
                <Chip
                  variant='outlined'
                  icon={<TagFacesIcon />}
                  label={data.firstName}
                  onDelete={data.firstName === 'React' ? undefined : handleDelete(data)}
                  className={classes.chip}
                  avatar={<Avatar src={data.profileImage} />}
                />
              );
            })}
          </div>
          {allUsersDetails ? (
            allUsersDetails.map((item: any, i: any) => {
              return (
                <div className='chatListModal' onClick={(e: any) => displayChat(item, e)}>
                  <ChatListItems
                    firstName={item.firstName}
                    lastName={item.lastName}
                    username={item.username}
                    key={item._id}
                    animationDelay={i + 1}
                    image={item.profileImage}
                  />
                </div>
              );
            })
          ) : (
            <div />
          )}
        </div>
      </Modal>
    </>
  );
}
