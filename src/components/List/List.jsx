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
    console.log(numberOfVideosInFrame)
    console.log(slideNum < 16-numberOfVideosInFrame)
    if (direction === "left" && slideNum < 16-numberOfVideosInFrame) {
      setSlideNum(slideNum - 1); 
      console.log(distance)
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
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
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
