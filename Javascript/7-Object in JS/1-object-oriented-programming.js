// ==============================
// OBJECT DASAR DI JAVASCRIPT
// ==============================

/**
 * Object adalah struktur data yang menyimpan data dalam format pasangan key-value.
 * Bisa juga menyimpan fungsi (disebut method) sebagai salah satu propertinya.
 */

// ==============================
// 1. Contoh Object Biasa
// ==============================

const sepatu = {
  name: "Nike",
  tipe: "Air Max",
  harga: 1200000,
};

const sepatu2 = {
  name: "Adidas",
  tipe: "Boost",
  harga: 1200000,
};

console.log("sepatu =", sepatu);

// ==============================
// 2. Object dengan Method
// ==============================

const mobil = {
  // key : value
  brand: "Toyota",
  model: "Alphard",
  harga: 5000,

  // method = fungsi di dalam object
  ignition() {
    return "mobil menyala";
  },
};

console.log("mobil =", mobil);
console.log(mobil.ignition()); // Akses method
console.log(mobil.harga); // Akses properti biasa
console.log(mobil["brand"]); // Akses properti pakai string

// ==============================
// 3. Menambahkan Properti Baru
// ==============================

mobil.color = "red"; // Tambah properti baru secara dinamis
console.log(mobil.color); // Output: "red"

// ==============================
// 4. Destructuring Object
// ==============================

const { brand, model } = mobil;
console.log(brand); // Output: "Toyota"

// ==============================
// PENJELASAN OOP SECARA UMUM (Teori)
// ==============================

/**
 * 1. ENCAPSULATION (Pembungkusan)
 *    - Menggabungkan data dan fungsinya ke dalam satu unit.
 *    - Contoh: object `mobil` punya data (brand, model, harga) dan method `ignition()`.

 * 2. INHERITANCE (Pewarisan)
 *    - Konsep mewariskan properti atau method dari object induk ke object anak.
 *    - Belum terlihat di sini, tapi nanti bisa dengan prototype atau class.

 * 3. ABSTRACTION (Abstraksi)
 *    - Menyembunyikan detail cara kerja internal, cukup tampilkan fungsi pentingnya.
 *    - Contoh: kita cukup pakai `mobil.ignition()`, gak perlu tau cara kerjanya di dalam.

 * 4. POLYMORPHISM (Polimorfisme)
 *    - Satu method bisa memiliki banyak bentuk (implementasi berbeda).
 *    - Contoh: method `speak()` di object `anjing` dan `kucing` bisa berbeda-beda meskipun namanya sama.
 */
