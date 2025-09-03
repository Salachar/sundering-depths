import BaseClass from "./base";

import * as Glossary from "../components/Glossary";

export default class SteampunkClass extends BaseClass {
  constructor (data = {}) {
    super(data);
  }

  static id = "steampunk";

  static base_health = 12;

  static movement = 20;

  static armor_class = 6;

  static color = "#77787a";

  static class = "Steampunk";

  static descriptors = [
    "melee",
    "support",
    "create cover",
  ];

  static description = [
    <>
      Steampunks are the backbone of every moving settlement, engine hold, and salvage rig across the flooded world. When things go wrong, which they always do, it's their job to fix it. They can usually be heard hard at work, screaming and cursing at whatever the problem is in a vain attempt to help the situation.
    </>,
    <>
      Scorchers are the Steampunks brother-in-arms in keeping things afloat, but the Steampunks are obviously more important. This couldn't be more clear since their job is the one that derived the name, Steamsters Union. "Fuck Nobility" is the secret motto of most Steampunks, who spearheaded the initiative to create a union to really rake them over the coals. With the Scorchers onboard, being a Steampunk ensures a solid life of easy enough work for more than enough pay.
    </>
  ];

  static weapon = {
    name: "Big Ol' Wrench",
    damage: "1d12",
    description: (
      <>
        The most iconic tool ever made by the Big Ol' company. Every Steampunk carries one, but none are left stock for long. Each has their own way of doing things, and this is reflected in the modifcations to their wrench.
      </>
    ),
  };

  static definitions = [];

  static attack_effects = {
    2: {
      effect: (
        <>
          Move 5ft
        </>
      ),
    },
    4: {
      effect: (
        <>
          Steam up your or adjacent space, creating <Glossary.Cover />
        </>
      )
    },
    6: {
      effect: (
        <>
          Push target 10ft
        </>
      ),
    },
    8: {
      effect: (
        <>
          Steam blast target 10ft up in the air (they land prone)
        </>
      ),
    },
    10: {
      effect: (
        <>
          Vent hot steam around you, adjacent targets take 2 damage
        </>
      ),
    },
    12: {
      effect: (
        <>
          Steam up your space AND Weapon attack another target
        </>
      ),
    }
  };

  static defense_effects = {
    2: {
      effect: (
        <>
        </>
      ),
    },
    4: {
      effect: (
        <>
        </>
      ),
    },
    6: {
      effect: (
        <>
        </>
      ),
    },
    8: {
      effect: (
        <>
        </>
      ),
    },
    10: {
      effect: (
        <>
        </>
      ),
    },
    12: {
      effect: (
        <>
        </>
      ),
    }
  };

  static abilities = [
    {
      name: "Patch Tape",
      type: "basic",
      description: (
        <>
          Wrap some tape around and keep going. Heal 3 health AND move 5ft. Can heal adjacent allies.
        </>
      ),
    },
    {
      name: "Steam Burst",
      type: "basic",
      description: (
        <>
          A small jet of hot steam bursts from a wrist canister. Target takes 1d6 damage and is <Glossary.Daze past />.
        </>
      ),
    },
    {
      name: "Smoke Canisters",
      type: "advancement",
      description: (
        <>
          Toss three smoke canisters into the room, each providing 10ft diameter smoke. Enemies in smoke cant you or see you while in smoke. Your vision is unimpeded.
        </>
      ),
    },
    {
      name: "Spanner Snare",
      type: "basic",
      description: (
        <>
          Rig together a tripwire or snare in an adjacent space. First enemy to enter is <Glossary.Stun past />.
        </>
      ),
    },
    {
      name: "WhirlWrench",
      type: "capstone",
      description: (
        <>
          Pop open the steam canister on your wrench and attack every adjacent enemy.
        </>
      ),
    }
  ];
}
