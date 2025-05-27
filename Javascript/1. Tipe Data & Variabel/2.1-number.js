// =======================
// PENGENALAN TIPE DATA NUMBER DI JAVASCRIPT
// =======================

/*
Deskripsi:
Tipe data `number` di JavaScript digunakan untuk menyimpan semua jenis angka, baik bilangan bulat (integer) maupun desimal (floating-point). JavaScript tidak membedakan antara integer dan float — semuanya disimpan sebagai 64-bit floating point number sesuai standar IEEE 754.

Fungsi utama dari tipe data `number` dalam JavaScript adalah untuk melakukan operasi matematika, evaluasi logika numerik, dan manipulasi data angka dalam program.

Catatan penting:
- Angka yang terlalu besar akan otomatis dikonversi ke `Infinity`
- Operasi tidak valid (seperti 0/0 atau parseInt("abc")) akan menghasilkan `NaN`
- Operasi aritmatika seperti penjumlahan, pengurangan, perkalian, dan pembagian bekerja langsung dengan tipe number
*/

// =======================
// CONTOH UMUM
// =======================

let angkaBulat = 100;
let angkaDesimal = 3.14;
let angkaNegatif = -25;
let hasilBagi = 10 / 3;

console.log(angkaBulat);     // 100
console.log(angkaDesimal);   // 3.14
console.log(angkaNegatif);   // -25
console.log(hasilBagi);      // 3.333...

// =======================
// NILAI KHUSUS PADA NUMBER
// =======================

console.log(typeof NaN);                  // "number"
console.log(typeof Infinity);             // "number"
console.log(typeof -Infinity);            // "number"

console.log(0 / 0);                       // NaN
console.log(100 / 0);                     // Infinity
console.log(-100 / 0);                    // -Infinity

// =======================
// OPERATOR UMUM UNTUK NUMBER
// =======================

let a = 10;
let b = 3;

console.log(a + b);  // 13 (penjumlahan)
console.log(a - b);  // 7 (pengurangan)
console.log(a * b);  // 30 (perkalian)
console.log(a / b);  // 3.333... (pembagian)
console.log(a % b);  // 1 (modulus/sisa bagi)
console.log(a ** b); // 1000 (pangkat: 10^3)

// =======================
// KESIMPULAN
// =======================

/*
- Semua angka di JS bertipe number (tidak ada int, float, double).
- Operasi matematika dasar bisa langsung digunakan dengan tipe ini.
- JavaScript memiliki method dan properti tambahan lewat objek `Number` untuk manipulasi lanjutan (lihat file Number-methods).
*/
