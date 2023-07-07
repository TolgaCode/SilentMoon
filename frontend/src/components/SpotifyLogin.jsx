import React from 'react'
import login from '../assets/img/spotify-login.png'
import Navbar from "../components/Navbar";
import '../sass/SpotifyLogin.scss'


const AUTH_URL = import.meta.env.VITE_SPOTIFY_URL


export default function SpotifyLogin() {
    return (
        <div className='spotify-login-div'>
            <h1 className='logoDark'>SILENT MOON</h1>
            <h2 className='playlist-h1'>Login to Spotify for a weekly updated guided meditation</h2>
            <p className='playlist-p'>You will automatically be redirected to this page after login.</p>
            <a className='spotify-link' href={AUTH_URL}><img className='spotifyBtn' src={login} alt="spotify-login-button" /></a>
            <Navbar />
        </div>
    )
}
