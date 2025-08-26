import Weapon from "./Weapon";
import Definitions from "./Definitions";
import Effects from "./Effects";
import StatButton from "./StatButton";

import "./characterTemplate.css";

export default function CharacterTemplate({
  builder = false,
  character = null,
  onUpdate = () => {},
}) {
  if (!character) return null;

  return (
    <>
      {!builder && (
        <div className="stat-block mb-b">
          {character.description.map((paragraph, index) => (
            <p key={`${character.class}_desc_${index}`}>
              {paragraph}
            </p>
          ))}
        </div>
      )}

      <div className={`stat-block no-borders ${builder ? "mb-b" : "mv-b"}`}>
        <div className="character-meta">
          <h1>{character.class}</h1>
          <div className="character-descriptors">
            {character.descriptors.map((desc, index) => (
              <div key={`${character.class}_meta_${index}`}>
                <span className="tshadow-black">{desc}</span>
              </div>
            ))}
          </div>
        </div>

        {builder && (
          <div className="character-name-container">
            {!character.locked && (
              <input
                type="text"
                className="character-name"
                placeholder="Name"
                value={character.name}
                onChange={(e) => {
                  character.name = e.target.value;;
                  onUpdate();
                }}
              />
            )}
            {character.locked && (
              <div className="character-name-locked">
                <h1>{character.name}</h1>
              </div>
            )}
            <button
              className="lock-button"
              type="button"
              onClick={() => {
                character.toggleLock();
                onUpdate();
              }}
            >
              {character.locked ? "Unlock" : "Lock"}
            </button>
          </div>
        )}

        {builder && (
          <div className="character-health">
            <div className="bar-background">
              <div
                className="bar-foreground"
                style={{ width: `${(character.current_health / character.max_health) * 100}%` }}
              ></div>
            </div>
            <button className="left" onClick={() => {
              character.current_health = character.current_health - 1;
              onUpdate();
            }}>−</button>
            <div className="text">
              <span>{character.current_health}</span>
              <span>/</span>
              <span>{character.max_health}</span>
            </div>
            <button className="right" onClick={() => {
              character.current_health = character.current_health + 1;
              onUpdate();
            }}>+</button>
          </div>
        )}

        {builder && (
          <div className="character-stats">
            {!character.locked && (
              <h3>Stat Points: {character.stat_points}</h3>
            )}

            <div className="stats">
              <StatButton
                locked={character.locked}
                stat="STR"
                value={character.stats.STR}
                onChange={(mod) => {
                  character.str = character.str + mod;
                  onUpdate();
                }}
              />
              <StatButton
                locked={character.locked}
                stat="DEX"
                value={character.stats.DEX}
                onChange={(mod) => {
                  character.dex = character.dex + mod;
                  onUpdate();
                }}
              />
              <StatButton
                locked={character.locked}
                stat="INT"
                value={character.stats.INT}
                onChange={(mod) => {
                  character.int = character.int + mod;
                  onUpdate();
                }}
              />
              <StatButton
                locked={character.locked}
                stat="CON"
                value={character.stats.CON}
                onChange={(mod) => {
                  character.con = character.con + mod;
                  onUpdate();
                }}
              />
            </div>
          </div>
        )}

        {builder && (
          <div className="divider large mv-2" />
        )}

        <div className="columns">
          <div className="column left border w40">
            <div className="mb-1">
              {!builder && (
                <h1>Base Health: {character.max_health}</h1>
              )}
            </div>
            <div className="mb-1">
              <h1>{!builder && "Base"} Armor Class: {character.armor_class}</h1>
            </div>
            <div className="mb-1">
              <h1>{!builder && "Base"} Movement: {character.movement}</h1>
            </div>
            <h3>Weapon of Choice</h3>
            <Weapon
              builder={builder}
              character={character}
            />
          </div>
          <div className="column right">
            {builder && (
              <>
                <h3>Ability Uses</h3>
                <div className="character-ability-uses">
                  <div className="bar">
                    <div className="bar-background" />
                    <div
                      className="bar-foreground"
                      style={{ width: `${(character.current_ability_uses / character.max_ability_uses) * 100}%` }}
                    ></div>
                  </div>
                  <button className="left" onClick={() => {
                    character.current_ability_uses = character.current_ability_uses - 1;
                    onUpdate();
                  }}>−</button>
                  <div className="text">
                    <span>{character.current_ability_uses}</span>
                    <span>/</span>
                    <span>{character.max_ability_uses}</span>
                  </div>
                  <button className="right" onClick={() => {
                    character.current_ability_uses = character.current_ability_uses + 1;
                    onUpdate();
                  }}>+</button>
                </div>
              </>
            )}

            <Definitions
              locked={character.locked}
              selectable
              h3={(!character.locked && builder)? `Abilities (${character.selected_abilities_amount}/${character.max_selectable_abilities} selected)` : "Abilities"}
              definitions={character.abilities}
              selected={character.selected_abilities}
              onClick={(definition, index) => {
                // Save by name and not entire ability, since the description is JSX
                if (character.locked) return;
                const { name = "" } = definition || {};
                if (!name || !builder) return;
                character.setSelectedAbility(name);
                onUpdate();
              }}
            />
          </div>
        </div>

        <Definitions
          definitions={character.definitions}
          before={(
            <div className="divider small" />
          )}
        />
      </div>

      <div className="stat-block-mr character-effects mt-b">
        <Effects
          character_id={character.id}
          interactive={builder}
          label="Attack Effects"
          effects={character.attack_effects}
          style={{
            flex: 1,
          }}
        />
        <Effects
          character_id={character.id}
          interactive={builder}
          label="Defense Effects"
          effects={character.defense_effects}
          style={{
            flex: 1,
          }}
        />
      </div>
    </>
  );
}
