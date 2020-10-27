import React, { useState } from 'react';
import './LogIn.css';
import Greeting from './Greeting.js';

function LogIn(props) {

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
        else {
            return props.history.push('/dashboard');
        }
    }

    return (
        <>
            <h1 className='h1'>{Greeting()}</h1>
            <form className='logIn' onSubmit={submitHandler}>
                <input className='logInText' type='text' placeholder='Enter your User ID' onChange={userIdHandler} value={userId}></input>
                <input className='logInText' type='password' placeholder='Enter your Password' onChange={passwordHandler} value={password}></input>
                <button type='submit' className='btn'>Log In</button>
            </form>
        </>
    );
}

export default LogIn;