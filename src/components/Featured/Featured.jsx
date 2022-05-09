import React from 'react'
import imgTitle from "../../assets/mh.png"
import classes from "./Featured.module.css"
import { FaPlay, FaInfoCircle } from "react-icons/fa"
import bgMovie from "../../assets/bg3.jpg"

const Featured = () => {
  return (
    <div className={classes.featured} style={{"backgroundImage":`url(${bgMovie})`}} >
      <div className={classes.movie_details}>
        <img className={classes.imgTitle} src={imgTitle} />
        <p className={classes.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas adipisci repudiandae at inventore amet magnam odit consequuntur soluta. Nulla est nobis ut sint velit quas ratione dolore harum? Vitae, pariatur.</p>
        <div className={classes.actions}>
          <button className={classes.play}><FaPlay size={16} color="white" />Play</button>
          <button className={classes.info}><FaInfoCircle size={17} color="white" />Info</button>
        </div>
      </div>

    </div>
  )
}

export default Featured