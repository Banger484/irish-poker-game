import DrawnCard from "./components/DrawnCard";
import Start from "./components/Start";
import Controls from "./components/Controls";

import { useState } from 'react'

function App() {
  const [controlsPosition, setControlsPosition] = useState('first')

  return (
    <div className="game-display">
      <Start cardCount={52}/>
      <DrawnCard suits='hearts' position='first' color='red'/>
      <DrawnCard suits='clubs' position='second' color='black'/>
      <DrawnCard suits='diamonds' position='third' color='red'/>
      <DrawnCard suits='spades' position='fourth' color='black'/>
      <Controls position={controlsPosition} setPosition={setControlsPosition}/>
    </div>
  );
}

export default App;
