import React from 'react'
import login from '../assets/img/spotify-login.png'
import '../sass/SpotifyLogin.scss'


const AUTH_URL = import.meta.env.VITE_SPOTIFY_URL


export default function SpotifyLogin() {
    return (
        <div className='spotify-login-div'>
            <h1 className='playlist-h1'>Login to spotify for a weekly updated guided meditation</h1>
            <p className='playlist-p'>You will automatically be redirected to this page after login.</p>
            <a href={AUTH_URL}><img src={login} alt="spotify-login-button" className='spotifyBtn' /></a>
            {/* <a href={AUTH_URL}>LOGIN</a> */}
        </div>
    )
}
