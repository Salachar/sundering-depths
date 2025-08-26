// move, push, attack, grapple, dodge, stun, knock prone
export const ATTACK_EFFECTS = {
  1: {
    damage: 0,
    effect: "",
  },
  2: {
    damage: 0,
    effect: "",
  },
  3: {
    damage: 1,
    effect: "",
  },
  4: {
    damage: 1,
    effect: "",
  },
  5: {
    damage: 1,
    effect: "",
  },
  6: {
    damage: 2,
    effect: "",
  },
  7: {
    damage: 2,
    effect: "",
  },
  8: {
    damage: 2,
    effect: "",
  },
  9: {
    damage: 3,
    effect: "",
  },
  10: {
    damage: 3,
    effect: "",
  },
  11: {
    damage: 4,
    effect: "",
  },
  12: {
    damage: 4,
    effect: "",
  }
};

export const DEFENSE_EFFECTS = {
  1: {
    damage: -0,
    effect: "",
  },
  2: {
    damage: -0,
    effect: "",
  },
  3: {
    damage: -1,
    effect: "",
  },
  4: {
    damage: -1,
    effect: "",
  },
  5: {
    damage: -1,
    effect: "",
  },
  6: {
    damage: -2,
    effect: "",
  },
  7: {
    damage: -2,
    effect: "",
  },
  8: {
    damage: -2,
    effect: "",
  },
  9: {
    damage: -3,
    effect: "",
  },
  10: {
    damage: -3,
    effect: "",
  },
  11: {
    damage: -4,
    effect: "",
  },
  12: {
    damage: -4,
    effect: "",
  }
};

const MAX_ABILITY_USES = 3;
const MAX_SELECTABLE_ABILITIES = 3;

class BaseClass {
  _name = "";
  _current_health = 0;
  _stat_points = 4;

  _stats = {
    STR: 0,
    DEX: 0,
    INT: 0,
    CON: 0,
  };

  _current_ability_uses = MAX_ABILITY_USES;

  _selected_abilities = {};

  _locked = false;

  constructor (data = {}) {
    this.id = data.id || crypto.randomUUID();
    this._name = data.name || "";

    this._stats = data.stats || {
      STR: 0,
      DEX: 0,
      INT: 0,
      CON: 0,
    };

    if (typeof data.current_health === "number") {
      this._current_health = data.current_health;
    } else {
      this._current_health = this.constructor.base_health
    }

    if (typeof data.stat_points === "number") {
      this._stat_points = data.stat_points;
    } else {
      this._stat_points = this.constructor.stat_points || 4;
    }

    if (typeof data.current_ability_uses === "number") {
      this._current_ability_uses = data.current_ability_uses;
    }

    if (data.selected_abilities && Object.keys(data.selected_abilities).length) {
      this._selected_abilities = data.selected_abilities;
    }

    if (data.locked) {
      this._locked = true;
    }
  }

