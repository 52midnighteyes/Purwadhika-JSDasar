// interface IItem {
//   health: number;
//   power: number;
// }

// interface IPlayer {
//   name: string;
//   health: number;
//   power: number;

//   receiveDamage(attacker: IPlayer): void;
//   useItem(item: IItem): void;
//   showStatus(): void;
//   isAlive(): boolean;
// }

// class Player implements IPlayer {
//   name: string;
//   health = 100;
//   power = 10;

//   constructor(name: string) {
//     this.name = name;
//   }

//   receiveDamage(attacker: IPlayer): void {
//     this.health = Math.max(0, this.health - attacker.power);
//     console.log(
//       `${attacker.name} shoots a laser! ${this.name} takes -${attacker.power} HP.`
//     );
//   }

//   useItem(item: IItem): void {
//     this.health += item.health;
//     this.power += item.power;
//     console.log(
//       `${this.name} uses item: +${item.health} HP, +${item.power} Power.`
//     );
//   }

//   showStatus(): void {
//     console.log(
//       `📊 ${this.name} | Health: ${this.health} | Power: ${this.power}`
//     );
//   }

//   isAlive(): boolean {
//     return this.health > 0;
//   }
// }

// interface IGame {
//   start(): void;
// }

// class ShootingGame implements IGame {
//   constructor(public player1: IPlayer, public player2: IPlayer) {}

//   private getRandomItem(): IItem {
//     return {
//       health: Math.random() < 0.5 ? 10 : 0,
//       power: Math.random() < 0.5 ? 10 : 0,
//     };
//   }

//   private fightRound(): IPlayer | null {
//     const attackerFirst = Math.random() < 0.5;

//     const [first, second] = attackerFirst
//       ? [this.player1, this.player2]
//       : [this.player2, this.player1];

//     first.receiveDamage(second);
//     if (!first.isAlive()) return second;

//     second.receiveDamage(first);
//     if (!second.isAlive()) return first;

//     return null;
//   }

//   start(): void {
//     let round = 1;

//     while (true) {
//       console.log(`\n===== ROUND ${round} =====`);
//       this.player1.showStatus();
//       this.player2.showStatus();

//       this.player1.useItem(this.getRandomItem());
//       this.player2.useItem(this.getRandomItem());

//       const winner = this.fightRound();
//       if (winner) {
//         console.log(`\n🏆 ${winner.name} WINS THE GAME!`);
//         break;
//       }

//       round++;
//     }

//     this.player1.showStatus();
//     this.player2.showStatus();
//   }
// }
