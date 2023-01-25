import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(private character: 
  Fighter, private monster:Monster[] | 
  SimpleFighter[] | 
  Fighter[]) {
    super(character);
  }

  fight(): number {
    this.monster.forEach((monster) => {
      while (this.character.lifePoints > 0 && monster.lifePoints > 0) {
        this.character.attack(monster);
        monster.attack(this.character);
      }
    });
    return this.character.lifePoints === -1 ? -1 : 1;
  }
}