// =======================
// DATE OBJECT IN JAVASCRIPT
// =======================

/*
Deskripsi Umum:
`Date` adalah built-in object di JavaScript yang digunakan untuk bekerja dengan tanggal dan waktu.

Objek `Date` berguna untuk:
- Mengambil informasi tanggal dan waktu
- Mengatur waktu untuk event
- Menghitung selisih waktu antara dua tanggal
- Membuat format tampilan waktu yang bisa dibaca

Catatan Penting:
- JavaScript menyimpan waktu dalam milidetik sejak 1 Januari 1970 (UNIX epoch)
- Bulan dalam JavaScript dimulai dari 0 (Januari) sampai 11 (Desember)
*/

let now = new Date();
console.log(now); // waktu saat ini

// =======================
// 1. new Date()
// =======================
/*
Membuat objek tanggal. Bisa tanpa argumen (tanggal sekarang), atau dengan parameter spesifik.
*/
let dateFromString = new Date("2025-06-01");
console.log(dateFromString);

let dateFromNumbers = new Date(2025, 5, 1); // tahun, bulan (0-based), tanggal
console.log(dateFromNumbers);

// =======================
// 2. getFullYear(), getMonth(), getDate()
// =======================
/*
Mengambil komponen tanggal:
- getFullYear(): tahun (misal 2025)
- getMonth(): bulan (0–11)
- getDate(): tanggal di bulan (1–31)
*/
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());

// =======================
// 3. getDay()
// =======================
/*
Mengambil hari dalam seminggu (0 = Minggu, 6 = Sabtu).
*/
console.log(now.getDay());

// =======================
// 4. getHours(), getMinutes(), getSeconds(), getMilliseconds()
// =======================
/*
Mengambil waktu (jam, menit, detik, dan milidetik) dari tanggal.
*/
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

// =======================
// 5. getTime()
// =======================
/*
Mengembalikan timestamp dalam bentuk milidetik sejak 1 Januari 1970 (epoch time).
Bisa digunakan untuk menghitung selisih waktu antara dua tanggal.
*/
let eventDate = new Date("2025-06-01");
let diff = eventDate.getTime() - now.getTime();
console.log(diff);

// =======================
// 6. setFullYear(), setMonth(), setDate()
// =======================
/*
Mengatur komponen tanggal. Bisa mengubah bagian-bagian tertentu dari objek Date.
*/
let customDate = new Date();
customDate.setFullYear(2030);
customDate.setMonth(0);
customDate.setDate(15);
console.log(customDate);

// =======================
// 7. toDateString(), toTimeString(), toISOString()
// =======================
/*
Mengubah Date menjadi string dengan format berbeda:
- toDateString(): hanya tanggal
- toTimeString(): hanya waktu
- toISOString(): format ISO standar (cocok untuk penyimpanan dan backend)
*/
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());

// =======================
// 8. Date.now()
// =======================
/*
Static method yang mengembalikan waktu saat ini dalam milidetik (seperti getTime(), tapi tidak perlu buat Date object).
*/
console.log(Date.now());

// =======================
// 9. Date.parse()
// =======================
/*
Mengubah string tanggal menjadi milidetik sejak 1 Januari 1970.
*/
console.log(Date.parse("2025-06-01"));

// =======================
// 10. Perhitungan Selisih Hari
// =======================
/*
Contoh menghitung selisih hari antara dua tanggal:
*/
const dayDiff = Math.ceil((eventDate - now) / (1000 * 60 * 60 * 24));
console.log(dayDiff);
