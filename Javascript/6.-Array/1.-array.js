// ============================
// ARRAY DALAM JAVASCRIPT
// ============================

/*
DESKRIPSI UMUM:
- Array adalah susunan sistematis dari objek-objek yang serupa.
- Dalam konteks komputer, array adalah tipe data yang digunakan untuk mendeskripsikan kumpulan elemen, 
  di mana tiap elemen memiliki **index numerik** yang dimulai dari 0.
- Setiap elemen disimpan secara berurutan, dan bisa diakses berdasarkan index-nya.

CIRI-CIRI ARRAY DI JAVASCRIPT:
- Index dimulai dari 0
- Elemen bisa memiliki berbagai tipe data (string, number, boolean, object, function, bahkan array lain)
- Array di JavaScript sebenarnya bertipe `object`, bukan `array` secara teknis.
- Ini membuat array sangat fleksibel, tapi juga punya sifat-sifat unik seperti method bawaan `.map()`, `.filter()`, dll.

BEDA DENGAN OBJECT BIASA:
- Array: key-nya selalu berupa index numerik (0, 1, 2, ...)
- Object: key-nya bisa berupa string yang kita definisikan sendiri
*/

// ============================
// CONTOH ARRAY DASAR
// ============================

const kotakSepatu = ["adidas", "nike"];
console.log(kotakSepatu); // Output: ['adidas', 'nike']
console.log(kotakSepatu[0]); // Output: 'adidas'

const alphabet = ["a", "b", "c", "d"];
console.log(alphabet[2]); // Output: 'c'

const angka = [1, 2, 3, 4, 5, 6];
console.log(angka[angka.length - 1]); // Output: 6 (elemen terakhir)

// ============================
// ARRAY OF ARRAY (NESTED ARRAY)
// ============================

const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(matrix[0]); // Output: [1, 2] → array di index 0
console.log(matrix[0][1]); // Output: 2 → elemen ke-1 dalam array ke-0
console.log(matrix[2][0]); // Output: 5 → elemen ke-0 dalam array ke-2

// ============================
// FUNCTION DI DALAM ARRAY
// ============================

const campuran = [
  "teks",
  123,
  true,
  function () {
    return "Halo dari dalam array!";
  },
];

console.log(campuran[3]); // Output: function () { ... }
console.log(campuran[3]()); // Output: 'Halo dari dalam array!'

// ============================
// ARRAY DI DALAM ARRAY DI DALAM ARRAY
// ============================

const kompleks = [
  ["a", ["b1", "b2"]],
  ["c", ["d1", ["d2a", "d2b"]]],
];

console.log(kompleks[0][1][0]); // Output: 'b1'
console.log(kompleks[1][1][1][1]); // Output: 'd2b'

// ============================
// CATATAN TAMBAHAN
// ============================

/*
- Array bisa menyimpan berbagai tipe data sekaligus.
- Karena array di JS bertipe `object`, ia mewarisi sifat-sifat object dan punya banyak method bawaan.
- Beberapa method penting yang umum digunakan:
  - push(), pop(), shift(), unshift()
  - slice(), splice()
  - map(), filter(), reduce(), find()
  - includes(), indexOf(), join(), reverse()
- Akses array dalam nested structure cukup dengan chaining index: array[a][b][c]
*/
