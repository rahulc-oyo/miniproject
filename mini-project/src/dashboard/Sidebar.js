import React from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css';
import WorkIcon from '@material-ui/icons/Work';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';

function Sidebar(props) {

    return (
        <>
            <ul>
                <li className='work'>
                    <Link to='#'><WorkIcon/><span>Work</span></Link>
                    <ul>
                        <li>
                            <Link to='#' onClick={() => props.contentNameFunction('projectContent')}><KeyboardArrowRightIcon/><span>Project</span></Link>
                        </li>
                        <li>
                            <Link to='#' onClick={() => props.contentNameFunction('departmentContent')}><KeyboardArrowRightIcon/><span>Department</span></Link>
                        </li>
                        <li>
                            <Link to='#' onClick={() => props.contentNameFunction('companyContent')}><KeyboardArrowRightIcon/><span>Company</span></Link>
                        </li>
                    </ul>
                </li>
                <li className='account'>
                    <Link to='#' onClick={() => props.contentNameFunction('accountContent')}><AccountBoxIcon/><span>Account</span></Link>
                </li>
                <li className='admin'>
                    <Link to='#' onClick={() => props.contentNameFunction('adminContent')}><AccountBoxIcon/><span>Admin</span></Link>
                </li>
                <li className='settings'>
                    <Link to='#' onClick={() => props.contentNameFunction('settingsContent')}><SettingsIcon/><span>Settings</span></Link>
                </li>
            </ul>
        </>
    );
}

export default Sidebar;
