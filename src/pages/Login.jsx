import React from 'react'
import classes from "./Login.module.css"
import homeBg from "../assets/home-bg.jpg";
import { Link } from 'react-router-dom';
const Login = () => {
    const loginHandler=(e)=>{
        e.preventDefault();
        console.log("Logged in")
    }
  return (
    <div className={classes.login}>
        <div className={classes.form}>
            <form className={classes.formControls}>
                <input  type="text" name="email" id="email" placeholder="Enter email"/>
                <input type="password" name="password" id="password" placeholder="Enter password"/>
                <button type='submit' onClick={loginHandler}>Login</button>
            </form>
            <Link to="/register">Don't have account? Sign up</Link>
        </div>
        
    </div>
  )
}

export default Login