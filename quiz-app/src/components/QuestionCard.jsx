import React from 'react';
import Button from '@mui/material/Button';


function QuestionCard({category, question, options, answer, onSelect}){
    return(
        <div>
            <h2> {question} </h2>
            {options.map((option, index) => (
                <Button variant = 'contained' key = {index} onClick = {() => onSelect(option) }> 
                    {option} 
                </Button>
            )
            )};
        </div>

    );
}




export default QuestionCard;

