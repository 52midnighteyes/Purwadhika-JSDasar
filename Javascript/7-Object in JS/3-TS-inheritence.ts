// ============================================
// INTERFACE & INHERITANCE: Studi Kasus Persija Jakarta
// ============================================

/*
Interface: IClub
- Struktur dasar untuk semua klub sepak bola
- Harus memiliki nama dan tahun didirikan
*/
interface IClub {
  name: string;
  founded: number;
}

/*
Interface: ITeam
- Mewarisi IClub
- Menambahkan nama pelatih dan stadion
*/
interface ITeam extends IClub {
  coach: string;
  stadium: string;
}

/*
Interface: ISquad
- Mewarisi ITeam
- Menambahkan daftar pemain
*/
interface ISquad extends ITeam {
  players: string[];
}

// ============================================
// IMPLEMENTASI CLASS SESUAI INTERFACE
// ============================================

/*
Class: Club
- Implementasi dari IClub
*/
class Club implements IClub {
  name: string;
  founded: number;

  constructor(name: string, founded: number) {
    this.name = name;
    this.founded = founded;
  }
}

/*
Class: Team
- Turunan dari Club
- Implementasi dari ITeam
*/
class Team extends Club implements ITeam {
  coach: string;
  stadium: string;

  constructor(name: string, founded: number, coach: string, stadium: string) {
    super(name, founded);
    this.coach = coach;
    this.stadium = stadium;
  }
}

/*
Class: Squad
- Turunan dari Team
- Implementasi dari ISquad
*/
class Squad extends Team implements ISquad {
  players: string[];

  constructor(
    name: string,
    founded: number,
    coach: string,
    stadium: string,
    players: string[]
  ) {
    super(name, founded, coach, stadium);
    this.players = players;
  }
}

// ============================================
// CONTOH PEMAKAIAN OBJEK PERSIJA JAKARTA
// ============================================

const persijaSquad: Squad = new Squad(
  "Persija Jakarta",
  1928,
  "Carlos Peña",
  "Stadion Utama Gelora Bung Karno",
  ["Andritany", "Riko Simanjuntak", "Firza Andika", "Hanno Behrens"]
);

console.log(persijaSquad);
/*
Output:
Squad {
  name: 'Persija Jakarta',
  founded: 1928,
  coach: 'Carlos Peña',
  stadium: 'Stadion Utama Gelora Bung Karno',
  players: [ 'Andritany', 'Riko Simanjuntak', 'Firza Andika', 'Hanno Behrens' ]
}
*/
