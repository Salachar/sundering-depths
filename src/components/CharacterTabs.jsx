import BuilderManager from "../data/builder";

import "./characterTabs.css"

export default function CharacterTabs ({
  currentCharacter,
  onSelect = () => {},
  onClose = () => {},
}) {
  return (
    <div className="character-tabs">
      {Object.keys(BuilderManager.characters).map((id) => {
        const character = BuilderManager.characters[id];
        const curr = currentCharacter && currentCharacter.id === id;
        return (
          <div
            key={`key_character_${id}`}
            className={`tab ${curr ? "selected" : ""}`}
            style={{
              borderColor: character.color,
            }}
          >
            <button className="name" onClick={() => {
              onSelect(character);
            }}>
              {`${character.name || "No Name"} (${character.class})`}
            </button>
            {/* <button
              className="close"
              onClick={() => {
                onClose(character, id);
              }}
            >&times;</button> */}
          </div>
        );
      })}
    </div>
  );
}
