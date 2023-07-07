import React from 'react'
import login from '../assets/img/spotify-login.png'

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=162481308a2843359b4127ab067567b3&response_type=code&redirect_uri=http://localhost:5173/music&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';


export default function SpotifyLogin() {
    return (
        <div>
            <a href={AUTH_URL}><img src={login} alt="spotify-login-button" /></a>
        </div>
    )
}
