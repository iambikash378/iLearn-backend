import react from 'react';

function LogOut({setHasLoggedIn, setNameOfUser}) {

    function handleLogout(){
        setHasLoggedIn(false);
        setNameOfUser('');
    }

    return(
        <div>
            <button onClick = {handleLogout}> Log Out</button>
        </div>
    )
}

export default LogOut;