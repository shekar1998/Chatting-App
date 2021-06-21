import React, { useEffect } from 'react';
import { Menu, Switch } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import ShowCalendar from './Calendar'
import ShowProfileDetails from './ShowProfileDetails'
// import WeatherTool from '../AppTools/WeatherTool'
import { useDispatch, useSelector } from 'react-redux';

const { SubMenu } = Menu;

const SideNavBar = () => {

  const [theme, setTheme]:any= React.useState('light');
  const UserProfile = () => {
    const [user, selectedUser, loggedIn] = useSelector((state: any) => [
      state.users.loggedIn,
      state.users.selectedUser,
      state.users.loggedIn,
    ]);
}
  const handleClick:any = (e:any) => {
    console.log('click ', e);
  };

  const changeTheme = (value:any )=> {
    setTheme(value ? 'dark' : 'light');
  };
    return (
      <>
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        theme={theme}
      >
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Settings">
          <SubMenu style={{ width: "26px !important" }} key="sub3" title="Add Reminder" >
            <ShowCalendar />
          </SubMenu>
          <SubMenu key="sub3" title="Profile" >
           <ShowProfileDetails />
          </SubMenu>
        </SubMenu>
      </Menu>
      </>
    );
}

export default SideNavBar