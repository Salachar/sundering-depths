import { useEffect, useState } from "react";

import { CLASSES } from "../data/builder";
import BuilderManager from "../data/builder";

import ClassButtons from "../components/ClassButtons";
import CharacterTabs from "../components/CharacterTabs";
import CharacterTemplate from "../components/CharacterTemplate";

import "./classes.css";

export default function Classes () {
  const [tabIndex, setTabIndex] = useState(null);

  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [isBuilder, setIsBuilder] = useState(false);

  // Needed to trigger UI updates from the classes
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    checkCharacters();
  }, []);

  const checkCharacters = (currentCharacterOverride) => {
    let currChar = currentCharacter;
    if (currentCharacterOverride !== undefined) {
      currChar = currentCharacterOverride;
    }

    const chars = BuilderManager.characters;
    const char_keys = Object.keys(chars);

    if (!char_keys.length) {
      // No custom characters, set to first class data
      setIsBuilder(false);
      setCurrentCharacter(CLASSES[0].instance);
      return;
    }

    const firstChar = chars[char_keys[0]];
    if (!currChar && firstChar && firstChar.id) {
      // Set to first custom character
      setTabIndex(null);
      setCurrentCharacter(firstChar);
      document.documentElement.style.setProperty('--color-class', firstChar.color);
    }
  }

  const onUpdate = () => {
    BuilderManager.save();
    setTimestamp(Date.now());
  }

  return (
    <>
      <ClassButtons
        currentIndex={tabIndex}
        onClick={({instance, index}) => {
          setTabIndex(index);
          setCurrentCharacter(instance);
          setIsBuilder(false);
          document.documentElement.style.setProperty('--color-class', instance.color);
        }}
        onAdd={({constructor}) => {
          const new_character = new constructor();
          BuilderManager.addCharacter(new_character);
          setTabIndex(null);
          setCurrentCharacter(new_character);
          setIsBuilder(true);
          document.documentElement.style.setProperty('--color-class', constructor.color);
        }}
      />

      <div className="page-content">
        <div className={`character-container ${!Object.keys(BuilderManager.characters).length ? "empty" : ""}`}>
          <div className="character-tabs-container">
            <CharacterTabs
              currentCharacter={currentCharacter}
              onSelect={(character) => {
                setTabIndex(null);
                setCurrentCharacter(character);
                setIsBuilder(true);
                document.documentElement.style.setProperty('--color-class', character.color);
              }}
              onClose={(character, id) => {
                if (currentCharacter && id === currentCharacter?.id) {
                  setCurrentCharacter(null);
                }
                BuilderManager.deleteCharacter(id);
                checkCharacters(null);
                onUpdate();
              }}
            />
          </div>
          <div className="character-data-container">
            {currentCharacter && (
              <CharacterTemplate
                builder={isBuilder}
                character={currentCharacter}
                onUpdate={onUpdate}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
