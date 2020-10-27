import React from 'react';
import './LogIn.css';
import LogIn from './LogIn.js';
// import {Redirect} from 'react-router-dom';
// import AdminLogIn from './AdminLogIn.js';

function UserLogIn(props) {

    return (
        <>
            <div className='mainDiv'>
                {/* <div className='leftDiv'>
            <img className='img' src={shakeHands} alt='loading error'></img>
        </div> */}
                <div className='logInRightDiv'>
                    <LogIn />
                    <div className='btns'>
                        <button className='btn' onClick={() =>{props.history.push('/adminlogin')}}>Login as Admin</button>
                        <button className='btn' onClick={() =>{props.history.push('/signup')}}>New user? Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserLogIn;