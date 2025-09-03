import BaseClass from "./base";

import * as Glossary from "../components/Glossary";

export default class FloodbornClass extends BaseClass {
  constructor (data = {}) {
    super(data);
  }

  static id = "floodborn";

  static base_health = 10;

  static movement = 20;

  static armor_class = 6;

  static color = "#136c63";

  static class = "Floodborn";

  static descriptors = [
    "ranged",
    "support",
    "crowd control",
  ];

  static description = [
    <>
      Generations of being in and consuming water from a magical realm has left its mark on some beings. Gills, webbed feet, and pale skin mark few as less than human in some eyes, but they'll never understand. Floodborn don't just survive or endure the water, they <i>understand</i> it, guiding it in subtle, precise ways that border on magical.
    </>,
    <>
      Floodborn work the submerged parts of the world: pipe runners, salvagers, messengers, and underwater patch crews. Almost all settlements rely on the use of Floodborn, but don't like to think about it, disallowing them from the Union.
    </>
  ];

  static weapon = {
    name: "Dart Gun",
    damage: "1d6",
    range: "30ft",
    description: (
      <>
        In actuallity just any old pipe or tube taken a liking to. With water control too subtle to launch anything at lethal speed unassisted, focusing through a pipe help builds the pressure needed. With a quick breath or a mouthful of spit, the dart gun shapes and molds bolts of water and ice.
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
          Mist dart: Target is shrouded in a thick mist, creating <Glossary.Cover />
        </>
      ),
    },
    6: {
      effect: (
        <>
          Needle Dart: Attack passes through the target, hitting target behind for 4 damage
        </>
      )
    },
    8: {
      damage: 2,
      effect: (
        <>
          Ice Dart: Target must make CON save or be <Glossary.Immobilize past />
        </>
      ),
    },
    10: {
      effect: (
        <>
          Geyser Dart: Target is pushed 10ft into the air
        </>
      )
    },
    12: {
      effect: (
        <>
          Freeze Dart: Freeze the target for 1 round, <Glossary.Stun active /> them
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
      )
    },
    4: {
      effect: (
        <>
          Push attacker 5ft
        </>
      )
    },
    6: {
      effect: (
        <>
          Mist up your space, creating <Glossary.Cover />
        </>
      )
    },
    8: {
      effect: (
        <>
          Ice shards: Attacker is <Glossary.Daze past />
        </>
      )
    },
    10: {
      effect: (
        <>
          <Glossary.Graze />
        </>
      )
    },
    12: {
      effect: (
        <>
          <Glossary.Parry />
        </>
      )
    }
  };

  static abilities = [
    {
      name: "Mending Waters",
      type: "basic",
      description: (
        <>
          Draw on your bond with water to soothe wounds. Heal 1d6 HP to yourself or an ally within 15ft, 2d6 if target is underwater.
        </>
      ),
    },
    {
      name: "Aqua Pulse",
      type: "basic",
      description: (
        <>
          Create a pulse of water around you, pushing all adjacent enemies 5ft away.
        </>
      ),
    },
    {
      name: "See Serpent",
      type: "advancement",
      description: (
        <>
          Create a 6 ft flexible water filament (1\" diameter). Looking through one end gives you clear vision through the other (around corners, under doors, etc).
        </>
      ),
    },
    {
      name: "Whirlpool",
      type: "basic",
      description: (
        <>
          Flood an adjacent space with a small whirlpool. Space becomes difficult terrain. Any creatures moving through it must make a DEX save or be knocked prone.
        </>
      ),
    },
    {
      name: "Ol' Faithful",
      type: "capstone",
      description: (
        <>
          A short lived powerful jet of water pushed a target 30ft into the air.
        </>
      ),
    }
  ];
}
