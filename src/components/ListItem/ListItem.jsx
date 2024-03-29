import React,{useState, useEffect} from 'react'
import classes from "./ListItem.module.css"
import {IoPlaySharp,IoAdd} from "react-icons/io5"
import axios from "axios"
import {api} from "../../config"
import { Link } from 'react-router-dom'

const ListItem = ({index,item}) => {
  const [isHover,setIsHovered]=useState(false)
   
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await api.get("/movies/find/" + item, {
          headers: {
            Authorization:
            "Bearer "+JSON.parse(localStorage.getItem("user")).token,
          },
        });
        console.log(res.data)
        setMovie(res.data.movie);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);
  return (
    <Link to={`/watch/${item}`} state={{movie:movie}}>
    <div className={classes.listItem}  style={{ left: isHover && index * 225 - 50 + index * 2.5 }} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
      <div className={classes.listItemInfo}>
      {!isHover && <img src={movie.imgThumbnail} alt="" srcset="" />}
        {isHover &&<> <video src={movie.trailer} autoPlay={true} loop></video>
        
        <div className={classes.itemInfo}>
          <div className={classes.icons}>
            <IoPlaySharp color='white' size={30} className={classes.icon}/>
            <IoAdd color='white' size={30} className={classes.icon}/>
          </div>
          <div className={classes.itemInfoTop}>
              <span className={classes.limit}>+{movie.limit}</span>
              <spna>{movie.year}</spna>
          </div>
          <div className={classes.desc}>
           {movie.desc}
           </div>
          <div className={classes.genre}>{movie.genre}</div>
          
        </div>
        </>}
      </div>
       
    </div >
    </Link>
  )
}

export default ListItem