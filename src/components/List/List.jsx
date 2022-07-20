import React, { useRef, useState } from "react";
import classes from "./List.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ListItem from "../ListItem/ListItem";

const List = ({list}) => {
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
      <h4 className={classes.listTitle}>{list.title}</h4>
      <div className={classes.wrapper}>
        <FaAngleLeft
          className={`${classes.sliderArrow} ${classes.left}`}
          size={15}
          onClick={() => handleClick("left")}
          style={{ display: !isMovied ? "none" : "block" }}
        />
        <div ref={listRef} className={classes.container}>
        {list.content.map((item, i) => (
            <ListItem index={i} item={item} />
          ))}
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
