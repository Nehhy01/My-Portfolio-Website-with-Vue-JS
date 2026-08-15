import { useState, useEffect } from "react";
import "./App.css";
import Die from "./Die";

function App() {
  const [displayedArray, setDisplayedArray] = useState(() =>
    createRandomDiceArray(),
  );
  const [gameOver, setGameOver] = useState(true);

  useEffect(() => {
    // check for me if all the values are the same and are all frozen, then switch on game over me.
    if(displayedArray.every(eachDie => (eachDie.value === displayedArray[0].value) && (eachDie.isFrozen === true))) {
      console.log("game is over, egbon")
        setGameOver(true);
      }
    else console.log("game on, aburo")
  }, displayedArray);


  function createRandomDiceArray() {
    return Array.from({ length: 10 }, () => ({
      id: Math.ceil(Math.random() * 600021323),
      value: Math.ceil(Math.random() * 6),
      isFrozen: false,
    }));
  }

  function toggleFreeze(id) {
    setDisplayedArray((PrevDie) =>
      PrevDie.map((prev) => {
        if (prev.id === id) {
          return { ...prev, isFrozen: !prev.isFrozen };
        } else return prev;
      }),
    );
  }

  function handleClick(id) {
    toggleFreeze(id);
  }

  function Roll() {
    setGameOver(false)
    // Get me new die values, by......
    if(gameOver) {setDisplayedArray(() => createRandomDiceArray())}

   else setDisplayedArray((PrevDie) =>
      PrevDie.map((prev) => {
        // check if any die is frozen, and leave it
        if (prev.isFrozen) return prev;
        // if its not, change it's value and id
        else {
          return {
            ...prev,
            id: Math.ceil(Math.random() * 600021323),
            value: Math.ceil(Math.random() * 6),
          };
        }
      }),
    );
  }


  const DiceJSX = displayedArray.map((die) => (
    <Die key={die.id} dieObject={die} handleClick={handleClick} />
  ));

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls
      </p>

      <div className="dice-container">{DiceJSX}</div>

       
        <button onClick={Roll} className={`roll-dice ${ gameOver && 'new-game-btn' }`}>
          {gameOver ? 'New Game' : 'Roll'}
        </button>
      
    </main>
  );
}
export default App;
