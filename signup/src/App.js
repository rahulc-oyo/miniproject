import React, {useState} from 'react';

import './App.css';

const App = () => {


  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const firstnameHandler = (event) =>{
    setFirstname(event.target.value);
  };
  const lastnameHandler = (event) =>{
    setLastname(event.target.value);
  };
  const emailHandler = (event) =>{
    setEmail(event.target.value);
  };
  const passwordHandler = (event) =>{
    setPassword(event.target.value);
  };
  const confirmHandler = (event) =>{
    setConfirm(event.target.value);
  };

  const handleChange = (event) =>{
    event.preventDefault();
    if(firstname==='' || lastname==='' || email==='' || password==='' || confirm==='')
      return alert('All the fields are required');
    if(password!==confirm)
      return alert('Confirm Password did not match. Try again.')
  };

  return (
    <div className="App">

      <div className='form'>
        <h1 style={{fontWeight: 'bolder'}}>Sign up</h1>

        <form>
          <div className='firstname'>
            <label>First Name*</label>
            <input
              type='text'
              placeholder='First Name'
              name='firstname'
              value={firstname}
              onChange={firstnameHandler}
            />
          </div>

          <div className='lastname'>
            <label>Last Name*</label>
            <input
              type='text'
              placeholder='Last Name'
              name='lastname'
              value={lastname}  
              onChange={lastnameHandler}
            />
          </div>

          <div className='email'>
            <label>Email*</label>
            <input
              type='email'
              placeholder='abc@xyz.com' 
              name='email'
              value={email}  
              onChange={emailHandler}
            />
          </div>

          <div className='password'>
            <label>Password*</label>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={passwordHandler}
            />
          </div>

          <div className='confirm'>
            <label>Confirm Password*</label>
            <input
              type='password'
              placeholder='Confirm Password'
              name='confirm'
              value={confirm}
              onChange={confirmHandler}
            />
          </div>

          <div className='signup'>
          <button type='submit' onClick={handleChange}>SIGN UP</button>
          <small style={{alignItems:'center'}} >Already have an Account? Sign in</small>
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;
