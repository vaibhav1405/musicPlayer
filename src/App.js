import { useState } from 'react';
import Player from './components/player';
import Song from './components/song';
import "./styles/app.scss";
import data from "./utils.song/songInfo";
import Nav from "./components/nav";
import Loading from './components/loading';
function App() {
  const randomIndex = Math.floor(Math.random() * data().length - 1);
  const [song,setSong]=useState(data());
  const [currentSong,setCurrentSong]=useState(song[randomIndex]);
  const [flag,setFlag]=useState(true);
  const [libraryCheck,setLibraryCheck]=useState(false);
  const [loadContent,setLoadContent]=useState(true);
  window.addEventListener("DOMContentLoaded",function (){ setTimeout(()=>{
    setLoadContent(false);
  },2000)

});
 


  return (
    <div className={`App`}>
      <Loading loadContent={loadContent} setLoadContent={setLoadContent}/>
      <Nav libraryCheck={libraryCheck} setLibraryCheck={setLibraryCheck} />
      <div className={`${libraryCheck ? "app-active":"app-no-active"}`}>
     <Song currentSong={currentSong}/>
     <Player libraryCheck={libraryCheck} setCurrentSong={setCurrentSong} setSong={setSong} setFlag={setFlag} flag={flag} currentSong={currentSong} songs={song} />
    </div>
    </div>
  );
}

export default App;
