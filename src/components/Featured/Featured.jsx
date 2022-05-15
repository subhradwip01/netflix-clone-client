import React from 'react'
import imgTitle from "../../assets/mh.png"
import classes from "./Featured.module.css"
import {IoPlaySharp,IoAdd} from "react-icons/io5"
import bgMovie from "../../assets/bg3.jpg"

const Featured = ({type}) => {
  return (
    <div className={classes.featured} style={{"backgroundImage":`url(${bgMovie})`}} >
      {type && (
        <div className={classes.category}>
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <div className={classes.movie_details}>
        <img className={classes.imgTitle} src={imgTitle} />
        <p className={classes.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas adipisci repudiandae at inventore amet magnam odit consequuntur soluta. Nulla est nobis ut sint velit quas ratione dolore harum? Vitae, pariatur.</p>
        <div className={classes.actions}>
          <button className={classes.play}><IoPlaySharp size={18} color="white" />Play</button>
          <button className={classes.info}><IoAdd size={19} color="white" />Add</button>
        </div>
      </div>

    </div>
  )
}

export default Featured