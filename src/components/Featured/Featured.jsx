import React,{useState,useEffect} from 'react'
import axios from "axios"
import imgTitle from "../../assets/mh.png"
import classes from "./Featured.module.css"
import {IoPlaySharp,IoAdd} from "react-icons/io5"
import bgMovie from "../../assets/bg3.jpg"

const Featured = ({type,setGenre}) => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            Authorization:
              "Bearer "+JSON.parse(localStorage.getItem("user")).token,
          },
        });
        // console.log(res.data.allMovies[0])
        setContent(res.data.allMovies[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  console.log("content",content)
  return (
    <div className={classes.featured} style={{"backgroundImage":`url(${content.imgThumbnail})`}} >
      {type && (
        <div className={classes.category}>
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="SciFi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <div className={classes.movie_details}>
        <h1 className={classes.movie_title}>{content.title}</h1>
        <p className={classes.desc}>{content.desc}</p>
        <div className={classes.actions}>
          <button className={classes.play}><IoPlaySharp size={20} color="white" />Play</button>
          <button className={classes.info}><IoAdd size={20} color="white" />Add</button>
        </div>
      </div>

    </div>
  )
}

export default Featured