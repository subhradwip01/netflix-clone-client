import React from 'react'
import classes from "./Watch.module.css"
import {IoArrowBack} from "react-icons/io5"
const Watch = () => {
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div className={classes.watch}>
      <div className={classes.back}>
        <IoArrowBack size={20} color="white"/>
      </div>
      <video className={classes.video} autoPlay progress controls src={trailer}/>
    </div>
  )
}

export default Watch 