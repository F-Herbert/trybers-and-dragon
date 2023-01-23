import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _AllHalflingInstances = 0;

  constructor(name: string, dex: number) {
    super(name, dex);
    this._maxLifePoints = 60;
    Halfling._AllHalflingInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._AllHalflingInstances;
  }
}

export default Halfling;