import React from "react";
import Player from "./player";
import arr from "./players";
import "./index.css";
const PlayersList = () => {
  return (
    <div  className="parent" >
      {arr.map((el) =>  <Player x={el}  /> )}
     
      
    </div>
  );
};

export default PlayersList;
