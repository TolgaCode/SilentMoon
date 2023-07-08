import React, { useState, useEffect } from 'react';
import MeditationPlaylistFirst from '../components/MeditationPlaylistFirst';
import useAuth from '../components/useAuth'
import SpotifyWebApi from 'spotify-web-api-node';
import PopUpPlayer from '../components/PopUpPlayer'
import playbtn from '../assets/img/playbtn.png'
import PlaylistSearchResult from './PlaylistSearchResult';
import Player from './Player';
import Navbar from './Navbar';
import '../sass/Dashboard.scss'
import xBtn from '../assets/img/xBtn.png'


export default function Dashboard({ code, props }) {
  const accessToken = useAuth(code);
  // const [search, setSearch] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  // const [playingPlaylist, setPlayingPlaylist] = useState();

  const [buttonPopup, setButtonPopup] = useState(false);

  const spotifyApi = new SpotifyWebApi({
    clientId: '162481308a2843359b4127ab067567b3',
  })

  // console.log(accessToken)
  // const choosePlaylist = (playlist) => {
  //   setPlayingPlaylist(playlist);
  //   setSearch("");
  // }

  // useEffect(() => {
  //   if (!accessToken) return
    
  //   spotifyApi.setAccessToken(accessToken);
  // }, [accessToken]);


  // useEffect(() => {
  //   if (!search) return setSearchResults([]);
  //   if (!accessToken) return;
   
  //   let cancel = false
  //   spotifyApi.searchPlaylists(search).then(res => {
  //     if (cancel) return
  //     //Searching for Playlists
  //     setSearchResults(
  //       res.body.playlists.items.map((playlist) => {
  //       return {
  //         title: playlist.name,
  //         uri: playlist.uri,
  //         albumUrl: playlist.images[0].url
  //       }
  //     }))
  //   });
  //   return () => cancel = true;
  // }, [search, accessToken]);


  return (
    <div className='spotify-head'>  
      <h1 className='logoDark'>SILENT MOON</h1>
      <div className='meditation-tipps'>
        <h5 className='meditation-h5'>5 tips for BEFORE your meditation</h5>
        <p className='meditation-p'>1. Start early. Try to meditate first thing in the morning.</p>
        <p className='meditation-p'>2. Same time, same place. If you can't meditate in the morning, try to make a commitment to meditating at the same time and in the same place every day.</p>
        <p className='meditation-p'>3. Yes, it's recommended that your regular meditation practice happens in the same place every day for consistency. </p>
        <p className='meditation-p'>4. Don't sit cross-legged, if you don't think it's comfortable.</p>
        <p className='meditation-p'>5. Find the best position for you.</p>
      </div>
      <main className='playbtns'>
        <img className='playlist-play-btn' src={playbtn} alt=""  onClick={() => setButtonPopup(true)} width="200px" height="200px"/>
        <div className='playlist-information'>
        <h3>Guided Meditation</h3>
        <p>Playlist by Spotify</p>
        </div>
      </main>
      <PopUpPlayer trigger={buttonPopup} setTrigger={setButtonPopup}>
      <MeditationPlaylistFirst
        accessToken={accessToken} 
        />
      </PopUpPlayer>
      {/* <input className='input' type="" placeholder="Search for Music" value={search} onChange={e => setSearch(e.target.value)} />
      <div className='songs'>
        {searchResults.map(playlist => (
          <PlaylistSearchResult
            playlist={playlist}
            key={playlist.uri}
            choosePlaylist={choosePlaylist}
          />
        ))}
      </div> */}
      {/* <div className='player'>
        <Player 
        accessToken={accessToken} 
        playlistUri={playingPlaylist?.uri} 
        />
      </div> */}
      <Navbar />
    </div>

  )
  
}


