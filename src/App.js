import {useState,useEffect} from 'react';
import Player from './components/Player';
function App() {
  const [songs]= useState([
    {
      title: "Portrait",
      artist: "Loud Library",
      img_src: "./images/loudlibarry.jpg",
      src: "./music/Portait RKmixV2.mp3"
    },{
    title: "SideWalkin",
    artist: "Loud Library",
    img_src: "./images/loudlibarry.jpg",
    src: "./music/Sidewalkin RKmixV3.mp3"
  },{
  title: "Little Bird",
  artist: "Getty ",
  img_src: "./images/getty.jpg",
  src: "./music/Final One (7_2_20, V1).mp3"
},{
title: "courts",
artist: "Flourel ",
img_src: "./images/musicpic.jpg",
src: "./music/Groovy Gravy Take 1.mp3"
},
  ]);

  const [currentSongIndex, setCurrentSongIndex]=useState(0);
  const [nextSongIndex, setNextSongIndex]= useState(currentSongIndex+1);
useEffect(()=>{
setNextSongIndex(()=>{
  if(currentSongIndex+1>songs.length-1){
    return 0;
  }else{
    return currentSongIndex+1;
  }
});
}, [currentSongIndex]);
  return (
    <div className="App">
      <Player 

      currentSongIndex={currentSongIndex}
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
      songs={songs}
     />
      
    </div>
  );
}

export default App;
