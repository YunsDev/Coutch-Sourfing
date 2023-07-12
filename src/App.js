import React from 'react'
import NavBar from './components/NavBar'
import Login from './components/user/Login'
import Notification from './components/Notification'
import Loading from './components/Loading'

const App = () => {
  return (
    <>
    <Loading/>
    <Notification/>
    <Login/>
    <NavBar/> 
    </>
  )
}

export default App

/* 1 NavBar shows allwase? Loading, Notfication, Login shows depending on conditions _state_ */