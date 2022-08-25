import React from 'react'

export default function DrawnCard(props) {

  return (
    <div  className={props.position + ' drawn-card'}>
        <h1 className={props.color +' face'}>K</h1>
        <img className='suits' src={`./images/${props.suits}.png`} alt='' />
    </div>
  )
}
