import React from 'react';

function Error(props) {
    return (
        <>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <h1 style={{ color: 'black' }}> 404 </h1>
                <h3 style={{ color: 'black' }}> Error! </h3>
                <h5 style={{ color: 'black' }}> This page doesnt exist. </h5>
                <button className='btn' onClick={() =>{props.history.goBack()}}>Go Back</button>
            </div>
        </>
    );
}

export default Error;