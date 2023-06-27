// import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import HomeView from './pages/HomeView';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';


function App() {

  return (
    <>
      <h1>Silent MooN</h1>
      <Routes>
        <Route path='/home' element={<HomeView />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
    </>
  )
}

export default App;
