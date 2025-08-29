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
            onClick={() => {
              console.log('thing')
              onSelect(character);
            }}
            style={{
              borderColor: character.color,
            }}
          >
            <div className="class">{character.class}</div>
            <div className="name">{character.name || "No Name"}</div>
            <button
              className="close"
              onClick={(e) => {
                e.stopPropagation();
                if (!curr) return;
                onClose(character, id);
              }}
            >&times;</button>
          </div>
        );
      })}
    </div>
  );
}
