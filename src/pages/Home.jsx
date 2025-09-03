import Definitions from "../components/Definitions";

const CONDITIONS = [
  {
    label: "Dodge",
    description: "Take no damage",
  },
  {
    label: "Grazed",
    description: "Take half damage",
  },
  {
    label: "Retaliate",
    description: "After taking damage, can attack attacker if able",
  },
  {
    label: "Parry",
    description: "Take no damage, attack attacker if able",
  },
  {
    label: "Dazed",
    description: "Next roll/check is at disadvantage",
  },
  {
    label: "Blind",
    description: "DAZED and target cannot see",
  },
  {
    label: "Stunned",
    description: "Lose next turn",
  }
];

export default function Home () {
  return (
    <div className="page-content">
      <h1>Sundering Depths</h1>

      <p>Meant for a one or two night game. Characters and enemies have no concept of leveling or advancement, they are what they are from the start. All classes follow the same structure, allowing for multi-classing and not ever needing to learn anything new for characters.</p>

      <div className="stat-block columns mv-b">
        <div className="column left">
          <h3>Stats</h3>
          <ul>
            <li>Get 4 points initially to spend on a 0, 0, 0, 0 spread</li>
            <li>Can add and remove points, min -1 and max +3 for a stat</li>
          </ul>
        </div>
        <div className="column right w40">
          <table>
            <thead>
              <tr>
                <th>Stat</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>STR</strong></td>
                <td>
                  +/- 1 Damage per point on Attack Effect table.
                  <br />
                  +/- 1 to hit enemy
                </td>
              </tr>
              <tr>
                <td><strong>DEX</strong></td>
                <td>+/- to AC</td>
              </tr>
              <tr>
                <td><strong>INT</strong></td>
                <td>+/- 1 ability casts per point</td>
              </tr>
              <tr>
                <td><strong>CON</strong></td>
                <td>
                  +/- 1 Damage Reduction per point on Defense Effect table.
                  <br />
                  +/- 4 HP per point
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="stat-block no-borders mv-b">
        <h3>Abilities</h3>
        <ul>
          <li>Choose 3 of the available abilities from the class table.</li>
          {/* <li>If multiclassing, choose 6 abilities between the two class tables.</li> */}
          <li>Using an ability takes a use.</li>
          <li>Uses can be gained back through means at DM discretion</li>
        </ul>
      </div>

      <div className="stat-block columns no-borders mv-b">
        <div className="column left border">
          <h1>Combat</h1>
          <ul>
            <li>Roll Initiative (d12): Party uses highest</li>
            <li>Players/Enemies take turns as group, choosing order themselves</li>
            <li>Movement/Action can be split up, even between players, all players can move before anyone takes an action and so forth</li>
          </ul>

          <h2>Players</h2>
          <h3>Offense</h3>
          <span>The following actions can be taken in any order:</span>
          <ul>
            <li><b>Movement</b>: Move up to movement speed</li>
            <li><b>Ability</b>: Use an ability</li>
            <li><b>Attack</b>: Make an attack</li>
            <ul>
              <li>Roll d12, add STR mod, compare to target AC</li>
              <li>Roll on Attack Effects table, choose effect</li>
              <li>If hit, roll weapon damage, add damage mod from table</li>
              <li>Take effects action regardless of hit</li>
            </ul>
          </ul>
          <h3>Defense</h3>
          <ul>
            <li>If hit, roll on Defense Effects table</li>
            <li>Reduce incoming damage by amount on table. Doesn't stack with the given effect, if an effect reduces damage, use highest reduction.</li>
            <li>After damage resolution, may take any remaining Defense Effect actions.</li>
          </ul>

          <h2>Enemies</h2>
          <ul>
            <li><b>Movement</b>: Move up to movement speed</li>
            <li><b>Ability</b>: Use an ability</li>
            <li><b>Attack</b>: Make an attack</li>
            <ul>
              <li>Roll d12, add STR mod, compare to target AC</li>
              <li>If hit, roll weapon damage</li>
            </ul>
            <li><b>Special</b>: Anything special relating to the enemy</li>
          </ul>
        </div>

        <div className="column right w40 mt-b">
          <h3>Inspiration</h3>
          <ul>
            <li>Players start with 1 each, can be shared between players.</li>
            <li>Can be used to reroll any singular die roll, taking the higher number between the two.</li>
            <li>Can be be used multiple times on one die.</li>
            <li>Can be cashed in for an ability use.</li>
          </ul>

          <h3>States/Conditions</h3>
          <Definitions definitions={CONDITIONS} />
        </div>
      </div>
    </div>
  );
}
