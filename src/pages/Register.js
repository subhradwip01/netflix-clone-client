import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import classes from "./Register.module.css";
import homeBg from "../assets/home-bg.jpg";
import homeTv from "../assets/home-tv.jpg";
import homeMb from "../assets/home-mobile.jpg";
import homeIm from "../assets/home-imac.jpg";
import kids from "../assets/kids.png";
import useInput from "../hooks/useInput";

const Register = () => {
  const [isNext, setIsNext] = useState(false);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emaileBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => (value.length < 8 ? false : true));

  const handleStart = () => {
    if (!enteredEmailIsValid) {
      return;
    }
    setIsNext(true);
  };
  const handleFinish = (e) => {
    e.preventDefault();
    if (!enteredPasswordIsValid) {
      return;
    }
    console.log(enteredEmail, enteredPassword);
    resetEmailInput();
    resetPasswordInput();
  };
  return (
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
          {!isNext ? (
            <div className={classes.input}>
              <input
                type="email"
                placeholder="email address"
                value={enteredEmail}
                onChange={emailChangedHandler}
                onBlur={emaileBlurHandler}
                className={`${emailInputHasError && classes.errorIn}`}
              />
              <button className={classes.registerButton} onClick={handleStart}>
                Get Started
              </button>
            </div>
            
          ) : (
            <form className={classes.input}>
              <input
                type="password"
                placeholder="password"
                value={enteredPassword}
                onChange={passwordChangedHandler}
                onBlur={passwordBlurHandler}
                className={`${emailInputHasError && classes.errorIn}`}
              />
              <button className={classes.registerButton} onClick={handleFinish}>
                Start
              </button>
            </form>
          )}
          
          {emailInputHasError && <p className={`${emailInputHasError && classes.error}`}>Enter a valid email</p>}
          {passwordInputHasError && <p className={`${emailInputHasError && classes.error}`}>Enter a valid password</p>}
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
  );
};

export default Register;
