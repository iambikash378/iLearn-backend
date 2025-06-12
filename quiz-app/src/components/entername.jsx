import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';


function EnterName({score, setHasEnteredLeaderboard}){

    const [name, setName]= useState('');

    const addToLeaderboard = async (e) =>{
        e.preventDefault();
        console.log("Form submitted : Data : %d %s", score, name);

    try{
        const res = await axios.post('http://localhost:8000/leaderboard/add',
            {name,
            score: Number(score)});
            console.log("Received Response", res);
            alert('Added to leaderboard !');
            setHasEnteredLeaderboard(true);
    } catch(err){
        console.log("Error adding to leaderboard", err);
        alert('Failed to add to leaderboard.');
    }
}

    return(
        <div>
            <h3> Enter Name</h3>
        <form onSubmit = {addToLeaderboard}>
            <input 
                type = "text"
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                required
            />
            <Button variant ="contained" type = "submit"> Submit </Button>
        </form>

        </div>

    );
}

export default EnterName;