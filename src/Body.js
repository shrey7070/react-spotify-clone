import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";
import { useDataLayerValue } from "./DataLayer";

function Body({ spotify }) {
  const [{ gym_workout }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={gym_workout?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{gym_workout?.name}</h2>
          <p>{gym_workout?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {gym_workout?.tracks?.items.map((item)=>(
            <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
