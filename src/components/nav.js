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
            <div style={{marginBottom:"0px"}} className="jumbotron jumbotron-fluid">
                <h1 className="heading">Aryan Shinde Music App</h1>
            </div>
            <button onClick={()=>{setLibraryCheck(!libraryCheck)}}><FontAwesomeIcon className="nav-burger" size="2x" icon={faAtom}/></button>
            <button onClick={toggleTheme}><FontAwesomeIcon className="nav-burger" size="2x" icon={faEye}/></button>
        </div>
    );
}