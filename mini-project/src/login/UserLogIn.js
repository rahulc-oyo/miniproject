import React, {useState} from 'react';
import './LogIn.css';
import Greeting from './Greeting.js';
import axios from 'axios';

function UserLogIn(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if (email === '' || password === '') {
            return alert('Both Email and Password are required');
        }
        else {
            axios.post('https://oyo-project.herokuapp.com/user/login', { email: email, password: password })
                .then(response => {
                    console.log(response);
                    sessionStorage.setItem('user', JSON.stringify(response.data));
                    props.history.push('/dashboard');
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <>
            <div className='mainDiv'>
                {/* <div className='leftDiv'>
            <img className='img' src={shakeHands} alt='loading error'></img>
        </div> */}
                <div className='logInRightDiv'>
                    <h1 className='h1'>{Greeting()}</h1>
                    <form className='logIn' onSubmit={submitHandler}>
                        <input className='logInText' type='email' placeholder='Enter your Email Id' onChange={emailHandler} value={email}></input>
                        <input className='logInText' type='password' placeholder='Enter your Password' onChange={passwordHandler} value={password}></input>
                        <button type='submit' className='btn'>Log In</button>
                    </form>
                    <div className='btns'>
                        <button className='btn' onClick={() => { props.history.push('/adminlogin') }}>Login as Admin</button>
                        <button className='btn' onClick={() => { props.history.push('/signup') }}>New user? Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserLogIn;