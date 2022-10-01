import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom,faEye } from "@fortawesome/free-solid-svg-icons";

export default function Nav({libraryCheck,setLibraryCheck , setTheme , theme}){
    const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      };
    return(
        <div className="nav"  >
            <h1>AryanS</h1>
            <button onClick={()=>{setLibraryCheck(!libraryCheck)}}><FontAwesomeIcon className="nav-burger" size="2x" icon={faAtom}/></button>
            <button onClick={toggleTheme}><FontAwesomeIcon className="nav-burger" size="2x" icon={faEye}/></button>
        </div>
    );
}