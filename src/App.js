import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

import "./App.css";
import { getTokenFromUrl } from "./Login/spotify";
import Player from "./Player/Player";
import { useDataLayerValue } from "./DataLayer";
import Login from "./Login/Login";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = " ";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist('37i9dQZF1DX3wwp27Epwn5').then(response=>{
        dispatch({
          type:'SET_GYMSONGS',
          gym_workout:response
        })
      })
      spotify.getMyCurrentPlayingTrack().then(current_song=>{
        dispatch({
          type:'SET_Current',
          current_song:current_song
        })
        console.log(current_song);
        console.log("==========current_song=========");
      })
    }
  }, []);
  return <div className="app">
    {token ? <Player spotify={spotify}/> : <Login />}</div>;
}

export default App;
