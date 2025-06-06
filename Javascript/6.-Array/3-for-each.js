// ==============================
// FOR EACH - CATATAN UNTUK PEMULA
// ==============================

// forEach adalah cara untuk menjalankan kode untuk SETIAP elemen dalam array
// Ini seperti for loop, tapi lebih simpel dan rapi
// forEach tidak menghasilkan array baru (cuma buat ngejalanin aksi)

// ==============================
// SINTAKS DASAR:

// array.forEach(function(currentValue, index, array) {
//   // aksi yang ingin dilakukan untuk tiap elemen
// });

// Penjelasan parameternya:
// - currentValue: nilai dari elemen saat ini
// - index: posisi elemen dalam array (0, 1, 2, dst)
// - array: array aslinya (yang sedang di-loop)

// ==============================
// CONTOH:

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.forEach(function (currentValue, index, array) {
  console.log(`${currentValue} -- ${index} -- ${array}`);
});

// Output:
// 1 -- 0 -- 1,2,3,4,5,6,7,8
// 2 -- 1 -- 1,2,3,4,5,6,7,8
// dst...
