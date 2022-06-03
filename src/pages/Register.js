import React from "react";
import Navbar from "../components/Navbar/Navbar";
import classes from "./Register.module.css";
import homeBg from "../assets/home-bg.jpg";
import homeTv from "../assets/home-tv.jpg";
import homeMb from "../assets/home-mobile.jpg";
import homeIm from "../assets/home-imac.jpg";
import kids from "../assets/kids.png";
const Register = () => {
  return (
    <div className={classes.register}>
      <Navbar />
      <div className={classes.wrapper}>
        <div
          className={classes.header}
          style={{ backgroundImage: `url(${homeBg})` }}
        >
          <h1 className={classes.heading}>
            Unlimited movies, TV shows and more.
          </h1>
          <p className={classes.subHeading}>Watch anywhere. Cancel anytime.</p>
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
            <div className={classes.homeMb}>
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
            <div className={classes.kids}>
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
