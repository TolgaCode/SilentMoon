import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomeView from './pages/HomeView';

function App() {


  return (
    <>
      <h1>Silent Moon</h1>
      <Routes>
        <Route path='/home' element={<HomeView />} />
      </Routes>
    </>
  )
}

export default App
