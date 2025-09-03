import BaseClass from "./base";

import * as Glossary from "../components/Glossary";

export default class PackratClass extends BaseClass {
  constructor (data = {}) {
    super(data);
  }

  static id = "packrat";

  static base_health = 8;

  static movement = 20;

  static armor_class = 6;

  static color = "#7A3EA4";

  static class = "Packrat";

  static descriptors = [
    "melee",
    "support",
    "rogue/bard-ish"
  ];

  static description = [
    <>
      Packrats never had much, and that's exactly how they've survived. In a world sinking under the tide, they slip through trash barges, derelict hulks, and flooded sewer-lines. It's not really stealing if no one's using it, right? Packrats are scavengers, tinkerers, and small-time fixers, cobbling together solutions from whatever they can get their hands on. They patch hulls with scrap, reroute broken systems with chewing gum and wire, and always seem to have just the right thing tucked away somewhere.
    </>
  ];

  static weapon = {
    name: "Slimshiv",
    damage: "1d6",
    description: (
      <>
        A flat, jagged-blade utility knife favored by scavvers, smugglers, and anyone who might need to pop a lock or a lung with the same tool. It's compact, concealable, and cheap to replace if you need to dump it in the ocean. Some sharpen theirs to a razor's edge. Others hollow the handle to store picks, wire, or smokes. Like everything else you carry, it's more than it looks.
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
          Gain advantage on your next attack if you don't move.
        </>
      ),
    },
    6: {
      effect: (
        <>
          Bag Toss: Pull and throw a random item from your bag (random effect).
        </>
      ),
    },
    8: {
      effect: (
        <>
          Pocket Sand: Target is <Glossary.Blind /> until the start of their next turn
        </>
      ),
    },
    10: {
      effect: (
        <>
          Gut Jab: Target must make a STR save or drop their weapon
        </>
      ),
    },
    12: {
      effect: (
        <>
          Stashed Grenade: You remembered you had one. 1d6 AoE within 5ft (you're immune)
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
          Some shinies (worthless) fly off of you, the enemy is <Glossary.Daze past />
        </>
      )
    },
    6: {
      effect: (
        <>
          Pocket bible (<Glossary.Graze />)
        </>
      )
    },
    8: {
      damage: 2,
      effect: (
        <>
          Pocket flask (<Glossary.Graze />)
        </>
      )
    },
    10: {
      effect: (
        <>
          Pickpocket: Rummage through the enemies pockets while they try to murder you
        </>
      ),
    },
    12: {
      effect: (
        <>
          Pocket flask, the one with the good booze! <Glossary.Retaliate />
        </>
      )
    }
  };

  static abilities = [
    {
      name: "Super Glue",
      type: "basic",
      description: (
        <>
          Instructions: Add glue until bleeding stops. Heal 1d12 to self and (optional) adjacent ally, stuck together for the next 2 turns.
        </>
      ),
    },
    {
      name: "Explosive Cache",
      type: "basic",
      description: (
        <>
          Rig together a couple junk explosives. Toss within 15 ft. Deals 1d6 damage in a 5ft radius.
        </>
      ),
    },
    {
      name: "Utility Belt",
      type: "advancement",
      description: (
        <>
          Pick any common mechanical lock. Automatically reveals any booby traps and disarms them for parts.
        </>
      ),
    },
    {
      name: "Improvised Obstacle",
      type: "basic",
      description: (
        <>
          Push an adjacent enemy back 5ft AND Throw together a barrier/pile in an adjacent space. Provides cover and creates difficult terrain in that space.
        </>
      ),
    },
    {
      name: "Hoarder's Luck",
      type: "capstone",
      description: (
        <>
          You know you have something applicable to the situations somewhere...
        </>
      ),
    }
  ];
}
