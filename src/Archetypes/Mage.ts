import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _allMageInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._allMageInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._allMageInstances;
  }

  get energyType():EnergyType {
    return this._energyType;
  }
}
