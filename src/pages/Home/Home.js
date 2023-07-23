import React,{useState,useEffect} from 'react'
import Featured from '../../components/Featured/Featured'
import List from '../../components/List/List'
import classes from "./Home.module.css";
import { api } from '../../config';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  const [err,setErr]=useState(false);
  const [hasContent,setHasContent]= useState(false);
  const loc=useLocation();
  useEffect(() => {
    const getRandomLists = async () => {
      setErr(false);
      try {
        const res = await api.get(
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
        
        setErr(true);
      }
    };
    if(loc.pathname === "/") {
      setGenre(null);
      setLists([]);
    }
    getRandomLists();
  }, [type, genre]);
  return (
    <>
    <Navbar/>
    <div className={classes.home}>
      <Featured type={type} setGenre={setGenre} hasContent={(hasVal)=>setHasContent(hasVal)}/>
      {lists.length>0 && !err ? lists.map((list) => (
        <List list={list} />
      )):
      <div className='no-res'>
        {hasContent && lists.length <=0 && `Nothing found for ${genre || "any genre"}`}
        {err && "Oops! Somehing went wrong please try again!"}
      </div>}           
    </div>
    <Footer/>
    </>
  )
}

export default Home