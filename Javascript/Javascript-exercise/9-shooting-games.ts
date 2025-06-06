// interface IPlayer {
//   name: string;
//   health: number;
//   power: number;
//   hit(power: number, name: string): void;
//   useItem(item: { health: number; power: number }, name: string): void;
//   showStatus(): void;
// }

// interface IShootingGames {
//   player1: IPlayer;
//   player2: IPlayer;
// }

// class Player implements IPlayer {
//   name: string;
//   health: number = 100;
//   power: number = 10;

//   constructor(name: string) {
//     this.name = name;
//   }

//   hit(power: number, name: string) {
//     this.health -= power;
//     console.log(`${name} shot a laser beam (-${power} HP) at ${this.name}`);
//   }

//   useItem(item: { health: number; power: number }, name: string) {
//     this.health += item.health;
//     this.power += item.power;

//     console.log(
//       `${name} used an item.\n${item.health} health points and ${item.power} power points have been added to ${name} status.`
//     );
//   }

//   showStatus() {
//     console.log(
//       `name: ${this.name} \nstatus: \nhealth => ${this.health} \npower => ${this.power} `
//     );
//   }
// }

// const omniMan = new Player("Omniman");
// console.log(omniMan);
// const homeLander = new Player("Homelander");
// console.log(homeLander);

// class ShootingGames {
//   player1: IPlayer;
//   player2: IPlayer;

//   constructor(player1: IPlayer, player2: IPlayer) {
//     this.player1 = player1;
//     this.player2 = player2;
//   }
//   getRandomItem(name: string) {
//     const item = {
//       health: 0,
//       power: 0,
//     };

//     item.health = Math.random() < 0.5 ? 0 : 10;
//     item.power = Math.random() < 0.5 ? 10 : 0;

//     console.log(
//       `${name} received a random item: +${item.health} health, +${item.power} power.`
//     );

//     return item;
//   }

//   start() {
//     let round = 1;
//     let winner = "";
//     while (this.player1.health > 0 && this.player2.health > 0) {
//       console.log(`======= Round ${round} start =======`);

//       this.player1.showStatus();
//       this.player2.showStatus();

//       const playerItem1 = this.getRandomItem(this.player1.name);
//       const playerItem2 = this.getRandomItem(this.player2.name);

//       this.player1.useItem(playerItem1, this.player1.name);
//       this.player2.useItem(playerItem2, this.player2.name);

//       const whosTurn = Math.random();

//       if (whosTurn < 0.5) {
//         this.player1.hit(this.player2.power, this.player2.name);
//         if (this.player1.health < 1) {
//           winner = this.player2.name;
//           console.log(`======= game over ========`);

//           break;
//         }
//         this.player2.hit(this.player1.power, this.player1.name);

//         if (this.player2.health < 1) {
//           winner = this.player1.name;
//           console.log(`======= game over ========`);

//           break;
//         }
//       } else {
//         this.player2.hit(this.player1.power, this.player1.name);
//         if (this.player2.health < 1) {
//           winner = this.player1.name;
//           console.log(`======= game over ========`);

//           break;
//         }
//         this.player1.hit(this.player2.power, this.player2.name);
//         if (this.player1.health < 1) {
//           winner = this.player2.name;

//           console.log(`======= game over ========`);

//           break;
//         }
//       }

//       this.player1.showStatus();
//       this.player2.showStatus();

//       round++;
//     }

//     console.log(`======= ${winner} wins! =======`);
//     this.player1.showStatus();
//     this.player2.showStatus();
//   }
// }

// const game1 = new ShootingGames(omniMan, homeLander);
// game1.start();
