import React from 'react';

import { useNavigate } from 'react-router-dom';

function SignUp(){

    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/signup');
    }


    return (
        <div>
            <button onClick = {handleSignUp}> Sign Up </button>
        </div>
    );
}

export default SignUp;