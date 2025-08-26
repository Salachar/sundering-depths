import Dice from "./Dice";

export default function Weapon({
  builder = false,
  label = "",
  character = {},
  style = {},
}) {
  const weapon = character.weapon;
  const STR = character.stats.STR;

  return (
    <div style={style}>
      {label && <h3>{label}</h3>}
      <div className="character-weapon" style={style}>
        <div className="mb-1">
          <h2>{weapon.name}</h2>
        </div>
        <div className="mb-1">
          <Dice
            type="weapon"
            label={`Hit: 1d12 ${STR ? `+ ${STR}` : ""}`}
            character_id={character.id}
            dice="1d12"
            mod={STR}
            rollable={builder}
          />
        </div>
        <div>
          <Dice
            type="damage"
            label={`Damage: ${weapon.damage}`}
            character_id={character.id}
            dice={weapon.damage}
            ignore={weapon.ignore}
            rollable={builder}
          />
        </div>

        <p>{weapon.description}</p>
      </div>
    </div>
  );
};
