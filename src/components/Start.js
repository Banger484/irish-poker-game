import React from 'react'

export default function Start(props) {
  return (
    <div className='start-display'>
        <h1 className='game-title'>Irish Poker</h1>
        <p className='card-count'>Cards Remaining: {props.cardCount}</p>
    </div>
  )
}
