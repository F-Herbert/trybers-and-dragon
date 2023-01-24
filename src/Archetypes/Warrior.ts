import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _allWarriorInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._allWarriorInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._allWarriorInstances;
  }

  get energyType():EnergyType {
    return this._energyType;
  }
}
