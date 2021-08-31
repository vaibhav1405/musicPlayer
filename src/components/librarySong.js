import React from "react";

export default function LibrarySong(props){
    function setSongFun(e){
        const newSongs=props.songs.map(s=>{
            if(s.id===props.id){
                return {...s,active:true};
            }
            else{
                return {...s,active:false};
            }
        })
        props.setSong(newSongs);
    

        props.setCurrentSong(props.song);
        if(props.flag===false){
        const playPromise=props.audioRef.current.play();
        if(playPromise!==undefined){
            playPromise.then((prom)=>{
                props.audioRef.current.play();
                props.setFlag(false)
            })
        }
        }
    }

    return(
        <div onClick={setSongFun} className={`lib-song ${props.song.active?"active":""}`}>
        <img alt={props.song.name} src={props.cover}></img>
        <h4>{props.name}</h4>
        </div>
    )
}