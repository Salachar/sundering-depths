import BaseClass from "./base";

import * as Glossary from "../components/Glossary";

export default class HotshotClass extends BaseClass {
  constructor (data = {}) {
    super(data);
  }

  static base_health = 10;

  static movement = 20;

  static armor_class = 6;

  static color = "#FFA737";

  static class = "Hotshot";

  static descriptors = [
    "ranged",
    "movement",
    "glass-cannon",
  ];

  static description = [
    <>
      Walking scrapyard accidents waiting to happen, most are nothing more than a demolition enthusiast with a death wish and a smile. Hotshots are always ready for a fight and to test whatever "improvements" have been made to their firearm. When something needs to be blown up, broken down, or <i>taken care of</i>, Hotshots are the first on the list.
    </>,
    <>
      Hotshots prefer independent work, and generally make enough from each job to last a while.
    </>
  ];

  static weapon = {
    name: "Jury-Rigged Revolver",
    damage: "3d6",
    range: "30ft",
    ignore: "odd",
    description: (
      <>
        A scratched-up, over-loved sidearm that's been repaired more times than it's been cleaned. It fires 'standard' bullets, or what passes for standard these days, and occasional misfires, sparks, or ringing ears are quite common. Sometimes it just feels like the ammo works against you...
      </>
    ),
  };

  static definitions = [
    {
      label: "Dud",
      description: (
        <>When rolling your revolver's damage, each <b>odd</b> is a dud.</>
      )
    }
  ];

  static attack_effects = {
    2: {
      effect: (
        <>
          Ears ring: Target is <Glossary.Daze past />
        </>
      )
    },
    4: {
      effect: (
        <>
          Smokey blast: Your space is clouded by gunfire smoke, creating <Glossary.Cover />
        </>
      )
    },
    6: {
      effect: (
        <>
          Ricochet: Hit an adjacent enemy for 4 damage
        </>
      ),
    },
    8: {
      damage: 3,
      effect: (
        <>
          Pressurized round
        </>
      ),
    },
    10: {
      effect: (
        <>
          Piercing shot: Round hits target behind withing range for same damage
        </>
      ),
    },
    12: {
      damage: 4,
      effect: (
        <>
          Hollow point
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
      name: "High Pressure Round",
      type: "basic",
      description: (
        <>
          Fire a heavy shell: 15ft line, 2d6 damage to all in path.
        </>
      ),
    },
    {
      name: "Dance Partner",
      type: "basic",
      description: (
        <>
          Shoot at the feet of an enemy and <Glossary.Immobilize /> them. If an ally is adjacent to the enemy they may attack.
        </>
      ),
    },
    // {
    //   name: "Ricochet Blast",
    //   type: "basic",
    //   description: (
    //     <>
    //       Fire a shot that bounces wildly through the space. Hits a target within 15 ft for 2d6 damage and automatically hits a second random target within 10 ft of the first for 1d6 damage. Ignores dud chance.
    //     </>
    //   ),
    // },
    {
      name: "Blissful Ignorance",
      type: "advancement",
      description: (
        <>
          Charge blindly at least 10 ft into a room. Enemies waste any attacks of opportunity. You may attack one target at the end of the charge.
        </>
      ),
    },
    {
      name: "Powder Burn",
      type: "basic",
      description: (
        <>
          Quickly ignite some loose gunpowder in the enemies face, leaving them <Glossary.Stun past />.
        </>
      ),
    },
    // {
    //   name: "Wild Barrage",
    //   type: "capstone",
    //   description: (
    //     <>
    //       Unleash a brutal burst of shots. Fire at up to 3 targets within 15 ft — each takes 2d6 damage. No dud chance; you're burning through everything you've got. You must reload after this (lose your next action).
    //     </>
    //   ),
    // },
    {
      name: "Spray and Spray",
      type: "capstone",
      description: (
        <>
          Forget the pray part, you don't need god, just more bullets. Use your reload-clip and double fan your revolver for 6 shots. Can split amongst three targets.
        </>
      ),
    }
  ];
}
