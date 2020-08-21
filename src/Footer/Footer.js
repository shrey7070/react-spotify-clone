import React from "react";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { Grid, Slider } from "@material-ui/core";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

import { useDataLayerValue } from "../DataLayer";
import "./Footer.css";

function Footer({spotify}) {
  const [{current_song}]=useDataLayerValue();
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumlogo" 
        src={current_song?current_song?.item?.album?.images[0].url:"__h"} alt="" />
        <div className="footer__songInfo">
          <h4>{current_song?current_song?.item?.name:"No Currently played"}</h4>
            <p>{current_song?.item?.artists[0].name}</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__green" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
