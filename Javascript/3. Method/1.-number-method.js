// =======================
// NUMBER METHODS IN JAVASCRIPT
// =======================

/*
Deskripsi Umum:
Tipe data number di JavaScript digunakan untuk menyimpan nilai angka, baik bilangan bulat (integer)
maupun pecahan (floating-point).

JavaScript menyediakan method bawaan (built-in) untuk memproses angka:
- Mengubah format angka (string, notasi ilmiah, pembulatan)
- Mengecek sifat angka (finite, integer, NaN)
- Parsing dari string ke number
- Format tampilan angka secara spesifik

Catatan:
Sebagian besar method bisa dipanggil langsung pada angka, atau pada hasil ekspresi angka.
*/

let number = 1234567;

// =======================
// 1. toString()
/*
Mengubah angka menjadi string (teks).
Sering digunakan saat ingin menggabungkan angka ke dalam kalimat atau format teks.
*/
console.log(number);
let numberToString = number.toString();
console.log(numberToString);
console.log(typeof number); // number
console.log(typeof numberToString); // string

// =======================
// 2. toFixed(n)
/*
Membulatkan angka desimal dan menampilkan `n` angka di belakang koma.
Output berupa string, bukan number.
*/
let decimalNumber = 1.1234567;
console.log(decimalNumber);
let numberToFixed = decimalNumber.toFixed(2);
console.log(numberToFixed); // "1.12"
console.log(typeof numberToFixed); // string

// =======================
// 3. toExponential()
/*
Mengubah angka menjadi format notasi ilmiah (eksponensial).
Cocok untuk menampilkan angka yang sangat besar atau sangat kecil.
*/
console.log(number);
let numberToExpo = number.toExponential();
console.log(numberToExpo); // "1.234567e+6"

let smallNumber = 0.0000123;
console.log(smallNumber.toExponential()); // "1.23e-5"

// =======================
// 4. toPrecision(n)
/*
Mengatur total digit signifikan (sebelum dan sesudah koma) yang ingin ditampilkan.
Hasilnya berupa string.
*/
console.log(decimalNumber);
let numberToPrecision = decimalNumber.toPrecision(3);
console.log(numberToPrecision); // "1.12"

let anotherNumber = 12345.6789;
console.log(anotherNumber.toPrecision(4)); // "1.235e+4"

// =======================
// 5. valueOf()
/*
Mengembalikan nilai asli dari objek number.
Biasanya digunakan secara otomatis oleh JavaScript di belakang layar.
*/
console.log(number);
let numberValueOf = number.valueOf();
console.log(numberValueOf); // 1234567

// =======================
// 6. isNaN()
/*
Memeriksa apakah nilai adalah NaN (Not a Number).
Hati-hati: NaN adalah hasil dari operasi matematis yang tidak valid.
Output berupa boolean.
*/
console.log(isNaN(number)); // false
console.log(isNaN(NaN)); // true
console.log(isNaN("abc")); // true (karena "abc" tidak bisa dikonversi ke angka)

// =======================
// 7. isFinite()
/*
Memeriksa apakah nilai adalah angka terbatas (bukan Infinity, -Infinity, atau NaN).
Output berupa boolean.
*/
console.log(isFinite(number)); // true
console.log(isFinite(Infinity)); // false
console.log(isFinite("100")); // true (karena bisa dikonversi ke number)
console.log(isFinite("hello")); // false (karena NaN)

// =======================
// 8. parseInt()
/*
Mengubah string menjadi bilangan bulat.
Akan berhenti membaca string saat menemukan karakter non-angka.
*/
let teks1 = "42.89px";
console.log(teks1);
let numberFromParseInt = parseInt(teks1);
console.log(numberFromParseInt); // 42

console.log(parseInt("123abc")); // 123
console.log(parseInt("abc123")); // NaN

// =======================
// 9. parseFloat()
/*
Mengubah string menjadi angka desimal (floating point).
Berbeda dengan parseInt karena mempertahankan angka di belakang koma.
*/
let teks2 = "42.89px";
console.log(teks2);
let numberFromParseFloat = parseFloat(teks2);
console.log(numberFromParseFloat); // 42.89

console.log(parseFloat("3.14.159")); // 3.14

// =======================
// 10. Number.isInteger()
/*
Cek apakah nilai adalah bilangan bulat (integer).
Hanya akan mengembalikan true untuk angka murni tanpa koma.
*/
console.log(Number.isInteger(123)); // true
console.log(Number.isInteger(123.45)); // false
console.log(Number.isInteger("123")); // false (string, bukan number)
