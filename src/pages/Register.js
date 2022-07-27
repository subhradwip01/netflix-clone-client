import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import classes from "./Register.module.css";
import homeBg from "../assets/home-bg.jpg";
import homeTv from "../assets/home-tv.jpg";
import homeMb from "../assets/home-mobile.jpg";
import homeIm from "../assets/home-imac.jpg";
import kids from "../assets/kids.png";
import useInput from "../hooks/useInput";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const Register = () => {
  const [step, setStep] = useState(0);
  
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emaileBlurHandler,
    
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value) => (value.length < 8 ? false : true));

  const {
    value: enteredUsername,
    isValid: enteredUsernameIsavlid,
    hasError: usernameInputHasError,
    valueChangeHandler: usernameChangedHandler,
    inputBlurHandler: usernameBlurHandler,
  } = useInput((value) => (value.length < 5 ? false : true));

  const [creating,setCreating]=useState(false);
  const [error,setError]=useState(false);
  const navigate=useNavigate()

  const handleFinish = async (e) => {
    e.preventDefault();
    if(!enteredEmailIsValid && !enteredPasswordIsValid && !enteredUsernameIsavlid) return;
    const data={
      username:enteredUsername,
      email:enteredEmail,
      password:enteredPassword,
    }
    setCreating(true);
    try {
      const res = await axios.post('/auth/signup', data);
      console.log(res.data.userDetails);
      setCreating(false);
      alert("Succesfully Registered");
      navigate("/login")
      
    } catch (error) {
      setCreating(false);
      setError(error.response.data.message || "Unable to create! Please try again later")
    }
    
  };
  return (
    <>
    <Navbar/>
    <div className={classes.register}>
      <div className={classes.wrapper}>
        <div
          className={classes.header}
          style={{ backgroundImage: `url(${homeBg})` }}
        >
          <h1 className={classes.heading}>
            Unlimited movies, TV shows and more.
          </h1>
          <p className={classes.subHeading}>Watch anywhere. Cancel anytime.</p>
          {error && <div className={classes.errMsg}>{error.message}</div>}
            <div className={classes.input}>
              <input
                type="email"
                placeholder="email address"
                value={enteredEmail}
                onChange={emailChangedHandler}
                onBlur={emaileBlurHandler}
                className={`${emailInputHasError && classes.errorIn}`}
              />
            </div>
              {emailInputHasError && (
            <p className={classes.error}>Enter a valid email</p>
          )}
            <div className={classes.input}>
              <input
                type="username"
                placeholder="username"
                value={enteredUsername}
                onChange={usernameChangedHandler}
                onBlur={usernameBlurHandler}
                className={`${usernameInputHasError && classes.errorIn}`}
              />
            </div>
              {usernameInputHasError && (
            <p className={classes.error}>Enter a valid username</p>
          )}
     
       
            <div className={classes.input}>
              
              <input
                type="password"
                placeholder="password"
                value={enteredPassword}
                onChange={passwordChangedHandler}
                onBlur={passwordBlurHandler}
                className={`${passwordInputHasError && classes.errorIn}`}
              />
            </div>
              {passwordInputHasError && (
            <p className={classes.error}>Enter a valid email</p>
          )}
            <div className={classes.input}>
            <button className={classes.registerButton} disabled={creating} onClick={handleFinish}>
             {creating? "Registering..." : "Register"}
            </button>
            </div>
            <Link className={classes.link} to="/register">Already have an account? Login</Link>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <div className={classes.featureCard}>
          <div className={classes.featureBox}>
            <div className={classes.featureDetails}>
              <h1 className={classes.featureHeading}>Enjoy on your TV.</h1>
              <p className={classes.featureSubheading}>
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </p>
            </div>
            <div className={classes.featureImage}>
              <img className={classes.homeTv} src={homeTv} />
            </div>
          </div>
        </div>
        <div className={classes.featureCard}>
          <div className={classes.featureBox}>
            <div className={`${classes.homeMb} ${classes.featureImage}`}>
              <img src={homeMb} />
            </div>
            <div className={classes.featureDetails}>
              <h1 className={classes.featureHeading}>
                Download your shows to watch offline.
              </h1>
              <p className={classes.featureSubheading}>
                Save your favourites easily and always have something to watch.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.featureCard}>
          <div className={classes.featureBox}>
            <div className={classes.featureDetails}>
              <h1 className={classes.featureHeading}>Watch everywhere.</h1>
              <p className={classes.featureSubheading}>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <div className={classes.featureImage}>
              <img className={classes.homeIm} src={homeIm} />
            </div>
          </div>
        </div>
        <div className={classes.featureCard}>
          <div className={classes.featureBox}>
            <div className={`${classes.kids} ${classes.featureImage}`}>
              <img src={kids} />
            </div>
            <div className={classes.featureDetails}>
              <h1 className={classes.featureHeading}>
                Create profiles for children.
              </h1>
              <p className={classes.featureSubheading}>
                Send children on adventures with their favourite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
