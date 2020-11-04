import React, { useState } from 'react';
import './FileUpload.css';
import axios from 'axios';
import CancelIcon from '@material-ui/icons/Cancel';

function FileUpload(props) {

    let user = JSON.parse(sessionStorage.getItem('user'));

    const [file, setFile] = useState('null');

    const fileHandler = (event) => {
        setFile(event.target.files[0]);
    }

    // console.log(data);
    // console.log(url);

    const submitHandler = (event) => {
        event.preventDefault();
        const formdata = new FormData();
        formdata.append(props.data, file);
        formdata.append("user_id", user.user_id);
        axios.put(props.url, formdata)
            .then(response => {
                console.log(response);
                sessionStorage.setItem('user', JSON.stringify(response.data));
                window.location.reload(false);
            })
            .catch(error => console.log(error.message))
    }

    return (
        <>
                <button onClick= {props.showUpload}><CancelIcon/></button>
                <form onSubmit={submitHandler}>
                    <input className='selector' type='file' onChange={fileHandler} />
                    <button className='uploadButton' type='submit'>Upload</button>
                </form>
        </>
    )
}

export default FileUpload;
