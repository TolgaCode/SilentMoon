// import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomeView from './pages/HomeView'
import Yoga from './pages/Yoga';


function App() {

  return (
    <>
      <h1>Silent MooN</h1>
      <Routes>
        <Route path='/homeview' element={<HomeView />} />
        <Route path='/yoga' element={<Yoga />} />
      </Routes>
    </>
  )
}

export default App