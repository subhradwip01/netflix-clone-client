import React from 'react'
import imgTitle from "../../assets/mh.png"
import classes from "./Featured.module.css"
const bgMovie = "../../assets/bg3.jpg"

const Featured = () => {
  return (
    <div className={classes.featured} >
      <div className={classes.movie_details}>
        <img className={classes.imgTitle} src={imgTitle} />
        <p className={classes.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas adipisci repudiandae at inventore amet magnam odit consequuntur soluta. Nulla est nobis ut sint velit quas ratione dolore harum? Vitae, pariatur.</p>
        <div className={classes.actions}>
          <button className={classes.play}>Play</button>
          <button className={classes.info}>Info</button>
        </div>
      </div>

    </div>
  )
}

export default Featured