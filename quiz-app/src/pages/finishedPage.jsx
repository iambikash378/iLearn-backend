import React, {useState} from 'react'; 
import EnterName from '../components/entername';
import LeaderBoardPage from './leaderboard';


function FinishedPage({correct, seconds, Questions, category}){

    const [clickedLeaderBoard, setClickedLeaderBoard] = useState(false);

    const [hasEnteredLeaderboard , setHasEnteredLeaderboard] = useState(false);

    return(
        <div>
            {!clickedLeaderBoard ? (
                            <>
                              <h2> Quiz Finished </h2>
                              <p>Your score is {correct} / {Questions[category].length} </p>
                              <p> Time took is : {seconds} seconds</p>
                              {!hasEnteredLeaderboard ? (
                                <EnterName score = {correct}
                                setHasEnteredLeaderboard={setHasEnteredLeaderboard} />
                              ):(
                                <div> </div>
                              )}
                                <button onClick = {()=> setClickedLeaderBoard(true)} >Leaderboard</button>
                            </>
            ):
            (
                <LeaderBoardPage />
            )
        }
        </div>
    );
}

export default FinishedPage;