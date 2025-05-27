// =======================
// TIPE DATA DI JAVASCRIPT
// =======================

/*
📌 Penjelasan Umum:
JavaScript punya 2 jenis tipe data utama:

1. **Primitive Types** → nilai langsung, immutable
2. **Non-Primitive (Reference) Types** → data kompleks, bisa punya properti

Kenapa penting? Karena tipe data memengaruhi cara penyimpanan dan cara kita manipulasi datanya
*/

// =======================
// 1. PRIMITIVE TYPES
// =======================

console.log("=== PRIMITIVE TYPES ===");

// String → Teks
let nama = "Alwi";
console.log(typeof nama); // "string"

// Number → Angka (termasuk desimal & negatif)
let umur = 25;
console.log(typeof umur); // "number"

// Boolean → true atau false
let sudahMakan = true;
console.log(typeof sudahMakan); // "boolean"

// Null → tidak ada nilai (kosong by design)
let pacar = null;
console.log(typeof pacar); // "object" (bug lama di JS)

// Undefined → belum diberi nilai
let alamat;
console.log(typeof alamat); // "undefined"

// Symbol → nilai unik (biasanya untuk key object)
let simbolUnik = Symbol("id");
console.log(typeof simbolUnik); // "symbol"

// BigInt → angka sangat besar (melebihi batas Number biasa)
let angkaBesar = 1234567890123456789012345678901234567890n;
console.log(typeof angkaBesar); // "bigint"

// =======================
// 2. NON-PRIMITIVE TYPES (REFERENCE)
// =======================

console.log("\n=== NON-PRIMITIVE TYPES ===");

// Object → kumpulan properti dalam bentuk key-value
let user = {
  nama: "Alwi",
  umur: 25,
  aktif: true,
};
console.log(typeof user); // "object"

// Array → tipe khusus object (kumpulan data berurutan)
let buah = ["apel", "jeruk", "pisang"];
console.log(typeof buah); // "object" (karena array juga object)

// Function → object yang bisa dijalankan
function sapa() {
  return "Halo!";
}
console.log(typeof sapa); // "function"

// =======================
// 3. PERBEDAAN UTAMA
// =======================

/*
🔸 Primitive disimpan langsung di memory (by value)
🔸 Non-Primitive disimpan sebagai referensi (by reference)

Contoh:

let a = 10;
let b = a;
b = 20;
// a tetap 10 (karena primitive → copy nilai)

let obj1 = { x: 1 };
let obj2 = obj1;
obj2.x = 99;
// obj1 ikut berubah (karena object → referensi)
*/
