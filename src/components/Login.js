import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css'

function Login() {
    // useNavigate replaces useHistory in react-router-dom v6
    const navigate = useNavigate();
    // useState for email and password. useState is like variables in react
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        // this prevents react from reloading page
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((auth) => {
              console.log(auth);
              if (auth) {
                  navigate('/')
              }
            })
            .then(navigate('/'))
            .catch(error => alert(error.message)) 
            

    }

    const register = e => {
        e.preventDefault();
       
            // creating a new email and password
            createUserWithEmailAndPassword(auth, email, password)
                .then((auth) => {
                    // this means it sucessfully created a new user
                    console.log(auth);
                    if (auth) {
                        navigate('/')
                    }
                })
                .catch(error => alert(error.message))
    }

  return (
      <div className='login'>
        <Link to='/'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUxrEeXJbhssKzjBFZGZ68ywRnZ1tqkK6-eA&usqp=CAU" alt="Amazon logo" className='login__logo' />
        </Link>

        <div className="login__container">
            <h1>Sign-in</h1>

            <form action="">
                <h5>E-mail</h5>
                {/* value and onChange to attach user inputs to store in useState */}
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
            </form>

            <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use and Sale.Please see our Privacy Notice, our Cookies Notice and our Interest Based Ads Ntoice.
            </p>

            <button onClick={register} className='login__registerButton'>Create your account</button>
        </div>
    </div>

  )
}

export default Login