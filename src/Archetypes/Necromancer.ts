import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _allNecromancerInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._allNecromancerInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._allNecromancerInstances;
  }

  get energyType():EnergyType {
    return this._energyType;
  }
}
