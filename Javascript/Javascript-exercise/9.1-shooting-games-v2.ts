interface IItem {
  health: number;
  power: number;
}

interface IPlayer extends IItem {
  name: string;

  receiveDamage(player: IPlayer): void;
  useItem(item: IItem): void;
  showStatus(): void;
}

class Player implements IPlayer {
  name: string;
  health: number = 100;
  power: number = 10;

  constructor(name: string) {
    this.name = name;
  }

  receiveDamage(player: IPlayer): void {
    this.health -= player.power;
    console.log(
      `${player.name} shoot a laser beam. \n ${this.name} received damage! (-${player.power}HP)`
    );
  }

  useItem(item: IItem): void {
    this.power += item.power;
    this.health += item.health;

    console.log(
      `${this.name} used an item! +${item.power} power points & ${item.health} health points add to their stats`
    );
  }

  showStatus() {
    if (this.health < 0) {
      this.health = 0;
    }
    console.log(
      `====== ${this.name} ======== \nHealth = ${this.health}\nPower = ${this.power}`
    );
  }
}

const omniman = new Player("Omniman");
console.log(omniman);
const homelander = new Player("Homelander");
console.log(homelander);

interface IGame {
  player1: IPlayer;
  player2: IPlayer;
  getRandomItem(): IItem;
  start(): void;
}

class ShootingGames implements IGame {
  player1: IPlayer;
  player2: IPlayer;

  constructor(player1: IPlayer, player2: IPlayer) {
    (this.player1 = player1), (this.player2 = player2);
  }

  getRandomItem(): IItem {
    const item = {
      health: 0,
      power: 0,
    };
    Math.random() < 0.5 ? (item.health += 10) : (item.health += 0);
    Math.random() < 0.5 ? (item.power += 10) : (item.power += 0);

    return item;
  }

  start(): void {
    let round = 1;
    let winner = "";

    while (!winner) {
      console.log(`======= ROUND ${round} START =======`);

      this.player1.showStatus();
      this.player2.showStatus();

      const item1 = this.getRandomItem();
      const item2 = this.getRandomItem();

      this.player1.useItem(item1);
      this.player2.useItem(item2);

      const whosTurn = Math.random();

      if (whosTurn < 0.5) {
        this.player1.receiveDamage(this.player2);

        if (this.player1.health < 1) {
          console.log(`======= GAME OVER =======`);
          winner = this.player2.name;
          break;
        }

        this.player2.receiveDamage(this.player1);

        if (this.player2.health < 1) {
          console.log(`======= GAME OVER ======`);
          winner = this.player1.name;
          break;
        }
      } else {
        this.player2.receiveDamage(this.player1);

        if (this.player2.health < 1) {
          console.log(`======= GAME OVER ======`);
          winner = this.player1.name;
          break;
        }

        this.player1.receiveDamage(this.player2);

        if (this.player1.health < 1) {
          console.log(`======= GAME OVER =======`);
          winner = this.player2.name;
          break;
        }
      }

      this.player1.showStatus();
      this.player2.showStatus();

      round++;
    }

    console.log(`======= ${winner} WINS! ========`);
    this.player1.showStatus();
    this.player2.showStatus();
  }
}

const newGame = new ShootingGames(omniman, homelander);
newGame.start();
