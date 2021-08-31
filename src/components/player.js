import React,{useRef,useState} from "react";
import Library from "./library";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faBackward, faForward, faPause } from "@fortawesome/free-solid-svg-icons";
export default function Player(props){


    const audioRef=useRef(null);
    const [songInfo,setSongInfo]=useState({
        currentTime:0,
        duration:0
    });

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

    return(  
        <div className="player">
            <div className="time-control">
                <h4>{setCTime(songInfo.currentTime)}</h4>
                <input type="range" onChange={setInput} value={songInfo.currentTime} min="0" max={songInfo.duration} />
                <h4>{setCTime(songInfo.duration)}</h4>
            </div>
            <div className="controllers">
            <FontAwesomeIcon size="2x" icon={faBackward}/>
            <FontAwesomeIcon onClick={audioHandler} size="2x" icon={ props.flag ? faPlay:faPause}/>
            <FontAwesomeIcon size="2x" icon={faForward}/>
            </div>
            <audio onTimeUpdate={getTime} onLoadedMetadata={getTime} ref={audioRef} src={props.currentSong.audio}></audio>
            <Library libraryCheck={props.libraryCheck} setSong={props.setSong} flag={props.flag} audioRef={audioRef} setCurrentSong={props.setCurrentSong} currentSong={props.currentSong} setFlag={props.setFlag} songs={props.songs}/>
        </div>
    );
}