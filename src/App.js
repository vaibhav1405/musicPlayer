import { useState } from 'react';
import Player from './components/player';
import Song from './components/song';
import "./styles/app.scss";
import data from "./utils.song/songInfo";
import Nav from "./components/nav"
function App() {

  const [song,setSong]=useState(data());
  const [currentSong,setCurrentSong]=useState(song[4]);
  const [flag,setFlag]=useState(true);
  const [libraryCheck,setLibraryCheck]=useState(false);


  return (
    <div className="App">
      <Nav libraryCheck={libraryCheck} setLibraryCheck={setLibraryCheck} />
     <Song currentSong={currentSong}/>
     <Player libraryCheck={libraryCheck} setCurrentSong={setCurrentSong} setSong={setSong} setFlag={setFlag} flag={flag} currentSong={currentSong} songs={song} />

    </div>
  );
}

export default App;
