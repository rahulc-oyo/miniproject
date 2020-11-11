import React, { useState } from 'react';
import './Navbar.css';
import Sidebar from './Sidebar.js';
import Project from './Project.js';
import Department from './Department.js';
import Company from './Company.js';
import Account from './Account.js';
import Settings from './Settings.js';
import Admin from './Admin.js';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';

function Navbar(props) {

  const [navMenu, SetNavMenu] = useState(false);

  const showSidebar = () => SetNavMenu(!navMenu);

  const [contentName, SetContentName] = useState('');

  const contentNameFunction = (contentNameFromSidebar) => {
    SetContentName(contentNameFromSidebar);
  }

  const logoutHandler = () =>{
    sessionStorage.removeItem('user');
    props.history.push('/');
  }
  const contentHandler = (contentName) => {
    switch (contentName) {
      case 'projectContent':
        return <Project />;
      case 'departmentContent':
        return <Department />;
      case 'companyContent':
        return <Company />;
      case 'accountContent':
        return <Account />;
      case 'settingsContent':
        return <Settings />;
      case 'adminContent':
        return <Admin />;
      default:
        return <Account />;
    }
  }
  return (
    <>
      <div className='navbar'>
        <div className='menu'>
          <Link to='#'><MenuIcon onClick={showSidebar} /></Link>
        </div>
        <div className='pagename'>
          <h2>Dashboard</h2>
        </div>
        <div className='notifications'> 
        <Link to='#'><NotificationsIcon/></Link>
        </div>
        <div className='profile'>
        <Link to='#' onClick={logoutHandler}><ExitToAppIcon/></Link>
        </div>
      </div>
      <div className='sidebarAndContent'>
        <div className={navMenu ? 'sidebar active' : 'sidebar'}>
          <Sidebar contentNameFunction={contentNameFunction} showSidebar ={showSidebar}/>
        </div>
        <div className='content'>
          {contentHandler(contentName)}
        </div>
      </div>
    </>
  )
}

export default Navbar;
