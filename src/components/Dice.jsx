import React, { useEffect, useState } from "react";

import { rollDie } from "../utils/dice";

import "./dice.css";


export default function Dice({
  type = "",
  label = "",
  character_id = "", // Changes will reset the dice
  dice = "1d6",
  mod = 0,
  ignore = "",
  rollable = false,
}) {
  const [currentId, setCurrentId] = useState(character_id);
  const [diceStates, setDiceStates] = useState([]);
  const [dieMax, setDieMax] = useState(6);
  const [rolled, setRolled] = useState(false);

  useEffect(() => {
    let amount = 1;
    let max = 6;

    if (typeof dice === "string" && dice.includes("d")) {
      const [count, sides] = dice.split("d").map(Number);
      amount = isNaN(count) ? 1 : count;
      max = isNaN(sides) ? 6 : sides;
    }

    setDieMax(max);
    setDiceStates(Array.from({ length: amount }, () => ""));
  }, [dice]);

  useEffect(() => {
    if (character_id === currentId) return;
    setCurrentId(character_id);
    setRolled(false);
  }, [character_id]);

  const getIgnoredValue = (die_value) => {
    if (!die_value) return 0;
    if (isIgnored(die_value)) return 0;
    return die_value;
  }

  const isIgnored = (die_value) => {
    if (!die_value) return false;
    if (!ignore) return false;

    if (ignore && die_value === ignore) {
      return true;
    }
    if (ignore === "odd" && die_value % 2 === 1) {
      return true;
    }
    if (ignore === "even" && die_value % 2 === 0) {
      return true;
    }

    return false;
  }

  const animateDie = (index) => {
    // Either the roll button or a die was clicked, either way, the component
    // has now officially been interacted with
    if (!rolled) setRolled(true);

    const duration = 500; // ms
    const interval = 50;
    let elapsed = 0;

    const intervalId = setInterval(() => {
      elapsed += interval;

      setDiceStates(prev => {
        const copy = [...prev];
        copy[index] = rollDie(dieMax);
        return copy;
      });

      if (elapsed >= duration) {
        clearInterval(intervalId);
        setDiceStates(prev => {
          const copy = [...prev];
          copy[index] = rollDie(dieMax);
          return copy;
        });
      }
    }, interval);
  };

  const rerollAll = () => {
    for (let i = 0; i < diceStates.length; i++) {
      animateDie(i);
    }
  };

  const getTotal = () => {
    if (!diceStates || !diceStates.length) return null;
    let total = 0;
    for (let i = 0; i < diceStates.length; i++) {
      total += getIgnoredValue(diceStates[i]);
    }
    total += mod;
    return total;
  }

  return (
    <>
      {label && (
        <h3>{label}</h3>
      )}
      {rollable && (
        <div className="dice-wrapper">
          <button onClick={rerollAll}>
            Roll
          </button>

          <div className="dice-group">
            {diceStates.map((value, idx) => (
              <React.Fragment key={`key_${type}_dice+${idx}`}>
                {idx !== 0 && (
                  <span>+</span>
                )}
                <div
                  key={`key_${type}_${idx}`}
                  className="dice-container"
                  onClick={() => animateDie(idx)}
                  title="Click to reroll"
                >
                  <div className={`dice-shell d${dieMax}`}>
                    <div className={`dice d${dieMax}`} />
                    <div className={`dice-number ${isIgnored(value) ? "ignore" : ""}`}>{rolled ? value : ""}</div>
                  </div>
                </div>
              </React.Fragment>
            ))}
            {mod !== 0 && (
              <>
                <span>+</span>
                <span>{mod}</span>
              </>
            )}
            {rolled && (
              <>
                <span>=</span>
                <span>{getTotal()}</span>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
