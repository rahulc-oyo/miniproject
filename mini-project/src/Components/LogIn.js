import React, { useState } from 'react';
import Greeting from './Greeting.js';

function LogIn() {

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const userIdHandler = (event) => {
        setUserId(event.target.value);
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if (userId === '' || password === '') {
            return alert('Both User Id and Password are required');
        }
        // else if (userId === '') {
        //     return alert('User Id is required');
        // }
        // else if (password === '') {
        //     return alert('Password is required');
        // }
        else {
            // link
            setUserId('');
            setPassword('');
        }
    }

    // const clickHandler = () => {
    //     return 
    // }
    return (
        <>
            <h1 className='h1'>{Greeting()}</h1>
            <form className='logIn' onSubmit={submitHandler}>
                <input className='text' type='text' placeholder='Enter your User ID' onChange={userIdHandler} value={userId}></input>
                <input className='text' type='password' placeholder='Enter your Password' onChange={passwordHandler} value={password}></input>
                <button type='submit' id='logIn' className='btn'>Log In</button>
            </form>
        </>
    );
}

export default LogIn;