import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import './App.scss'
import { Routes, Route } from 'react-router-dom';
import Yoga from './pages/Yoga'
import HomeView from './pages/HomeView';
import SignUp from './components/SignUp';
import Meditation from './pages/Meditation';
import Profile from './pages/ProfilPage';
import LogIn from './components/LogIn';
import Playlist from './pages/PlaylistDetail'
import LandingPage from './pages/LandingPage';
import Welcome from './pages/Welcome';
import Video from './pages/Video';
import ProtectedRoute from './components/ProtectedRoute';



function App() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/' element={<LandingPage />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path='/yoga' element={<Yoga />} />
          <Route path='/meditation' element={<Meditation />} />
          <Route path='/music' element={<Playlist />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/video/:id' element={<Video />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/home' element={<HomeView />} />
        </Route>
      </Routes >
    </>
  )
}

export default App;
