import React from 'react'

export default function DrawnCard(props) {
    console.log(props);
    let imageSrc = `./images/${props.card.suits}.png`
  return (
    <div  className={props.position + ' drawn-card'}>
        <h1 className={props.card.color +' face'}>{props.card.face}</h1>
        <img className='suits' src={imageSrc} alt='' />
    </div>
  )
}
