// ==============================
// CLASS DI JAVASCRIPT
// ==============================

/**
 * Class adalah template untuk membuat objek.
 * Class menyatukan data (property) dan fungsi (method) ke dalam satu struktur.
 * Class dibangun di atas prototype, tapi syntax-nya lebih modern.
 */

// ==============================
// 1. Contoh Dasar: Class Sepatu
// ==============================

class Sepatu {
  nama;
  harga;
  model;

  constructor(paramNama, paramHarga, paramModel) {
    this.nama = paramNama;
    this.harga = paramHarga;
    this.model = paramModel;
  }
}

const newSepatu = new Sepatu("aduhdah", 5000, "boost");
newSepatu.nama = "adidas";
console.log(newSepatu);

const sepatu3 = new Sepatu("puma", 5000, "Macan");

// ==============================
// 2. Contoh Lanjutan: Class Car
//    Menunjukkan konsep *Encapsulation* dan *Abstraction*
// ==============================

class Car {
  brand;
  price;
  model;
  #color; // private field (ENCAPSULATION)

  constructor(paramBrand, paramPrice, paramModel, paramColor) {
    this.brand = paramBrand;
    this.price = paramPrice;
    this.model = paramModel;
    this.#color = paramColor;
  }

  // Getter method untuk ambil nilai private field (ENCAPSULATION)
  getColor() {
    return this.#color;
  }

  // Setter method untuk ubah nilai private field (ENCAPSULATION)
  setColor(paramColor) {
    this.#color = paramColor;
  }

  // Method ini menyembunyikan detail implementasi (ABSTRACTION)
  printInfo() {
    console.log(
      `${this.brand} ${this.model}, harga: ${this.price}, warna: ${this.#color}`
    );
  }
}

const BMW = new Car("BMW", 50000, "X", "white");
console.log(BMW.price); // 50000
console.log(BMW.getColor()); // "white"

BMW.setColor("polka");
BMW.printInfo(); // "BMW X, harga: 50000, warna: polka"
console.log(BMW);

// ==============================
// PENJELASAN OOP:
// ==============================

/**
 * 1. ENCAPSULATION (Pembungkusan)
 *    - Menyembunyikan detail internal dari objek, supaya nggak bisa diakses langsung dari luar.
 *    - Contohnya: properti #color hanya bisa diakses lewat getColor() / setColor()
 *
 * 2. ABSTRACTION (Abstraksi)
 *    - Menyembunyikan kerumitan, dan hanya memperlihatkan hal penting.
 *    - Contohnya: method printInfo() cukup tampilkan informasi penting, tanpa perlu tau cara dapet warnanya.
 *
 * 3. Class juga memungkinkan konsep lain seperti Inheritance dan Polymorphism (belum dibahas di sini).
 */
