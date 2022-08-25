import React from "react";

export default function Controls(props) {

function advanceGame() {
    switch (props.position) {
        case "first":
        //   props.draw("first");
          props.setPosition("second");
          break;
        case "second":
        //   props.draw("second");
          props.setPosition("third");
          break;
        case "third":
        //   props.draw("third");
          props.setPosition("fourth");
          break;
        case "fourth":
        //   props.draw("fourth");
          props.setPosition("final");
          break;
        case "final":
          props.setPosition("first");
          break;
        case "start":
          props.start();
          props.setPosition("first");
          break;
        default:
          break;
      }
}

function evaluate(choice) {
 
    switch(choice) {
        case 'red':
            console.log(choice);
            console.log(props.firstCard);
            break;
        default:
            break;
    }
}


  function handleClick(e) {
    console.log();
    let choice = e.target.dataset.choice;
    switch(choice) {
        case 'start':
            console.log(props.deck);
            advanceGame()
            props.draw('first')
            break;
        case 'red':
            // props.draw('second')
            // console.log(props.firstCard);
            // evaluate(choice)
            break;
        default:
            break;
    }
  }
  function switchButtons(position) {
    switch (position) {
      case "start":
        return (
          <button
            data-choice={"start"}
            className="red-btn"
            onClick={handleClick}
          >
            Start Game
          </button>
        );
      case "first":
        return (
          <>
            <button
              data-choice={"red"}
              className="red-btn"
              onClick={handleClick}
            >
              Red
            </button>
            <button data-choice={"black"} onClick={handleClick}>
              Black
            </button>
          </>
        );
      case "second":
        return (
          <>
            <button
              data-choice={"higher"}
              className="red-btn"
              onClick={handleClick}
            >
              Higher
            </button>
            <button data-choice={"lower"} onClick={handleClick}>
              Lower
            </button>
          </>
        );
      case "third":
        return (
          <>
            <button
              data-choice={"inside"}
              className="red-btn"
              onClick={handleClick}
            >
              Inside
            </button>
            <button data-choice={"outside"} onClick={handleClick}>
              Outside
            </button>
          </>
        );
      case "fourth":
        return (
          <>
            <button
              data-choice={"diamonds"}
              className="red-btn"
              onClick={handleClick}
            >
              Diamonds
            </button>
            <button data-choice={"clubs"} onClick={handleClick}>
              Clubs
            </button>
            <button
              data-choice={"hearts"}
              className="red-btn"
              onClick={handleClick}
            >
              Hearts
            </button>
            <button data-choice={"spades"} onClick={handleClick}>
              Spades
            </button>
          </>
        );
      case "final":
        return (
          <>
            <button
              data-choice={"continue"}
              className="red-btn"
              onClick={handleClick}
            >
              Keep Going!
            </button>
          </>
        );
      default:
        break;
    }
  }

  return (
    <div className={"controls " + props.position + "-controls"}>
      {switchButtons(props.position)}
    </div>
  );
}
