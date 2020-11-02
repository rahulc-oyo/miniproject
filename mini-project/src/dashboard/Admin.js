import React from 'react';
import axios from 'axios';

function Admin() {

    axios.get('https://oyo-project.herokuapp.com/user/list')
            .then(response =>{ console.log(response)})
    return (
        <>
            <h3>List of All Users</h3>
            
        </>
    )
}

export default Admin;
