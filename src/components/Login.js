import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'


function Login() {
  return (
      <div className='login'>
        <Link to='/'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUxrEeXJbhssKzjBFZGZ68ywRnZ1tqkK6-eA&usqp=CAU" alt="Amazon logo" className='login__logo' />
        </Link>

        <div className="login__container">
            <h1>Sign-in</h1>

            <form action="">
                <h5>E-mail</h5>
                <input type="text" />

                <h5>Password</h5>
                <input type="password" />

                <button className='login__signInButton'>Sign In</button>
            </form>

            <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use and Sale.Please see our Privacy Notice, our Cookies Notice and our Interest Based Ads
            </p>

            <button className='login__registerButton'>Create your account</button>
        </div>
    </div>

  )
}

export default Login