  #checkStatPoints (stat, new_value) {
    // If the value is invalid return early
    if (new_value < -1 || new_value > 3) return false;
    let points = 4;
    const stats = JSON.parse(JSON.stringify(this.stats));
    stats[stat] = new_value;
    points -= stats.STR;
    points -= stats.DEX;
    points -= stats.INT;
    points -= stats.CON;
    const valid = points >= 0
    if (!valid) return false;
    this._stat_points = points;
    return valid;
  }

  get locked () {
    return this._locked;
  }

  toggleLock () {
    this._locked = !this._locked;
  }

  get name () {
    return this._name;
  }
  set name (new_name) {
    this._name = new_name;
  }

  get color () {
    return this.constructor.color;
  }

  get class () {
    return this.constructor.class;
  }

  get max_health () {
    return this.constructor.base_health + (this.con * 2);
  }

  get current_health () {
    return this._current_health;
  }

  set current_health (new_health) {
    if (new_health < 0) return;
    if (new_health > this.max_health) return;
    this._current_health = new_health;
  }

  get stats () {
    return this._stats;
  }

  get str () {
    return this._stats.STR;
  }
  set str (new_value) {
    const check = this.#checkStatPoints('STR', new_value);
    if (!check) return;
    this._stats.STR = new_value;
  }

  get dex () {
    return this._stats.DEX;
  }
  set dex (new_value) {
    const check = this.#checkStatPoints('DEX', new_value);
    if (!check) return;
    this._stats.DEX = new_value;
  }

  get int () {
    return this._stats.INT;
  }
  set int (new_value) {
    const check = this.#checkStatPoints('INT', new_value);
    if (!check) return;
    this._stats.INT = new_value;
    if (this.current_ability_uses > this.max_ability_uses) {
      this.current_ability_uses = this.max_ability_uses;
    }
  }

  get con () {
    return this._stats.CON;
  }
  set con (new_value) {
    const check = this.#checkStatPoints('CON', new_value);
    if (!check) return;
    const new_max_health = this.constructor.base_health + (new_value * 2);
    if (this.current_health > new_max_health) {
      this.current_health = new_max_health;
    }
    this._stats.CON = new_value;
  }

  get stat_points () {
    return this._stat_points;
  }

  get movement () {
    return this.constructor.movement + "ft";
  }

  get armor_class () {
    return this.constructor.armor_class + this.stats.DEX;
  }

  get max_ability_uses () {
    return MAX_ABILITY_USES + this.stats.INT;
  }

  get current_ability_uses () {
    return this._current_ability_uses;
  }

  set current_ability_uses (new_value) {
    if (new_value < 0) return;
    if (new_value > this.max_ability_uses) return;
    this._current_ability_uses = new_value;
  }

  get max_selectable_abilities () {
    return MAX_SELECTABLE_ABILITIES;
  }

  get selected_abilities_amount () {
    return Object.keys(this._selected_abilities).length || 0;
  }

  get selected_abilities () {
    return this._selected_abilities;
  }

  setSelectedAbility (ability_name) {
    if (this._selected_abilities[ability_name]) {
      delete this._selected_abilities[ability_name];
    } else {
      const num = Object.keys(this._selected_abilities).length;
      if (num >= MAX_SELECTABLE_ABILITIES) return;
      this._selected_abilities[ability_name] = true;
    }
  }

  get descriptors () {
    return this.constructor.descriptors;
  }

  get description () {
    return this.constructor.description;
  }

  get definitions () {
    return this.constructor.definitions;
  }

  get weapon () {
    return this.constructor.weapon;
  }

  get abilities () {
    return this.constructor.abilities;
  }

  combineEffects (base_effects, class_effects, str_mod) {
    const new_effects = {};
    for (const roll in base_effects) {
      let class_effect_data = class_effects[roll];
      let base_effect_data = base_effects[roll];

      if (!class_effect_data) {
        class_effect_data = {
          damage: 0,
          effect: "",
        };
      }
      if (!class_effect_data.damage) {
        class_effect_data.damage = 0;
      }
      if (!class_effect_data.effect) {
        class_effect_data.effect = "";
      }

      if (new_effects[roll]) continue;

      new_effects[roll] = {
        damage: {
          base: base_effect_data.damage,
          class: class_effect_data.damage,
          mod: str_mod,
          total: base_effect_data.damage + class_effect_data.damage + str_mod,
        },
        effects: [
          base_effect_data.effect,
          class_effect_data.effect,
        ],
      };
    }
    return new_effects;
  }

  get attack_effects () {
    return this.combineEffects(ATTACK_EFFECTS, this.constructor.attack_effects, this.stats.STR);
  }

  get defense_effects () {
    return this.combineEffects(DEFENSE_EFFECTS, this.constructor.defense_effects, -this.stats.CON);
  }

  toJSON () {
    return {
      id: this.id,
      locked: this.locked,
      class: this.class,
      name: this.name,
      current_health: this.current_health,
      current_ability_uses: this.current_ability_uses,
      selected_abilities: this.selected_abilities,
      stats: this.stats,
      stat_points: this.stat_points,
    };
  }
}

export default BaseClass;
