import React,{useState,useEffect} from 'react'
import Featured from '../components/Featured/Featured'
import List from '../components/List/List'
import classes from "./Home.module.css";
import axios from "axios"
import { useLocation } from 'react-router-dom';
const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const loc=useLocation()
  console.log(loc)
  
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists/${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              Authorization:
              "Bearer "+JSON.parse(localStorage.getItem("user")).token,
            },
          }
        );
        setLists(res.data.list);
      } catch (err) {
        console.log(err);
      }
    };
    if(loc.pathname === "/") {
      setGenre(null);
      setLists([])
    }
    getRandomLists();
  }, [type, genre]);

  console.log(lists)
  return (
    <div className={classes.home}>
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))}           
    </div>
  )
}

export default Home