import React, {useState, useEffect} from 'react';
import { supabase } from '../config/supaBase';
import './Login.css';
import Loader from './Loader';

const Login = () => {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false); 
        }, 1500);
  
        return () => clearTimeout(timer);
      }, []);

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
    <div className='loginpage-container'>
    {loading ? <Loader /> :
    <div className='loginpage'>
        <h1>Press button for link</h1>
            <input type='email' placeholder='Enter your email' onChange={(e)=> setEmail(e.target.value)}/>
            <br/>
        <button onClick={() => LinkForLogIn()}>Get a link</button>
    </div>
    }
    </div>
  );
};

export default Login;
