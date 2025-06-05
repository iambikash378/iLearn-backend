import React from 'react';

import Choices from '../data/choices';

function ChoiceList({handleChoices}){
    return(
        <div>
            {Choices.map(
                (choice, index) => 
                <button 
                onClick ={() => handleChoices(choice)} >{choice}</button> 
            )
            }
        </div>   
            );
}

export default ChoiceList;