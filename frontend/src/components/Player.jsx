import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useEffect, useState } from "react";

export default function Player({ accessToken, playlistUri }) {
  const [play, setPlay] = useState(false);

  useEffect(() => setPlay(true), [playlistUri]);
  if (!accessToken) return null;

  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={(state) => {
        if (!state.isPlaying) setPlay(false);
      }}
      play={play}
      uris={playlistUri ? [playlistUri] : []}
    />
  );
}
