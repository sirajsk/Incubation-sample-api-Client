import React,{useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import UserHome from "../Components/HomePage/HomePage"
import Header from "../Components/Header/Header";

function UserPage(props){

    const naviagate = useNavigate()
    
    useEffect(() => {
        
        let userDatas = JSON.parse(localStorage.getItem("userData"))
     console.log(userDatas);

       if(userDatas){
        naviagate('/home')
        console.log('hiiiiiiiiii');
       }else{
        naviagate('/')

       }
    }, [naviagate])


    return (
        <div>
            <Header islogin={props} />
            <UserHome/>
        </div>
    )
}

export default UserPage