import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserLogin(){

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }


    return (
        <div>
            <button onClick = {handleLogin}> Login </button>
        </div>
    );
}

export default UserLogin;