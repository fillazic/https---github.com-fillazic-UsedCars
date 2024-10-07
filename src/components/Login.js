import React, {useState} from 'react';
import { supabase } from '../config/supaBase';
import './Login.css';  // Import the CSS file for styling

const Login = () => {

    const [email, setEmail] = useState('');

    const LinkForLogIn = async () => {
        const {data, error} = await supabase.auth.signInWithOtp({
            email: email,
        })
        if (error) {
            alert('Error, make sure you use real emali')
            console.log(error)
        } else {
            alert('Check your email for link to log in')
        }
    }

  return (
    <div className='loginpage'>
        <h1>Press button for link</h1>
            <input type='email' placeholder='Enter your email' onChange={(e)=> setEmail(e.target.value)}/>
            <br/>
        <button onClick={() => LinkForLogIn()}>Get a link</button>
    </div>
  );
};

export default Login;
