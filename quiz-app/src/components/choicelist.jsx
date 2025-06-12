import React from 'react';

import Button from '@mui/material/Button';

import Choices from '../data/choices';

function ChoiceList({handleChoices}){
    return(
        <div>
            {Choices.map(
                (choice, index) => 
                <Button  variant = "contained"
                onClick ={() => handleChoices(choice)}>{choice}</Button> 
            )
            }
        </div>   
            );
}

export default ChoiceList;