import './App.css';

import React from 'react';

import LandingPage from './pages/landingpage';

import LoginPage from './pages/loginPage';

import SignUpPage from './pages/signuppage';

import QuestionPage from './pages/questionpage';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App= () => {

  return(
    <Router>
      <Routes>
        <Route path = "/" element = {<LandingPage />} />
        <Route path = "/login" element = {<LoginPage />} />
        <Route path = "/signup" element = {<SignUpPage />} />
      </Routes>
    </Router>
  )

}


export default App;