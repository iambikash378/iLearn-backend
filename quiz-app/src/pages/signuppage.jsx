import React, {useState} from 'react';
import axios from 'axios';


function SignUpPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState();

    const handleSignup = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/user/add",
            {name, email, password, gender, dob}
        ).then(result => {console.log(result)})
        .catch(err => console.log(err) )
    }

    return(
        <div>
            <h2> Sign Up </h2>
            <h3>Fill the form below for registration</h3> 
            <form onSubmit = {handleSignup}>

                <label for = 'fullname'> <strong> Full Name </strong></label><br/>
                <input type = "text" 
                id = "fullname" 
                name = "fullname"
                value = {name}
                onChange = {(e) => setName(e.target.value)}/> <br/>

                <label for = 'email'><strong>Email </strong> </label> <br/>
                <input type = "email" 
                id = "email" 
                name = "email"
                value = {email}
                onChange = {(e) => setEmail(e.target.value) }/> <br/>

                <label for = 'password'><strong>Password </strong> </label> <br/>
                <input type = "password" 
                id = "password" 
                name = "password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value) }/> <br/>

                <label><strong>Gender </strong> </label> <br/>
                
                <input type = "radio" 
                id = "male" 
                value = "male" 
                name ="gender"
                checked = {gender === "male"}
                onChange = {(e) => {
                    console.log(e.target.value);
                    setGender(e.target.value);
                }
                }/>
                <label for = 'male'> Male </label> <br/>
                
                <input type = "radio" 
                id = "female" 
                value = "female"
                checked = {gender === "female"}
                name ="gender"
                onChange = {(e) => {
                    setGender(e.target.value);
                }}/>
                <label for = 'female'> Female </label> <br/>
                
                <input type = "radio" 
                id = "others" 
                value = "others" 
                checked = {gender === "others"}
                name ="gender"
                onChange = {(e) => {
                    setGender(e.target.value);
                }}/>
                <label for = 'others'> Others </label> <br/>
                
                <input type = "radio" 
                id = "notsaying" 
                value = "notsaying" 
                name ="gender"
                checked = {gender === "notsaying"}
                onChange = {(e) => {
                    setGender(e.target.value);
                }}/>
                <label for = 'notsaying'> Prefer Not To Say </label><br/>
                <br/>

                <label for = "birth"> <strong>Date Of Birth</strong> </label> <br/>
                <input type = "date" 
                id = "birth"
                onChange = {(e) => setDob(e.target.value) }/> <br/>
                <br/>

                <button type = "submit">Register</button>
            </form>
        </div>
    )
}

export default SignUpPage;