// ==============================
// CLASS DI JAVASCRIPT (Inheritance & Polymorphism)
// ==============================

/**

Class bisa saling mewarisi sifat satu sama lain.
Konsep ini disebut Inheritance (pewarisan).
Jika subclass mengubah method yang diwarisi, itu disebut Polymorphism (bentuk berbeda).
*/
// ==============================
// 1. Contoh Dasar: Class Animal
// Menunjukkan konsep Inheritance dan Polymorphism
// ==============================

class Animal {
  makeASound() {
    return "bersuara";
  }
}

class Dog extends Animal {
  constructor() {
    super(); // Memanggil constructor class Animal
  }

  makeASound() {
    return "bark";
  }
}

class Cat extends Animal {
  constructor() {
    super();
  }

  makeASound() {
    return "Meow";
  }
}

// ==============================
// 2. Contoh Penggunaan
// ==============================

const animalUmum = new Animal();
console.log(animalUmum.makeASound()); // "bersuara"

const anjing = new Dog();
console.log(anjing.makeASound()); // "bark"

const kucing = new Cat();
console.log(kucing.makeASound()); // "Meow"

// ==============================
// PENJELASAN OOP:
// ==============================

/**

INHERITANCE (Pewarisan)
Class Dog dan Cat mewarisi dari class Animal
Artinya, mereka dapat menggunakan method dari Animal seperti makeASound()
Tapi mereka juga bisa meng-override method tersebut dengan versinya sendiri
POLYMORPHISM (Polimorfisme)
Method makeASound() menghasilkan output berbeda tergantung objeknya
Meski semua punya method yang sama, hasilnya bisa "bersuara", "bark", atau "Meow"
Ini menunjukkan satu interface bisa punya banyak bentuk
*/
