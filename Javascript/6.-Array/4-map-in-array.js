// ==============================
// .MAP() - CATATAN UNTUK PEMULA
// ==============================

// .map() adalah method array yang digunakan untuk
// membuat ARRAY BARU dari hasil "ngolah" tiap elemen array asli

// SETIAP nilai yang dikembalikan (return) dari fungsi di dalam .map()
// akan masuk ke array baru

// ==============================
// SINTAKS DASAR:

// array.map(function(currentValue, index, array) {
//   return hasilBaru;
// });

// Penjelasan parameternya:
// - currentValue: nilai dari elemen saat ini
// - index: posisi elemen (0, 1, 2, dst)
// - array: array aslinya (jarang dipakai, tapi tersedia)

// ==============================
// CONTOH:

let angka = [1, 2, 3, 4];

let dikaliDua = angka.map(function (nilai, index, arrayAsli) {
  return nilai * 2;
});

console.log(dikaliDua); // [2, 4, 6, 8]
console.log(angka); // [1, 2, 3, 4] -> tidak berubah
