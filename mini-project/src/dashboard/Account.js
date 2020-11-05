import React, { useState } from 'react';
import './Account.css';
import axios from 'axios';
import FileUpload from './FileUpload.js';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';

function Account() {

    let user = JSON.parse(sessionStorage.getItem('user'));

    const [gender, setGender] = useState(user.gender);
    const [aadhaarNumber, setAadhaarNumber] = useState(user.aadhar_number);
    const [panNumber, setPanNumber] = useState(user.pan_number);
    const [mobileNumber, setMobileNumber] = useState(user.phone);
    const [address, setAddress] = useState(user.address);
    const [bankAccountNumber, setBankAccountNumber] = useState(user.bank_account_number);
    const [bankName, setBankName] = useState(user.bank_name);
    const [bankIfscCode, setBankIfscCode] = useState(user.bank_ifsc_code);

    const genderHandler = (event) => {
        setGender(event.target.value);
    };
    const aadhaarNumberHandler = (event) => {
        setAadhaarNumber(event.target.value);
    };
    const panNumberHandler = (event) => {
        setPanNumber(event.target.value)
    };
    const mobileNumberHandler = (event) => {
        setMobileNumber(event.target.value);
    };
    const addressHandler = (event) => {
        setAddress(event.target.value);
    };
    const bankAccountNumberHandler = (event) => {
        setBankAccountNumber(event.target.value);
    };
    const bankNameHandler = (event) => {
        setBankName(event.target.value);
    };
    const bankIfscCodeHandler = (event) => {
        setBankIfscCode(event.target.value);
    };
    const submitHandler1 = (event) => {
        event.preventDefault();
        if (aadhaarNumber === user.aadhar_number && panNumber === user.pan_number)
            return alert('Nothing is updated');
        // else if (aadhaarNumber1 === 'null' || panNumber1 === 'null')
        //     return alert('Please fill all details');
        else {
            axios.put('https://oyo-project.herokuapp.com/user/update-user', { user_id: user.user_id, aadhar_number: aadhaarNumber, pan_number: panNumber })
                .then(response => {
                    console.log(response);
                    sessionStorage.setItem('user', JSON.stringify(response.data));
                    window.location.reload(false);
                })
                .catch(error => console.log(error.message))
        }
    }
    const submitHandler2 = (event) => {
        event.preventDefault();
        if (mobileNumber === user.phone && address === user.address)
            return alert('Nothing is updated');
        else {
            axios.put('https://oyo-project.herokuapp.com/user/update-user', { user_id: user.user_id, phone: mobileNumber, address: address })
                .then(response => {
                    console.log(response);
                    sessionStorage.setItem('user', JSON.stringify(response.data));
                    window.location.reload(false);
                })
                .catch(error => console.log(error.message))
        }
    }
    const submitHandler3 = (event) => {
        event.preventDefault();
        if (bankAccountNumber === user.bank_account_number && bankName === user.bank_name && bankIfscCode === user.bank_ifsc_code)
            return alert('Nothing is updated');
        else {
            axios.put('https://oyo-project.herokuapp.com/user/update-user', { user_id: user.user_id, bank_account_number: bankAccountNumber, bank_name: bankName, bank_ifsc_code: bankIfscCode })
                .then(response => {
                    console.log(response);
                    sessionStorage.setItem('user', JSON.stringify(response.data));
                    window.location.reload(false);
                })
                .catch(error => console.log(error.message))
        }
    }

    const [imageUpload, setImageUpload] = useState(false);

    const showImageUpload = () => setImageUpload(!imageUpload);

    return (
        <>
            <div className='accountPage'> 
                <div className='userInformation'>
                    <form className='personalInformation' onSubmit={submitHandler1}>
                        <h3 className='h3'>Personal Information</h3>
                        <div>
                            <label className='label'>Gender</label>
                            <select value={gender} onChange={genderHandler} className='text'>
                                <option>Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div>
                            <label className='label'>Aadhaar Number</label>
                            <input
                                className='text'
                                type='text'
                                placeholder='Aadhaar Number'
                                value={aadhaarNumber}
                                onChange={aadhaarNumberHandler}
                            />
                        </div>
                        <div>
                            <label className='label'>PAN Number</label>
                            <input
                                className='text'
                                type='text'
                                placeholder='PAN Number'
                                value={panNumber}
                                onChange={panNumberHandler}
                            />
                        </div>
                        <div className='btns'>
                            <button type='submit' className='btn'>Save</button>
                        </div>
                    </form>
                    <form className='contactInformation' onSubmit={submitHandler2}>
                        <h3 className='h3'>Contact Information</h3>
                        <div>
                            <label className='label'>Mobile Number</label>
                            <input
                                className='text'
                                type='text'
                                placeholder='Mobile Number'
                                value={mobileNumber}
                                onChange={mobileNumberHandler}
                            />
                        </div>
                        <div>
                            <label className='label'>Address</label>
                            <input
                                className='text'
                                type='text'
                                placeholder='Address'
                                value={address}
                                onChange={addressHandler}
                            />
                        </div>
                        <div className='btns'>
                            <button type='submit' className='btn'>Save</button>
                        </div>
                    </form>
                    <form className='bankAccountInformation' onSubmit={submitHandler3}>
                        <h3 className='h3'>Bank Account Information</h3>
                        <div>
                            <label className='label'>Account Number</label>
                            <input
                                className='text'
                                type='text'
                                placeholder='Account Number'
                                value={bankAccountNumber}
                                onChange={bankAccountNumberHandler}
                            />
                        </div>
                        <div>
                            <label className='label'>Name of the Bank</label>
                            <input
                                className='text'
                                type='text'
                                placeholder='Name of the Bank'
                                value={bankName}
                                onChange={bankNameHandler}
                            />
                        </div>
                        <div>
                            <label className='label'>IFSC Code</label>
                            <input
                                className='text'
                                type='text'
                                placeholder='IFSC Code'
                                value={bankIfscCode}
                                onChange={bankIfscCodeHandler}
                            />
                        </div>
                        <div className='btns'>
                            <button type='submit' className='btn'>Save</button>
                        </div>
                    </form>
                </div>
                <div className='userProfile'>
                    <img src={`data:image/jpeg;base64, ${user.image}`} alt='Profile Picture' className='userImage' />
                    <button onClick={showImageUpload}><AddAPhotoOutlinedIcon/></button>
                    <div className={imageUpload ? 'userImageUpload active' : 'userImageUpload'}>
                        <FileUpload data= "image" url="https://oyo-project.herokuapp.com/user/upload" showUpload= {showImageUpload}/>
                    </div>
                    <div className='userName'>
                        <div className='userFirstName'>
                            {user.first_name}
                        </div>
                        <div className='userLastName'>
                            {user.last_name}
                        </div>
                    </div>
                    <div className='userEmail'>
                        {user.email}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account;
