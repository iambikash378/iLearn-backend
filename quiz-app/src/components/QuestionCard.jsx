import React from 'react';

function QuestionCard({category, question, options, onSelect}){
    return(
        <div>
            <h2> {question} </h2>
            {options.map((option, index) => (
                <button key = {index} onClick = {() => onSelect(option) }> 
                    {option} 
                </button>
            )
            )};
        </div>

    );
}




export default QuestionCard;

