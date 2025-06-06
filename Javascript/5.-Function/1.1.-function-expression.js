// ============================
// FUNCTION EXPRESSION VS FUNCTION DECLARATION
// ============================

/*
FUNCTION DECLARATION:
- Didefinisikan dengan kata kunci `function` di awal.
- Bisa dipanggil sebelum deklarasinya karena hoisting (diangkat ke atas oleh JavaScript).
- Cocok untuk function utama yang sifatnya reusable di mana-mana.

Contoh:
function tambah(a, b) {
  return a + b;
}

tambah(2, 3); // bisa dipanggil sebelum definisinya karena hoisting


FUNCTION EXPRESSION:
- Function disimpan dalam sebuah variabel.
- Tidak bisa dipanggil sebelum didefinisikan (tidak di-hoisting).
- Lebih fleksibel dan powerful, cocok untuk:
  - Callback
  - Parameter function lain
  - Sebagai closure
  - IIFE (Immediately Invoked Function Expression)

Contoh:
const kurang = function(a, b) {
  return a - b;
};

kurang(5, 2); // harus setelah deklarasi

*/

// ============================
// CONTOH FUNCTION EXPRESSION
// ============================

const pengurangan = function (a, b) {
  return a - b;
};

console.log(pengurangan(5, 2)); // Output: 3
console.log(pengurangan(3, 4)); // Output: -1
console.log(pengurangan(1, 2)); // Output: -1

// ============================
// KAPAN PAKAI DECLARATION vs EXPRESSION?
// ============================

/*
Gunakan FUNCTION DECLARATION ketika:
- Kamu butuh function yang reusable di banyak tempat.
- Kamu ingin bisa memanggilnya bahkan sebelum deklarasinya (karena hoisting).
- Cocok untuk utility function utama seperti hitung, format, validasi, dsb.

Gunakan FUNCTION EXPRESSION ketika:
- Kamu butuh fleksibilitas tinggi.
- Kamu ingin membuat function sebagai argumen atau return value.
- Kamu hanya ingin function itu hidup di scope tertentu.
- Kamu membuat closure, callback, atau IIFE.

Secara best practice:
- Function Declaration → untuk deklarasi umum
- Function Expression → untuk logic lokal, callback, atau modular
*/

// ============================
// IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
// ============================

/*
IIFE adalah function expression yang langsung dijalankan saat didefinisikan.
Biasanya digunakan untuk membuat scope sendiri (terisolasi).

Contoh:
*/

(function () {
  console.log("IIFE dijalankan langsung!");
})();
