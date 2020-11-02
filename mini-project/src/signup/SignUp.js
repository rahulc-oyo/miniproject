import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';

const SignUp = (props) => {


    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const firstnameHandler = (event) => {
        setFirstname(event.target.value);
    };
    const lastnameHandler = (event) => {
        setLastname(event.target.value);
    };
    const emailHandler = (event) => {
        setEmail(event.target.value);
    };
    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };
    const confirmHandler = (event) => {
        setConfirm(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        if (firstname === '' || lastname === '' || email === '' || password === '' || confirm === '')
            return alert('All the fields are required');
        else if (password !== confirm)
            return alert('Confirm Password did not match. Try again.')
        else {
            axios.post('https://oyo-project.herokuapp.com/user/sign-up', { first_name: firstname, last_name: lastname, email: email, password: password })
                .then(response => {
                    console.log(response);
                    sessionStorage.setItem('user', JSON.stringify(response.data));
                    props.history.push('/dashboard');
                })
                .catch(error => console.log(error.message))
        }
    }

    return (
        <div className="mainDiv">
            <div className='signUpRightDiv'>
                <h1 className='h1'>Enter your details to Sign up</h1>
                <form className='signUp' onSubmit={submitHandler}>
                    <div>
                        <label className='signUpLabel'>First Name:</label>
                        <input
                            className='signUpText'
                            type='text'
                            placeholder='Enter your First Name'
                            name='firstname'
                            value={firstname}
                            onChange={firstnameHandler}
                        />
                    </div>
                    <div>
                        <label className='signUpLabel'>Last Name:</label>
                        <input
                            className='signUpText'
                            type='text'
                            placeholder='Enter your Last Name'
                            name='lastname'
                            value={lastname}
                            onChange={lastnameHandler}
                        />
                    </div>
                    <div>
                        <label className='signUpLabel'>Email:</label>
                        <input
                            className='signUpText'
                            type='email'
                            placeholder='abc@xyz.com'
                            name='email'
                            value={email}
                            onChange={emailHandler}
                        />
                    </div>
                    <div>
                        <label className='signUpLabel'>Password:</label>
                        <input
                            className='signUpText'
                            type='password'
                            placeholder='Enter your Password'
                            name='password'
                            value={password}
                            onChange={passwordHandler}
                        />
                    </div>
                    <div>
                        <label className='signUpLabel'>Confirm Password:</label>
                        <input
                            className='signUpText'
                            type='password'
                            placeholder='Confirm your Password'
                            name='confirm'
                            value={confirm}
                            onChange={confirmHandler}
                        />
                    </div>
                    <div className='btns'>
                        <button type='submit' className='btn'>Sign Up</button>
                    </div>
                </form>
                <div>
                    <small style={{ color: "black" }}>Already have an Account? <a href='/'>Sign in</a></small>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
