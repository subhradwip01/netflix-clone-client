import React,{useState,useEffect} from 'react'
import Featured from '../components/Featured/Featured'
import List from '../components/List/List'
import classes from "./Home.module.css";
import axios from "axios"
import { useLocation } from 'react-router-dom';

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const [err,setErr]=useState(false);
  const loc=useLocation()
  useEffect(() => {
    const getRandomLists = async () => {
      setErr(false);
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
        console.log(res.data.list)
      } catch (err) {
        setErr(true);
      }
    };
    if(loc.pathname === "/") {
      setGenre(null);
      setLists([])
    }
    getRandomLists();
  }, [type, genre]);
  return (
    <>
    <div className={classes.home}>
      <Featured type={type} setGenre={setGenre} />
      {lists.length>0 && !err ? lists.map((list) => (
        <List list={list} />
      )):
      <div className='no-res'>
        {lists.length <=0 && `Nothing found for ${genre}`}
        {err && "Oops! Somehing went wrong please try again!"}
      </div>}           
    </div>
    </>
  )
}

export default Home