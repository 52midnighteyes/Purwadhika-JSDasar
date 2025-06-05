// ==============================
// .filter() dan .find()
// ==============================

// Array dasar
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ==============================
// 1. .filter()
// ==============================
// Digunakan untuk menyaring elemen-elemen yang memenuhi kondisi tertentu.
// Mengembalikan array baru berisi SEMUA elemen yang return-nya true.

const genap = angka.filter(function (x) {
  return x % 2 === 0;
});

console.log(genap); // Output: [2, 4, 6, 8, 10]

// ==============================
// 2. .find()
// ==============================
// Digunakan untuk mencari SATU elemen pertama yang memenuhi kondisi tertentu.
// Mengembalikan elemen tersebut, bukan array.
// Jika tidak ketemu, hasilnya undefined.

const cariGenap = angka.find(function (x) {
  return x % 2 === 0;
});

console.log(cariGenap); // Output: 2

// ==============================
// PERBEDAAN UTAMA:
// ==============================
/*
| Method  | Hasil          | Jumlah Elemen yang Diambil | Tipe Hasil |
|---------|----------------|-----------------------------|------------|
| filter  | Semua cocok    | Bisa banyak                 | Array      |
| find    | Pertama cocok  | Cuma satu                   | Nilai      |
*/
