import BaseClass from "./base";

import * as Glossary from "../components/Glossary";

export default class HydrotechClass extends BaseClass {
  constructor (data = {}) {
    super(data);
  }

  static id = "hydrotech";

  static base_health = 8;

  static movement = 20;

  static armor_class = 6;

  static color = "#057695";

  static class = "Hydrotech";

  static descriptors = [
    "ranged",
    "support",
    "damage",
  ];

  static description = [
    <>
      Hydrotechs are water-channelers and steam technicians who maintain irrigation arrays, pressure gates, and Weave Harmonizer cooling systems. Their blend of arcane practice and practical hydraulics is vital for keeping floating settlements stable and livable. When pipes rupture, harmonics fail, or an elemental gets loose in the plumbing, it's the Hydrotechs who get called in.
    </>
  ];

  static weapon = {
    name: "Hydrowand",
    damage: "2d6",
    range: "30ft",
    description: (
      <>
        Not a stick, not quite a pipe, but some personalized conduit of brass, bone, or glass. Etched with a ruler and symbols only Hydrotechs fully understand, it's less a weapon and more a tuning fork arcane energy. In a Hydrotechs hands, a ripple can become a jet, or droplet a blade. Each is handmade, generally under mentorship while in studies.
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
          Target is Slowed
        </>
      ),
    },
    6: {
      effect: (
        <>
          Whirlpool Strike: Target is Immobilized
        </>
      ),
    },
    8: {
      effect: (
        <>
          Tidal Whip: Pull target 10ft
        </>
      ),
    },
    10: {
      effect: (
        <>
          Target is knocked Prone and pushed 5ft
        </>
      ),
    },
    12: {
      effect: (
        <>
          Target and one adjacent creature are Slowed and Dazed
        </>
      ),
    }
  };

  static defense_effects = {
    2: {
      effect: (
        <>
          Mist Veil: You gain light cover until your next turn
        </>
      ),
    },
    4: {
      effect: (
        <>
          Push attacker 5ft OR Daze them if they are Slowed
        </>
      ),
    },
    6: {
      effect: (
        <>
          Move 5ft along any watery or damp surface
        </>
      ),
    },
    8: {
      effect: (
        <>
          Attacker is Dazed if they are wet, otherwise just Retaliate
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
          <Glossary.Retaliate /> AND move 5ft
        </>
      )
    },
  };

  static abilities = [
    {
      name: "Cooling Wash",
      type: "basic",
      description: (
        <>
          Wash out a wound with cooling healing infused water. Heal 1d6 to you AND an ally.
        </>
      ),
    },
    {
      name: "Scald Jet",
      type: "basic",
      description: (
        <>
          Vent a focused blast of boiling water at a target within 10 ft. Deals 2d6 damage, target is <Glossary.Blind /> for 2 rounds.
        </>
      ),
    },
    {
      name: "Misty Voyeur",
      type: "advancement",
      description: (
        <>
          Create a watery lens that reveals misty outlines of creatures beyond a door or thin barrier. You see their general positions but not precise details.
        </>
      ),
    },
    // {
    //   name: "Pipe Wrench Mayhem",
    //   type: "basic",
    //   description: (
    //     <>
    //       Wedge a pipe or valve to release a burst of steam or water into an adjacent space. The space becomes difficult terrain until cleared; the first enemy to cross takes 1d6 damage.
    //     </>
    //   ),
    // },
    // {
    //   name: "Overload Vent",
    //   type: "capstone",
    //   description: (
    //     <>
    //       Superheat and rupture a section of pipe, valve, or improvised pressure source. All enemies in a 10 ft cone take 2d6 damage and are pushed 10 ft. Oil or debris ignites. You can immediately move 10 ft as the blast covers your retreat.
    //     </>
    //   ),
    // },
    {
      name: "Deluge Form",
      type: "capstone",
      description: (
        <>
          For 2 rounds, you become semi-liquid. You ignore difficult terrain, cannot be grappled, and can move through 1” gaps.
        </>
      ),
    }
  ];
}
