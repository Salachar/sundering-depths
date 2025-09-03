import BaseClass from "./base";

import * as Glossary from "../components/Glossary";

export default class ScorcherClass extends BaseClass {
  constructor (data = {}) {
    super(data);
  }

  static id = "scorcher";

  static base_health = 12;

  static movement = 20;

  static armor_class = 6;

  static color = "#D13F24";

  static class = "Scorcher";

  static descriptors = [
    "melee",
    "damage",
    "move enemies",
  ];

  static description = [
    <>
      Scorchers are the muscle of the industrial world, encompassing a swath of roles: boiler operators, forge workers, fire tenders, and shipyard laborers. They handle the brutal, dirty jobs that keep cities warm, engines humming, and settlements lit. A life of stoking fires, shoveling coal, and moving barrels leaves most Scorchers a giant callous that can endure the heat and take (or deal) quite the beating when needed.
    </>,
    <>
      Scorchers routinely work alongside Steampunks, and together have formed the Steamsters Union. This guarantees that the work, while rough, is at least safe and well-paying.
    </>,
  ];

  static weapon = {
    name: "Big Ol' Shovel",
    damage: "1d12",
    description: (
      <>
        Oversized, scorched with heat, and soot black. Still more tool than weapon, but in a Scorchers hands that lines gets blurry fast. Some sharpen the edge to slice through ground better, some weld a striker plate onto the back for help lighting fires. It's heavy, brutal, and tough to break.
      </>
    ),
  };

  static definitions = [];

  static attack_effects = {
    2: {
      effect: (
        <>
          Push target 5ft
        </>
      ),
    },
    4: {
      effect: (
        <>
          Move 10ft
        </>
      ),
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
          Push any adjacent target 5ft
        </>
      ),
    },
    10: {
      effect: (
        <>
          Push adjacent targets 5ft
        </>
      ),
    },
    12: {
      effect: (
        <>
          Push target 20ft AND move 10ft
        </>
      ),
    }
  };

  static defense_effects = {
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
          Push attacker 5ft
        </>
      ),
    },
    6: {
      effect: (
        <>
          Move 10ft
        </>
      ),
    },
    8: {
      effect: (
        <>
          Knock attacker prone (STR)
        </>
      ),
    },
    10: {
      effect: (
        <>
          <Glossary.Graze />
        </>
      ),
    },
    12: {
      effect: (
        <>
          <Glossary.Retaliate />
        </>
      ),
    }
  };

  static abilities = [
    {
      name: "Tar-niquet",
      type: "basic",
      description: (
        <>
          Slap some pitch on it. Gain 1d10 health. Can heal adjacent allies. Any non-Scorchers healed by this must make a CON save or take 1d4 damage.
        </>
      ),
    },
    {
      name: "Hot Tater",
      type: "basic",
      description: (
        <>
          Toss a small blast charge up to 15 ft. Explodes for 2d6 damage in a 5ft radius.
        </>
      ),
    },
    {
      name: "Breach Charge",
      type: "advancement",
      description: (
        <>
          Attach to a door. On detonation, door is destroyed; creatures within 10 ft on other side are <Glossary.Daze past />.
        </>
      ),
    },
    {
      name: "Burn Through",
      type: "basic",
      description: (
        <>
          Light up your suit and charge forward through your enemies. Move up to 20ft, targets moved through take 1d6 fire damage.
        </>
      ),
    },
    {
      name: "Burning Pitch",
      type: "capstone",
      description: (
        <>
          Cover your weapon in thick pitch and ignite it. Any attacks this round deal an additional 1d12 fire damage.
        </>
      ),
    }
  ];
}
