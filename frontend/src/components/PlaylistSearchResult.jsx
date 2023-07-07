import React from 'react'

export default function TrackSearchResult({playlist, choosePlaylist}) {

    const handlePlay = () => {
        choosePlaylist(playlist)
    }

  return (
    <div className='PlaylistResult' onClick={handlePlay}>
        <img className='playlist-cover' src={playlist.albumUrl} width="90px" height="90px"/>
        <div className='playlist-title'>{playlist.title}</div>
    </div>
  )
}
