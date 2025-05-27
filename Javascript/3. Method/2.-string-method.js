// =======================
// STRING METHODS IN JAVASCRIPT
// =======================

/*
Deskripsi Umum:
String adalah tipe data primitif yang berisi teks. Di JavaScript, string bersifat immutable.
Itu artinya, setiap method yang dipanggil pada string tidak akan mengubah string aslinya,
melainkan akan mengembalikan string baru sebagai hasilnya.

String methods sangat penting untuk:
- Mengakses karakter tertentu
- Membersihkan input pengguna
- Mengubah format huruf (kapital/kecil)
- Menggabungkan, memotong, dan memecah string
- Melakukan manipulasi teks secara efisien

Semua method berikut bisa digunakan langsung pada variabel string.
*/

let string = "invincible";

// =======================
// 1. length
/*
Digunakan untuk menghitung jumlah total karakter dalam string,
termasuk huruf, angka, spasi, dan simbol. Hasilnya berupa number.
*/
console.log(string);
let stringLength = string.length;
console.log(stringLength);

// =======================
// 2. charAt(index)
/*
Mengambil karakter pada posisi tertentu berdasarkan index.
Jika index di luar jangkauan, hasilnya adalah string kosong.
*/
console.log(string);
let stringCharAt = string.charAt(4);
console.log(stringCharAt);

// =======================
// 3. charCodeAt(index)
/*
Mengembalikan nilai Unicode (kode ASCII) dari karakter pada posisi tertentu.
Biasanya digunakan untuk keperluan teknis seperti sorting atau encoding.
*/
console.log(string);
let stringCharCodeAt = string.charCodeAt(4);
console.log(stringCharCodeAt);

// =======================
// 4. at(index)
/*
Alternatif modern dari charAt(). Kelebihannya adalah mendukung index negatif,
yang memungkinkan pengambilan karakter dari akhir string.
*/
console.log(string);
let stringAt = string.at(-1);
console.log(stringAt);

// =======================
// 5. [index]
/*
Cara singkat untuk mengakses karakter berdasarkan index, seperti array.
Namun tidak seaman charAt() karena tidak menampilkan error atau fallback.
*/
console.log(string);
let stringIndex = string[2];
console.log(stringIndex);

// =======================
// 6. slice(start, end)
/*
Mengambil bagian dari string, dari index `start` sampai sebelum `end`.
Bisa menggunakan index negatif untuk menghitung dari belakang.
*/
console.log(string);
let stringSlice = string.slice(3, 7);
console.log(stringSlice);

// =======================
// 7. substring(start, end)
/*
Mirip dengan slice(), namun tidak mendukung index negatif.
Jika `start > end`, JavaScript akan menukarnya secara otomatis.
*/
console.log(string);
let stringSubstring = string.substring(5, 3);
console.log(stringSubstring);

// =======================
// 8. substr(start, length)
/*
Mengambil sebagian string mulai dari index `start` sebanyak `length` karakter.
Method ini sudah deprecated, tapi masih banyak digunakan.
*/
console.log(string);
let stringSubstr = string.substr(2, 4);
console.log(stringSubstr);

// =======================
// 9. toUpperCase()
/*
Mengubah seluruh huruf dalam string menjadi huruf kapital.
Tidak mempengaruhi angka atau simbol.
*/
console.log(string);
let stringUpperCase = string.toUpperCase();
console.log(stringUpperCase);

// =======================
// 10. toLowerCase()
/*
Mengubah seluruh huruf dalam string menjadi huruf kecil.
Biasanya digunakan untuk normalisasi data.
*/
console.log("HELLO WORLD");
let stringLowerCase = "HELLO WORLD".toLowerCase();
console.log(stringLowerCase);

// =======================
// 11. concat()
/*
Menggabungkan dua atau lebih string menjadi satu string baru.
Alternatif dari operator tambah (`+`) untuk menggabungkan teks.
*/
console.log(string);
let stringConcat = string.concat(" is great");
console.log(stringConcat);

// =======================
// 12. trim()
/*
Menghapus spasi dan karakter whitespace lainnya di bagian awal dan akhir string.
Sangat berguna untuk membersihkan input pengguna sebelum diproses.
*/
let stringTrimInput = "   hello world   ";
console.log(stringTrimInput);
let stringTrim = stringTrimInput.trim();
console.log(stringTrim);

// =======================
// 13. trimStart()
/*
Menghapus whitespace di bagian awal (kiri) string saja.
Alias modern dari trimLeft().
*/
console.log(stringTrimInput);
let stringTrimStart = stringTrimInput.trimStart();
console.log(stringTrimStart);

// =======================
// 14. trimEnd()
/*
Menghapus whitespace di bagian akhir (kanan) string saja.
Alias modern dari trimRight().
*/
console.log(stringTrimInput);
let stringTrimEnd = stringTrimInput.trimEnd();
console.log(stringTrimEnd);

// =======================
// 15. padStart(targetLength, padString)
/*
Menambahkan karakter di awal string sampai panjangnya mencapai `targetLength`.
Biasa digunakan untuk formatting angka agar memiliki panjang tetap (seperti kode: 001, 007).
*/
let stringPadStartInput = "7";
console.log(stringPadStartInput);
let stringPadStart = stringPadStartInput.padStart(3, "0");
console.log(stringPadStart);

// =======================
// 16. padEnd(targetLength, padString)
/*
Menambahkan karakter di akhir string sampai panjangnya sesuai `targetLength`.
Berguna untuk tampilan yang rata kiri atau menyesuaikan panjang tampilan teks.
*/
let stringPadEndInput = "ID";
console.log(stringPadEndInput);
let stringPadEnd = stringPadEndInput.padEnd(5, ".");
console.log(stringPadEnd);

// =======================
// 17. repeat(count)
/*
Mengulang string sebanyak `count` kali.
Digunakan untuk efek visual, format teks, atau simulasi pengulangan sederhana.
*/
console.log(string);
let stringRepeat = string.repeat(3);
console.log(stringRepeat);

// =======================
// 18. replace(search, newValue)
/*
Mengganti bagian pertama yang cocok dalam string dengan `newValue`.
Hanya mengganti satu kali kemunculan pertama.
*/
let stringReplaceInput = "I love cats";
console.log(stringReplaceInput);
let stringReplace = stringReplaceInput.replace("cats", "dogs");
console.log(stringReplace);

// =======================
// 19. replaceAll(search, newValue)
/*
Mirip seperti replace(), tapi mengganti semua kemunculan `search` dalam string.
*/
let stringReplaceAllInput = "ha ha ha";
console.log(stringReplaceAllInput);
let stringReplaceAll = stringReplaceAllInput.replaceAll("ha", "ho");
console.log(stringReplaceAll);

// =======================
// 20. split(delimiter)
/*
Memecah string menjadi array, berdasarkan pemisah (delimiter) tertentu.
Cocok untuk memisahkan kata, kalimat, atau data CSV.
*/
let stringSplitInput = "apel, jeruk, pisang";
console.log(stringSplitInput);
let stringSplit = stringSplitInput.split(",");
console.log(stringSplit);
