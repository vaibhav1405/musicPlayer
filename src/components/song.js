import React from "react";

export default function Song(props){
    return(
        <div className="song">
            <img src={props.currentSong.cover} alt="" />
            <h1>{props.currentSong.name}</h1>
            <audio src=""></audio>
        </div>
    );
}
