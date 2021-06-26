import React, { useEffect } from 'react';
import { Menu, Switch } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import ShowCalendar from './Calendar';
import ShowProfileDetails from './ShowProfileDetails';
import { useDispatch, useSelector } from 'react-redux';
import './userProfile.css';

const { SubMenu } = Menu;

const SideNavBar = () => {
  const [theme, setTheme]: any = React.useState('dark');
  
  const UserProfile = () => {
    const [user, selectedUser, loggedIn] = useSelector((state: any) => [
      state.users.loggedIn,
      state.users.selectedUser,
      state.users.loggedIn,
    ]);
  };
  const handleClick: any = (e: any) => {
    console.log('click ', e);
  };

  const changeTheme = (value: any) => {
    setTheme(value ? 'dark' : 'light');
  };

  const dark:any = useSelector((state: any) => state.mode.mode);  
  let style: any, style1: any;
  if (!dark) {
    style = {
      background: '#20272e',
    };
    style1 = {
      color: '#fff',
    };
  }

  return (
   <div style={style}>

     <Menu
       onClick={handleClick}
       style={{ width: 256 }}
       defaultSelectedKeys={['1']}
       defaultOpenKeys={['sub1']}
       theme={theme}
     >
      
           <ShowCalendar />
      
     </Menu>

   </div>
  );
};

export default SideNavBar;
