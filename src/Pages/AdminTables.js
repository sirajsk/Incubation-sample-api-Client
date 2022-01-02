import React from "react";
import Header from "../AdminComponets/AdminHome/AdminHome";
import Banner from "../AdminComponets/AdminTables/AdminTable"
// import { useNavigate } from "react-router-dom";


function AdminHomePage(){
//   const navigate = useNavigate()
 
    return(
        <div>
            <Header/>
            <Banner/>
        </div>
    )
}
export default AdminHomePage