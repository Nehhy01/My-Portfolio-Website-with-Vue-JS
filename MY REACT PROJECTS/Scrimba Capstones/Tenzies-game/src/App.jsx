import { useState, useEffect } from "react";
import "./App.css";
import Die from "./Die";
import Confetti from "react-confetti";
import { useWindowDimensions } from "./useWindowDimensions";
import { nanoid } from "nanoid";

function App() {
  const [displayedArray, setDisplayedArray] = useState(() =>
    createRandomDiceArray(),
  );
  const [gameOver, setGameOver] = useState(null);

  useEffect(() => {
    // check for me if all the values are the same and are all frozen, then switch on game over me.
    if (
      displayedArray.every(
        (eachDie) =>
          eachDie.value === displayedArray[0].value && eachDie.isFrozen,
      )
    ) {
      console.log("game is over, egbon");
      setGameOver(true);
    } else console.log("game on, aburo");
  }, displayedArray);

  function createRandomDiceArray() {
    return Array.from({ length: 10 }, () => ({
      id: nanoid(),
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
    // Get me new die values, by......

    setDisplayedArray((PrevDie) =>
      PrevDie.map((prev) => {
        // check if any die is frozen, and leave it
        if (prev.isFrozen) return prev;
        // if its not, change it's value and id
        else {
          return {
            ...prev,
            id: nanoid(),
            value: Math.ceil(Math.random() * 6),
          };
        }
      }),
    );
  }
  function newGame() {
    setGameOver(false);
    setDisplayedArray(createRandomDiceArray());
  }

  const DiceJSX = displayedArray.map((die) => (
    <Die key={die.id} dieObject={die} handleClick={handleClick} />
  ));

  const { width, height } = useWindowDimensions();
  return (
    <main>
      {gameOver && <Confetti width={width} height={height} />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls
      </p>

      <div className="dice-container">{DiceJSX}</div>

      {gameOver && (
        <button onClick={newGame} className={`roll-dice new-game-btn`}>
          {" "}
          New Game
        </button>
      )}

      {!gameOver && (
        <button onClick={Roll} className={`roll-dice`}>
          Roll
        </button>
      )}
    </main>
  );
}
export default App;
