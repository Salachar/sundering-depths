import { useEffect, useState } from "react";

const rollDie = (sides) => Math.floor(Math.random() * sides) + 1;

export default function Effects({
  character_id = "",
  interactive = false,
  label = "",
  effects = [],
  style = {},
}) {
  const [currentId, setCurrentId] = useState(character_id);
  const [highlightedRoll, setHighlightedRoll] = useState(null);
  const dieMax = Object.keys(effects).length;

  const rollEffect = () => {
    if (!interactive) return;

    const duration = 500;
    const interval = 50;
    let elapsed = 0;

    const intervalId = setInterval(() => {
      elapsed += interval;
      setHighlightedRoll(rollDie(dieMax));

      if (elapsed >= duration) {
        clearInterval(intervalId);
      }
    }, interval);
  };

  useEffect(() => {
    if (character_id === currentId) return;
    setHighlightedRoll(null);
    setCurrentId(character_id);
  }, [character_id]);

  return (
    <div
      className="stat-block"
      style={{
        ...style,
        cursor: interactive ? "pointer" : "default",
      }}
      onClick={rollEffect}
      title={interactive ? "Click to roll" : undefined}
    >
      {label && <h3>{label} {interactive ? "(Click table to roll)" : ""}</h3>}
      <table className="effects">
        <thead>
          <tr>
            <th className="center">Roll</th>
            <th className="center">Damage</th>
            <th>Effects</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(effects).map(([roll, entry]) => (
            <tr
              key={roll}
              className={parseInt(roll, 10) === highlightedRoll ? "highlighted" : ""}
            >
              <td className="bold center">{roll}</td>
              <td className="center">{entry.damage.total}</td>
              <td>
                {entry.effects.map((text, idx) =>
                  text ? <div key={idx}>{text}</div> : null
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
