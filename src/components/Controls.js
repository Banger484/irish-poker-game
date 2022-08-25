import React from 'react'

export default function Controls(props) {

    function handleClick() {
        switch(props.position) {
            case 'first':
                props.setPosition('second');
                break;
            case 'second':
                props.setPosition('third');
                break;
            case 'third':
                props.setPosition('fourth');
                break;
            case 'fourth':
                props.setPosition('first');
                break;
            default:
                break;
        }

    }
    function switchButtons(position) {
        switch(position) {
            case 'first':
                return (
                    <div>
                        <button onClick={handleClick}>Red</button>
                        <button onClick={handleClick}>Black</button>
                    </div>
                );
            case 'second':
                return (
                    <div>
                        <button onClick={handleClick}>Higher</button>
                        <button onClick={handleClick}>Lower</button>
                    </div>
                );
            case 'third':
                return (
                    <div>
                        <button onClick={handleClick}>Inside</button>
                        <button onClick={handleClick}>Outside</button>
                    </div>
                );
            case 'fourth':
                return (
                    <div>
                        <button onClick={handleClick}>Clubs</button>
                        <button onClick={handleClick}>Diamonds</button>
                        <button onClick={handleClick}>Hearts</button>
                        <button onClick={handleClick}>Spades</button>
                    </div>
                );
            default:
                break;
        }
    }

  return (
    <div className={'controls ' + props.position + '-controls'}>
        {switchButtons(props.position)}

    </div>
  )
}
