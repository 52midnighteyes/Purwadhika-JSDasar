// =======================
// TRUTHY & FALSY VALUES
// =======================

/*
📌Penjelasan Umum:
Dalam JavaScript, semua nilai (value) bisa dievaluasi sebagai "benar" (truthy) atau "salah" (falsy)
saat digunakan dalam konteks logika seperti if, while, atau ternary.

Falsy → dianggap "false" saat diuji dalam kondisi
Truthy → dianggap "true" saat diuji dalam kondisi

Fungsinya: untuk membuat logika sederhana tanpa perlu membandingkan eksplisit
contoh:
  if (nama) → hanya true kalau nama tidak kosong/null/undefined
*/

// =======================
// FALSY VALUES
// =======================
// Hanya ada 8 nilai falsy di JavaScript:

console.log("=== Falsy Values ===");

console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false (BigInt nol)
console.log(Boolean("")); // false (string kosong)
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Semua nilai di atas akan dianggap false saat digunakan dalam if
let tesFalsy = "";
if (tesFalsy) {
  console.log("Truthy");
} else {
  console.log("Falsy"); // yang keluar
}

// =======================
// TRUTHY VALUES
// =======================
// Semua selain 8 falsy di atas dianggap truthy

console.log("\n=== Truthy Values ===");

console.log(Boolean(true)); // true
console.log(Boolean(1)); // true
console.log(Boolean("0")); // true (string non-kosong)
console.log(Boolean("false")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(function () {})); // true

let tesTruthy = "hello";
if (tesTruthy) {
  console.log("Truthy"); // yang keluar
} else {
  console.log("Falsy");
}

// =======================
// PENERAPAN UMUM
// =======================

// Contoh 1: Validasi form sederhana
let username = "";
if (!username) {
  console.log("Username tidak boleh kosong");
}

// Contoh 2: Default value pakai operator OR
let inputUser = "";
let namaUser = inputUser || "Guest";
console.log(`Halo, ${namaUser}`); // output: Halo, Guest

// Contoh 3: Konversi eksplisit pakai Boolean()
let nilai = "Alwi";
console.log(Boolean(nilai)); // true
