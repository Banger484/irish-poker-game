import DrawnCard from "./components/DrawnCard";
import Start from "./components/Start";
import Controls from "./components/Controls";

import { useState } from 'react'

function App() {
  const [controlsPosition, setControlsPosition] = useState('start')
  const [deck, setDeck] = useState([])
  const [firstCard, setFirstCard] = useState({})
  const [secondCard, setSecondCard] = useState({})
  const [thirdCard, setThirdCard] = useState({})
  const [fourthCard, setFourthCard] = useState({})


  function drawCard(position) {
    let newDeck = deck
    let cardIndex = Math.floor(Math.random() * newDeck.length)
    let drawnCard = newDeck[cardIndex]
    newDeck.splice(cardIndex, 1)
    switch(position) {
      case 'first':
        setFirstCard(drawnCard);
        break;
      case 'second':
        setSecondCard(drawnCard);
        break;      
      case 'third':
        setThirdCard(drawnCard);
        break;
      case 'fourth':
        setFourthCard(drawnCard);  
        break; 
      default:
        break;
    }
  }
      
  function startGame() {
    let newDeck = []
    const suits = ['diamonds','hearts','clubs','spades']
    const faces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']

    for (let i = 0; i < suits.length; i++) {
    for (let index = 0; index < faces.length; index++) {
      let cardColor = 'black'
      if(suits[i] === 'diamonds' || suits[i] === 'hearts') {
        cardColor = 'red'
      }
      let newCard = {
        suits: suits[i],
        color: cardColor,
        value: index,
        face: faces[index]
      }
      newDeck.push(newCard)     
    }
  }
    setDeck(newDeck)
    console.log(deck);
  }

  function displayCards() {
  switch(controlsPosition) {
    case 'first':
      return;
    case 'second':
      return (
        <DrawnCard 
        card={firstCard} 
        position='first' 
        />
      )
    case 'third':
      return (
        <>
        <DrawnCard card={firstCard} position='first'/>
        <DrawnCard card={secondCard} position='second'/>
        </>
      )
    case 'fourth':
      return (
        <>
        <DrawnCard card={firstCard} position='first'/>
        <DrawnCard card={secondCard} position='second'/>
        <DrawnCard card={thirdCard} position='third'/>
        </>
      )
      case 'final':
      return (
        <>
        <DrawnCard card={firstCard} suits='hearts' position='first'/>
        <DrawnCard card={secondCard} suits='clubs' position='second'/>
        <DrawnCard card={thirdCard} suits='diamonds' position='third'/>
        <DrawnCard card={fourthCard} suits='spades' position='fourth'/>
        </>
      )
    default:
      break;
  }
  }

  return (
    <div className="game-display">
      <Start cardCount={deck.length}/>
      {displayCards()}
      <Controls
        start={startGame}
        position={controlsPosition} 
        setPosition={setControlsPosition}
        draw={drawCard}
        firstCard={firstCard}
        secondCard={secondCard}
        thirdCard={thirdCard}
        fourthCard={fourthCard}
      />
    </div>
  );
}

export default App;
