import React, { useState, useEffect } from 'react';
import QuestionCard from '../components/QuestionCard';
import Questions from '../data/questions_long';
import Timer from '../components/timer';
import FinishedPage from './finishedPage';


function QuestionPage({category}){

    const [questionIndex, setQuestionIndex] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [hasStarted, setHasStarted] = useState(true);
    const [hasFinished, setHasFinished] = useState(false);
    const [seconds, setSeconds] = useState(0);

    const currentQ = Questions[category][questionIndex];

    useEffect(()=>{
        let timer;
        if(hasStarted && !hasFinished){
            timer = setInterval(()=>{
                setSeconds(prev=>prev+1);
            }, 1000);
        }

        return() => clearInterval(timer);
    },[hasStarted, hasFinished]);

    function handleAnswer(selection){

        if (currentQ.correct === selection){
            setCorrect(prev =>prev + 1);
        }

        const nextIndex = questionIndex + 1;

        if (nextIndex < Questions[category].length){
            setQuestionIndex(questionIndex + 1);
        }
        else{
            setHasFinished(true);
        }
    }

    return(
        <div>
            <h2>{category} Questions </h2>
            {!hasFinished ? (      <div>      <QuestionCard
            category = {category}
            question = {currentQ.question}
            options = {currentQ.options}
            answer = {currentQ.correct}
            onSelect = {handleAnswer}
            />
         <Timer seconds = {seconds}/>
    </div>) :
            (
                <FinishedPage
                correct = {correct}
                category = {category}
                seconds = {seconds}
                Questions = {Questions} />
            )
            }
        </div>
    );

}

export default QuestionPage;