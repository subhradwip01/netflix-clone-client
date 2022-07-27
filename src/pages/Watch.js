import React from 'react'
import classes from "./Watch.module.css"
import {IoArrowBack} from "react-icons/io5"
import { useLocation } from 'react-router-dom'
const Watch = () => {
  const location=useLocation();
  const movie=location.state.movie;
  return (
    <div className={classes.watch}>
      <div className={classes.back}>
        <IoArrowBack size={20} color="white"/> Home
      </div>
      <video className={classes.video} autoPlay progress controls src={movie.video}/>
    </div>
  )
}

export default Watch 