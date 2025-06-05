import React, {useEffect, useState} from 'react';

function LeaderBoardPage(){

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/leaderboard/show')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => console.error("Error fetching leaderboard", err))
    },[])

    return(
        <div>
            <h2>Leaderboard</h2>
            <ol>
                {data.map((entry, index) =>(
                    <li key = {entry._id}>
                        {entry.name} : {entry.score}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default LeaderBoardPage;