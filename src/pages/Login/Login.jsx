import React,{useState,useContext} from 'react'
import classes from "./Login.module.css"
import { Link,useNavigate } from 'react-router-dom';
import { login } from '../../AuthContext/apiCalls';
import { AuthContext } from '../../AuthContext/AuthContext';
import Navbar from '../../components/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
    const [data,setData]=useState({
        username:"",
        password:""
    })
    const {dispatch,isFetching,error}=useContext(AuthContext)
    const navigate=useNavigate();
    
    
    const inputHandler=(e)=>{
        setData(p=>({...p,[e.target.name]:e.target.value}))
    }




    const loginHandler=async(e)=>{
        e.preventDefault();
        await login(data,dispatch,navigate)
        if(error.has && !isFetching){
            console.log(error)
            toast.error(error.message ,{
                position: toast.POSITION.TOP_RIGHT
            })
        }
    }
    

  return (
    <>
    <ToastContainer limit={1}/>
    <Navbar/>
    <div className={classes.login}>
        <div className={classes.form}>
            <form className={classes.formControls}>
                <input  type="text" name="username" id="username" placeholder="Enter Username" onChange={inputHandler}/>
                <input type="password" name="password" id="password" placeholder="Enter password" onChange={inputHandler}/>
                <button type='submit' disabled={isFetching} onClick={loginHandler}>{isFetching?"Logging..":"Login"}</button>
            </form>
            <Link to="/register">Don't have account? Sign up</Link>
        </div>
        
    </div>
    </>
  )
}

export default Login