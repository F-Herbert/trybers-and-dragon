import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _AllOrcInstances = 0;

  constructor(name: string, dex: number) {
    super(name, dex);
    this._maxLifePoints = 74;
    Orc._AllOrcInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._AllOrcInstances;
  }
}

export default Orc;