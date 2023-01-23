import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _AllDwarfInstances = 0;

  constructor(name: string, dex: number) {
    super(name, dex);
    this._maxLifePoints = 80;
    Dwarf._AllDwarfInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._AllDwarfInstances;
  }
}

export default Dwarf;