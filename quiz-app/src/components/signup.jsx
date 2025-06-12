import React from 'react';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

function SignUp(){

    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/signup');
    }


    return (
        <div>
            <Button variant = "outlined" onClick = {handleSignUp}> Sign Up </Button>
        </div>
    );
}

export default SignUp;