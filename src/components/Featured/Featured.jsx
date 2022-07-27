import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import classes from "./Featured.module.css"
import {IoPlaySharp,IoAdd} from "react-icons/io5"
const Featured = ({type,setGenre}) => {
  const [content, setContent] = useState({});
  const [error,setError]=useState(false)
  useEffect(() => {
    const getRandomContent = async () => {
      setError(false);
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
        setError(true)
      }
    };
    getRandomContent();
  }, [type]);

  if(!content || error){
    return (
      <div className='no-res' style={{height:"80vh"}}>
        {!content && `Oops! No result found for ${type}`}
        {error && `Something went wrong please try again later`}
      </div>
    )
  }
  return (
    <div className={classes.featured} style={{"backgroundImage":`url(${content.imgThumbnail})`}} >
      {type && (
        <div className={classes.category}>
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={(e) => {setGenre(e.target.value|| "")}}>
            <option value="">Genre</option>
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
          <Link className={classes.play} to={`/watch/${content._id}`} state={{movie:content}}><IoPlaySharp size={20} color="white" />Play</Link>
          <button className={classes.info}><IoAdd size={20} color="white" />Add</button>
        </div>
      </div>
    </div>
  )
}

export default Featured