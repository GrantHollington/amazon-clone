import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'


function Login() {
    // useState for email and password. useState is like variables in react
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        // this prevents react from reloading page
        e.preventDefault();

        // do some fancy firebase login tuff here
    }

    const register = e => {
        e.preventDefault();

        // do some fancy firebase regster stuff here
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