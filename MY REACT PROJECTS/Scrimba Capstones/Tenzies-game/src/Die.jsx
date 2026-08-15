import { useState } from "react";

export default function Die({ dieObject, handleClick }) {

  return (
    <button
      className={`die-button ${dieObject.isFrozen ? "bg-green" : ""}`}
      onClick={() => handleClick(dieObject.id)}
    >
      {dieObject.value}
    </button>
  );
}
