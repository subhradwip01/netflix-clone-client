import React, { useRef, useState } from "react";
import classes from "./List.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ListItem from "../ListItem/ListItem";

const List = () => {
  const listRef = useRef();
  const [slideNum, setSlideNum] = useState(0);
  const [isMovied, setIsMoved] = useState(false);

  const handleClick = (direction) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50;

    let numberOfVideosInFrame=Math.ceil((window.innerWidth-100)/230)
    console.log(slideNum )
    if (direction === "left" && slideNum > 0) {
      setSlideNum(slideNum - 1); 
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNum < 16-numberOfVideosInFrame) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSlideNum(slideNum + 1);
    }
  };
  return (
    <div className={classes.list}>
      <span className={classes.listTitle}>Continue to Watch</span>
      <div className={classes.wrapper}>
        <FaAngleLeft
          className={`${classes.sliderArrow} ${classes.left}`}
          size={15}
          onClick={() => handleClick("left")}
          style={{ display: !isMovied ? "none" : "block" }}
        />
        <div ref={listRef} className={classes.container}>
          <ListItem index={0}/>
          <ListItem index={1}/>
          <ListItem index={2}/>
          <ListItem index={3}/>
          <ListItem index={4}/>
          <ListItem index={5}/>
          <ListItem index={6}/>
          <ListItem index={7}/>
          <ListItem index={8}/>
          <ListItem index={9}/>
          <ListItem index={10}/>
          <ListItem index={11}/>
          <ListItem index={12}/>
          <ListItem index={13}/>
          <ListItem index={14}/>
          <ListItem index={15}/>
        </div>
        <FaAngleRight
          className={`${classes.sliderArrow} ${classes.right}`}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
