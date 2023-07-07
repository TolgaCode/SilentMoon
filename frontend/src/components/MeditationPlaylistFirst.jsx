import {useEffect, useState} from 'react';
import SpotifyPlayer  from 'react-spotify-web-playback';
import SpotifyWebApi from 'spotify-web-api-node';


export default function MeditationPlaylistFirst({ accessToken }) {
  const [play, setPlay] = useState(false);
  const [pictureClicked, setPictureClicked] = useState(false);
  
  const handlePictureClick = () => {
    setPictureClicked(!pictureClicked);
  };

  useEffect(() => setPlay(true), ["37i9dQZF1DWVS1recTqXhf"])

  const spotifyApi = new SpotifyWebApi({
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
  });
  
  spotifyApi.setAccessToken(accessToken);

  spotifyApi.getPlaylist('37i9dQZF1DWVS1recTqXhf')
  .then(function(data) {
    console.log('Some information about this playlist', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });
  
  return (
    <div>
        <SpotifyPlayer 
        token={accessToken}
        showSaveIcon
        play={play}
        uris="spotify:playlist:37i9dQZF1DWVS1recTqXhf"
        />
    </div>
  )
}
