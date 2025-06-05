import React , {useState} from 'react';

import ChoiceList from '../components/choicelist';

import QuestionPage from './questionpage' ;


function LandingPage(){

    const [selectedCategory, setSelectedCategory] = useState(null);
    function handleChoices(choice){
        setSelectedCategory(choice);
    }

    return (
        <div>
            {selectedCategory == null ? (
                        <div>
                            <h1> Welcome to NepTrivia </h1>
                            <h2> Make Your Pick</h2>
                            <ChoiceList 
                            handleChoices = {handleChoices} />
                        </div>
            ):(
             <QuestionPage category={selectedCategory} />
            )
        }
        </div>
    );
}

export default LandingPage;