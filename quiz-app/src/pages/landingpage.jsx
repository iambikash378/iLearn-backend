import React , {useState} from 'react';

import ChoiceList from '../components/choicelist';

import QuestionPage from './questionpage' ;

import UserLogin from '../components/login';

import SignUp from '../components/signup';

import {useLocation} from 'react-router-dom';

function LandingPage(){

    const location = useLocation();

    const {hasLoggedIn, nameOfUser} = location.state || {};
    console.log(hasLoggedIn, nameOfUser)

    const [selectedCategory, setSelectedCategory] = useState(null);
    function handleChoices(choice){
        setSelectedCategory(choice);
    }

    return (
        <div>
            {selectedCategory == null ? (
                        <div>
                            <h1> Welcome to NepTrivia </h1>
                            {hasLoggedIn ? (
                                <p> Logged In As: {nameOfUser}</p>
                            ):(
                                <>
                                <UserLogin/>
                                <SignUp />
                                </>
                            )                       
                            }

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