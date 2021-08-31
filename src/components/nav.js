import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";

export default function Nav({libraryCheck,setLibraryCheck}){
    return(
        <div className="nav"  >
            <h1>AryanS</h1>
            <button onClick={()=>{setLibraryCheck(!libraryCheck)}}><FontAwesomeIcon className="nav-burger" size="2x" icon={faAtom}/></button>
        </div>
    );
}