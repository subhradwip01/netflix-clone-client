import React,{useState} from 'react'
import classes from "./ListItem.module.css"
import {IoPlaySharp,IoAdd} from "react-icons/io5"


const ListItem = ({index}) => {
  const [isHover,setIsHovered]=useState(false)
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div className={classes.listItem} style={{"left":`${isHover && 230*index}px`}} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
        <img src="https://w0.peakpx.com/wallpaper/160/389/HD-wallpaper-spider-man-spider-man-2-doctor-octopus.jpg" alt="" srcset="" />
        {isHover && 
        <>
        <video src={trailer} autoPlay={true} loop></video>
        <div className={classes.itemInfo}>
          <div className={classes.icons}>
            <IoPlaySharp color='white' size={30} className={classes.icon}/>
            <IoAdd color='white' size={30} className={classes.icon}/>
          </div>
          <div className={classes.itemInfoTop}>
              <spna>1 hour 14 mins</spna>
              <span className={classes.limit}>+16</span>
              <spna>1999</spna>
          </div>
          <div className={classes.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure
          </div>
          <div className={classes.genre}>Action</div>
          
        </div>
        </>}
    </div >
  )
}

export default ListItem