// import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Yoga from './pages/Yoga'
import HomeView from './pages/HomeView';
import SignUp from './components/SignUp';
import Meditation from './pages/Meditation';
import Profile from './pages/ProfilPage';
import LogIn from './components/LogIn';
import Playlist from './pages/PlaylistDetail'
import Welcome from './pages/Welcome';


function App() {

  return (
    <>

      <Routes>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/home' element={<HomeView />} />
        <Route path='/yoga' element={<Yoga />} />
        <Route path='/meditation' element={<Meditation />} />
        <Route path='/music' element={<Playlist />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
    </>
  )
}

export default App;
