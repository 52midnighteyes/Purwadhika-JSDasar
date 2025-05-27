// =======================
// NUMBER STATIC METHODS & CONSTANTS IN JAVASCRIPT
// =======================

/*
Deskripsi Umum:
Objek bawaan `Number` di JavaScript menyediakan berbagai method **statis** dan **konstanta** untuk:
- Memeriksa tipe angka (apakah integer, NaN, finite, dsb.)
- Menjaga keamanan operasi matematika (safe integer)
- Menyediakan batasan nilai yang bisa digunakan secara aman dalam program

Catatan penting:
- **Static method** berarti method yang hanya bisa dipanggil lewat objek `Number`, seperti `Number.isNaN()` — tidak bisa dipanggil langsung dari angka seperti `angka.isNaN()`.
- **Global function** adalah fungsi yang tersedia di lingkungan JavaScript tanpa harus dipanggil lewat objek. Contoh: `isNaN("text")`.
- Static method TIDAK melakukan konversi tipe (coercion), sedangkan global function bisa melakukan coercion otomatis.

Coercion = proses otomatis JavaScript dalam mengubah satu tipe data ke tipe lain, misalnya dari string ke number. Ini sering menimbulkan bug jika tidak dipahami.
*/

// =======================
// 1. Number.isInteger(value)
// =======================
/*
Cek apakah `value` adalah bilangan bulat (integer).
Tidak melakukan konversi tipe secara otomatis (no coercion).
Lebih strict daripada metode biasa seperti `value % 1 === 0`.
*/
let number = 123;
console.log(Number.isInteger(number)); // true
number = 123.45;
console.log(Number.isInteger(number)); // false
number = "123";
console.log(Number.isInteger(number)); // false

// Perbandingan dengan cara biasa:
let x = "10";
console.log(x % 1 === 0); // true (padahal ini string!)

// =======================
// 2. Number.isNaN(value)
// =======================
/*
Cek apakah `value` benar-benar adalah NaN (Not a Number).
Tidak seperti fungsi global `isNaN()` yang melakukan konversi, ini **lebih akurat**.
*/
number = NaN;
console.log(Number.isNaN(number)); // true
number = "hello";
console.log(Number.isNaN(number)); // false

// Dibandingkan dengan versi global:
console.log(isNaN("hello")); // true (dikonversi dulu ke NaN!)

// Penjelasan konversi: saat `isNaN("hello")` dipanggil, "hello" tidak bisa jadi angka → dikonversi jadi NaN → hasilnya true.

// =======================
// 3. Number.isFinite(value)
// =======================
/*
Cek apakah `value` adalah angka yang terbatas (finite).
Akan **false** jika `value` adalah NaN, Infinity, -Infinity, atau bukan tipe number.
Lebih strict dibanding fungsi global `isFinite()`.
*/
number = 123;
console.log(Number.isFinite(number)); // true
number = "123";
console.log(Number.isFinite(number)); // false

// Global version:
console.log(isFinite("123")); // true (dikonversi dulu ke 123)

// =======================
// 4. Number.isSafeInteger(value)
// =======================
/*
Cek apakah `value` adalah integer dalam "rentang aman" JavaScript.

🔍 Apa itu "rentang aman"?
JavaScript menyimpan angka dalam format 64-bit floating point.
Namun hanya bisa menyimpan angka bulat secara presisi hingga batas tertentu:
  👉 -9007199254740991 sampai 9007199254740991 (±2^53 - 1)

Di luar batas itu, operasi matematika bisa menyebabkan angka tidak akurat karena keterbatasan representasi bit.
*/
number = 100;
console.log(Number.isSafeInteger(number)); // true
number = 9007199254740992;
console.log(Number.isSafeInteger(number)); // false

// =======================
// 5. Number Constants
// =======================
/*
Konstanta berikut disediakan oleh `Number` untuk memahami batas teknis tipe data angka di JavaScript:
*/
console.log(Number.MAX_VALUE); // Nilai terbesar yang bisa direpresentasikan
console.log(Number.MIN_VALUE); // Nilai positif terkecil (mendekati 0, tapi bukan 0)

console.log(Number.MAX_SAFE_INTEGER); // Batas integer aman maksimum (2^53 - 1)
console.log(Number.MIN_SAFE_INTEGER); // Batas integer aman minimum -(2^53 - 1)

console.log(Number.EPSILON); // Perbedaan terkecil antara dua angka floating-point. Berguna untuk perbandingan desimal (karena 0.1 + 0.2 !== 0.3)

console.log(Number.POSITIVE_INFINITY); // Representasi nilai tak hingga positif
console.log(Number.NEGATIVE_INFINITY); // Representasi nilai tak hingga negatif

console.log(Number.NaN); // Representasi nilai NaN (Not a Number)

/*
Kenapa ini penting untuk pemula?
Karena banyak error atau bug di JavaScript muncul karena:
- Angka dianggap integer padahal bukan (contoh: "10" dianggap number padahal string)
- Perbandingan angka desimal yang tidak akurat (karena floating-point math)
- Parsing string yang tidak sesuai harapan (contoh: parseInt("10px") menghasilkan 10, tapi parseInt("px10") menghasilkan NaN)
- Operasi matematika di luar rentang aman bisa menyebabkan hasil tidak akurat (contoh: 9999999999999999 + 1 === 10000000000000000)

Dengan memahami method & konstanta di atas, kamu bisa menulis program yang lebih kuat, aman, dan bisa diandalkan saat bekerja dengan angka.
*/
