import './App.css';

import React, { useState } from 'react';

import QuestionCard from './components/QuestionCard';

import questions from './data/questions';

import LandingPage from './pages/landingpage';

import { Routes, Route } from 'react-router-dom';

const App= () => {

  return(
    <LandingPage/>
  )

  // const[currentIndex, setCurrentIndex] = useState(0);
  // const[score, setScore] = useState(0);
  // const[hasStarted, setHasStarted] = useState(false);
  // const[hasFinished, setHasFinished] = useState(false);

  // const handleAnswer = (selected_option) => {
  //   if(selected_option === questions[currentIndex].correct) {
  //     setScore(score+1);
  //   }

  //   const NextIndex = currentIndex + 1;

  //   if (NextIndex < questions.length){
  //     setCurrentIndex(NextIndex);
  //   }
  //   else {
  //     setHasFinished(true);
  //   }
  // };

  // if (hasStarted){
  //   return(
  //     <div>
  //       {
  //         !hasFinished ? (
  //           <QuestionCard question = {questions[currentIndex].question}
  //           options = {questions[currentIndex].options}
  //           onSelect = {handleAnswer} />
  //         ):(
  //           <div>
  //             <h2> Quiz Finished </h2>
  //             <p>Your score is {score} / {questions.length} </p>
  //           </div>
  //         )
  //       }
  //     </div>
  //   );

  // }

  // else{
  //   return(
  //     <div>
  //       <LandingPage />
  //     </div>
  //   );
  // }

}


export default App;