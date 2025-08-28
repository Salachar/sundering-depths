import ScorcherClass from "../data/scorcher";
import SteampunkClass from "../data/steampunk";
import FloodbornClass from "../data/floodborn";
import HotshotClass from "../data/hotshot";
import PackratClass from "../data/packrat";
import HydrotechClass from "../data/hydrotech";

export const CLASS_MAP = {
  [ScorcherClass.class]: ScorcherClass,
  [SteampunkClass.class]: SteampunkClass,
  [FloodbornClass.class]: FloodbornClass,
  [HotshotClass.class]: HotshotClass,
  [PackratClass.class]: PackratClass,
  [HydrotechClass.class]: HydrotechClass,
};

const ScorcherInstance = new ScorcherClass();
const SteampunkInstance = new SteampunkClass();
const FloodbornInstance = new FloodbornClass();
const HotshotInstance = new HotshotClass();
const PackratInstance = new PackratClass();
const HydrotechInstance = new HydrotechClass();

export const CLASSES = [
  {
    id: ScorcherInstance.class_id,
    constructor: ScorcherClass,
    instance: ScorcherInstance,
  },
  {
    id: SteampunkInstance.class_id,
    constructor: SteampunkClass,
    instance: SteampunkInstance,
  },
  {
    id: FloodbornInstance.class_id,
    constructor: FloodbornClass,
    instance: FloodbornInstance,
  },
  {
    id: HotshotInstance.class_id,
    constructor: HotshotClass,
    instance: HotshotInstance,
  },
  {
    id: PackratInstance.class_id,
    constructor: PackratClass,
    instance: PackratInstance,
  },
  {
    id: HydrotechInstance.class_id,
    constructor: HydrotechClass,
    instance: HydrotechInstance,
  },
];

class BuilderManager {
  _characters = {};

  constructor (opts = {}) {
    this.load();
  }

  get characters () {
    return this._characters;
  }

  addCharacter (new_character) {
    if (!new_character) {
      console.log('No character passed to builder');
      return;
    }
    if (!new_character.id) {
      console.log('Character with no id, stop that');
      return;
    }
    this._characters[new_character.id] = new_character;
    this.save();
  }

  deleteCharacter (id) {
    delete this._characters[id];
    this.save();
  }

  save () {
    const chars = this.characters;
    const charJSON = {};
    Object.keys(chars).forEach((c_id) => {
      const c = chars[c_id];
      charJSON[c.id] = c.toJSON();
    })
    localStorage.setItem('saved_characters', JSON.stringify(charJSON));
  }

  load () {
    const chars = localStorage.getItem('saved_characters');
    const parsed = JSON.parse(chars);
    Object.keys(parsed).forEach((c_id) => {
      const c_json = parsed[c_id];
      const new_character = new CLASS_MAP[c_json.class](c_json);
      this.addCharacter(new_character);
    })
  }
}

export default new BuilderManager();
