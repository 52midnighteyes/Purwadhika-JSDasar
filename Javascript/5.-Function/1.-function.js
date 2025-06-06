// ===========================
// FUNCTION DI JAVASCRIPT
// ===========================

// Apa itu Function?
// Function adalah blok kode yang dirancang untuk menjalankan tugas tertentu.
// Bisa dipanggil berkali-kali, jadi nggak perlu nulis ulang logika yang sama.

// ======================================
// SINTAKS DASAR MEMBUAT FUNCTION
// ======================================

// Bentuk dasar:
// function namaFunction(parameter1, parameter2, ...) {
//   // kode yang dijalankan
//   return hasil;
// }

// Contoh:
function tambah(a, b) {
  return a + b;
}
console.log(tambah(3, 5)); // Output: 8

// ======================================
// 🔁 CARA MEMANGGIL FUNCTION
// ======================================
// Cukup panggil pakai: namaFunction(argumen1, argumen2, ...)

// contoh volume 2 kubus

function volumeDuaKubus(a, b) {
  let total = 0;
  let volumeA = 0;
  let volumeB = 0;

  volumeA = Math.pow(a, 3);
  volumeB = Math.pow(b, 3);
  total = volumeA + volumeB;

  return total;
}

console.log(volumeDuaKubus(8, 3));

// contoh ngasih argumen

function pertambahan(a, b) {
  const pertambahan = a + b;
  return pertambahan;
}

function perkalian(a, b) {
  const perkalian = a * b;
  return perkalian;
}

console.log(perkalian(pertambahan(7, 3), pertambahan(5, 3)));

// sudo variable / variabel semu arguments

function cekArguments() {
  return arguments;
}
console.log(cekArguments(1, 6, "hahaha"));

function tambah() {
  let hasil = 0;
  for (let i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

console.log(tambah(1, 2, 3, 4, 5, 6, 7));

// refactoring
