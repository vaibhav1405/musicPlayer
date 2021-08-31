import React from "react";
import LibrarySong from "./librarySong";
export default function  Library(props){

    return(

        <div className={`library ${props.libraryCheck? "active-lib":""}`}>
            <h2>Library</h2>
            <div className="perSong">
            {props.songs.map((song)=>{
                return <LibrarySong key={song.id} songs={props.songs} setSong={props.setSong} flag={props.flag} setFlag={props.setFlag} name={song.name} audioRef={props.audioRef} song={song} id={song.id} setCurrentSong={props.setCurrentSong} cover={song.cover} />
            })}
            </div>
        </div>
    );
}