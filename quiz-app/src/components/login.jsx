import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';


function UserLogin(){

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <div>
            <Button variant = "outlined" onClick = {handleLogin}> Login </Button>
        </div>
    );
}

export default UserLogin;