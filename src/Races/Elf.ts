import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _AllElfInstances = 0;

  constructor(name: string, dex: number) {
    super(name, dex);
    this._maxLifePoints = 99;
    Elf._AllElfInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._AllElfInstances;
  }
}

export default Elf;