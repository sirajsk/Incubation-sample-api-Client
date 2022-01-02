import React, { useState } from 'react';
import {  Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup';
import Home from './Pages/Home'
import ApplyForm from './Pages/Apply'
import UserPage from './Pages/UserHome'
// import AdminHome from './Pages/AdminHome';
import SlotBooking from './Pages/AdminSlot';
import AdminLogin from './Pages/AdminLogin';
import AdminHomePage from './Pages/AdminTables';
import "@mui/material"
import './App.css';
function App() {
  const [data, seData] = useState(null)

  React.useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) =>{ 
        seData(data.message)
      console.log(data);
    })

  }, [])
  return (
    <div >  
      <div>{data}</div>   
     
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/'  element={<Home /> } />
          <Route path='/apply-form' element={<ApplyForm />} />
          <Route path='/home' element={<UserPage Home="Home" />} />
          <Route path='/admin/home' element={<AdminHomePage />} />
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route path='/admin/slot' element={<SlotBooking />} />
          

        </Routes>
    
    </div>
  );
}

export default App;
