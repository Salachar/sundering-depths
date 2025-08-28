import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { CLASSES } from "../data/builder";
import BuilderManager from "../data/builder";

import ClassButtons from "../components/ClassButtons";
import CharacterTabs from "../components/CharacterTabs";
import CharacterTemplate from "../components/CharacterTemplate";

import "./classes.css";


const setClassColor = (classData) => {
  let data = classData;
  if (classData.instance) classData = classData.instance;
  if (!classData.color) return;
  document.documentElement.style.setProperty('--color-class', classData.color);
}

export default function Classes () {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [tabIndex, setTabIndex] = useState(null);

  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [isBuilder, setIsBuilder] = useState(false);

  // Needed to trigger UI updates from the classes
  const [timestamp, setTimestamp] = useState(Date.now());

  useEffect(() => {
    checkCharacters(null, slug);
  }, []);

  const setCharAndColor = (character) => {
    setCurrentCharacter(character);
    setClassColor(character);
  }

  const checkCharacters = (currentCharacterOverride, slug) => {
    let currChar = currentCharacter;
    if (currentCharacterOverride !== undefined) {
      currChar = currentCharacterOverride;
    }

    if (slug) {
      for (let i = 0; i < CLASSES.length; ++i) {
        const class_data = CLASSES[i];
        if (class_data.id === slug) {
          setIsBuilder(false);
          setTabIndex(i);
          setCharAndColor(class_data.instance);
          return;
        }
      }
    }

    const chars = BuilderManager.characters;
    const char_keys = Object.keys(chars);

    if (!char_keys.length) {
      setIsBuilder(false);
      setTabIndex(0);
      setCharAndColor(CLASSES[0].instance);
      return;
    }

    if (slug) {
      for (let i = 0; i < char_keys.length; ++i) {
        const char_key = char_keys[i];
        if (char_key === slug) {
          setIsBuilder(true);
          setTabIndex(null);
          setCharAndColor(chars[char_key]);
          return;
        }
      }
    }

    const firstChar = chars[char_keys[0]];
    if (!currChar && firstChar && firstChar.id) {
      setIsBuilder(true);
      setTabIndex(null);
      setCharAndColor(firstChar);
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
          setCharAndColor(instance);
          setIsBuilder(false);
          navigate(`/classes/${instance.class_id}`);
        }}
        onAdd={({constructor}) => {
          const new_character = new constructor();
          BuilderManager.addCharacter(new_character);
          setTabIndex(null);
          setCharAndColor(new_character);
          setIsBuilder(true);
          navigate(`/classes/${new_character.id}`);
        }}
      />

      <div className="page-content">
        <div className={`character-container ${!Object.keys(BuilderManager.characters).length ? "empty" : ""}`}>
          <div className="character-tabs-container">
            <CharacterTabs
              currentCharacter={currentCharacter}
              onSelect={(character) => {
                setTabIndex(null);
                setCharAndColor(character);
                setIsBuilder(true);
                navigate(`/classes/${character.id}`);
              }}
              onClose={(character, id) => {
                if (currentCharacter && id === currentCharacter?.id) {
                  setCurrentCharacter(null);
                  navigate(`/classes`);
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
