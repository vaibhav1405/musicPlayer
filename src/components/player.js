import React,{useEffect, useRef,useState} from "react";
import Library from "./library";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faBackward, faForward, faPause } from "@fortawesome/free-solid-svg-icons";
export default function Player(props){


    const audioRef=useRef(null);
    const [songInfo,setSongInfo]=useState({
        currentTime:0,
        duration:0
    });
    useEffect(()=>{
        const newSongs=props.songs.map(s=>{
            if(s.id===props.currentSong.id){
                return {...s,active:true};
            }
            else{
                return {...s,active:false};
            }
        })
        props.setSong(newSongs);
    
    },[props.currentSong]);
    function audioHandler(){
        if(props.flag){
        audioRef.current.play();
        props.setFlag(false);
        }
        else{
            audioRef.current.pause()
            props.setFlag(true);
        }
    }

    function setCTime(time){
        return Math.floor(time/60) + ":" + Math.floor(time/10)%6 + Math.floor(time%10); 
    }
    function getTime(e){
        setSongInfo({...songInfo,currentTime:e.target.currentTime,duration:Math.floor(e.target.duration)})
    }
    function setInput(e){
        setSongInfo({...songInfo,currentTime:e.target.value});
        audioRef.current.currentTime=e.target.value;

    }
    function SetDirection(direction){
        let currentIndex=props.songs.findIndex((song)=>song.id===props.currentSong.id);
        if(props.flag===false){
            props.setFlag(true);
        }
        // let currentIndex=props.songs.indexOf(props.currentSong);
        if(direction==="skip-forward"){
            props.setCurrentSong(props.songs[(currentIndex+1)%props.songs.length]);
        }
        if(direction==="skip-backward"){
            if(currentIndex===0){
                props.setCurrentSong(props.songs[props.songs.length-1]);
            }
            else{
            props.setCurrentSong(props.songs[(currentIndex-1)%props.songs.length]);
            }
        }
        
    }

    return(  
        <div className="player">
            <div className="time-control">
                <h4>{setCTime(songInfo.currentTime)}</h4>
                <input type="range" onChange={setInput} value={songInfo.currentTime} min="0" max={songInfo.duration} />
                <h4>{setCTime(songInfo.duration)}</h4>
                <p>{songInfo.duration==null ? songInfo.duration="0:00":""}</p>
            </div>
            <div className="controllers">
            <FontAwesomeIcon size="2x" onClick={()=>SetDirection("skip-backward")} icon={faBackward}/>
            <FontAwesomeIcon onClick={audioHandler}  size="2x" icon={ props.flag ? faPlay:faPause}/>
            <FontAwesomeIcon size="2x" onClick={()=>SetDirection("skip-forward")} icon={faForward}/>
            </div>
            <audio onTimeUpdate={getTime} onLoadedMetadata={getTime} ref={audioRef} src={props.currentSong.audio}></audio>
            <Library libraryCheck={props.libraryCheck} setSong={props.setSong} flag={props.flag} audioRef={audioRef} setCurrentSong={props.setCurrentSong} currentSong={props.currentSong} setFlag={props.setFlag} songs={props.songs}/>
        </div>
    );
}