import React from 'react';
import LogIn from './LogIn.js';

function AdminLogIn(props) {

    return (
        <>
            <div className='mainDiv'>
                {/* <div className='leftDiv'>
            <img className='img' src={shakeHands} alt='loading error'></img>
        </div> */}
                <div className='rightDiv'><LogIn />
                    <div className='btns'>
                        <button className='btn' onClick={() =>{props.history.push('/')}}>Login as User</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminLogIn;