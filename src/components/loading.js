import React from "react";
export default function Loading({loadContent,setLoadContent}){
    return(
        <div className={ `loading-page ${loadContent===true ? "load-page": "no-load-page"}`}>
        <div className="circle">
        <div className={ `${loadContent===true ? "load-circle": ""}`}></div>
        </div>
        </div>
    );
}