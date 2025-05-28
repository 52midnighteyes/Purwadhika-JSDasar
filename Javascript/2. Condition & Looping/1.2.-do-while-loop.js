// =======================
// DO...WHILE LOOP
// =======================

/*
SINTAKS DASAR:
do {
  // aksi yang dijalankan
} while (kondisi);

Penjelasan:
- Perbedaan utama dengan while loop: blok kode dijalankan **minimal satu kali** sebelum mengecek kondisi.
- Kondisi dicek **setelah** aksi dilakukan.
- Cocok digunakan saat kita ingin aksi tetap dijalankan sekali meskipun kondisi tidak terpenuhi sejak awal.

Do...while loop cocok digunakan ketika:
- ingin menjamin setidaknya satu kali eksekusi
- validasi input user (misal: minta ulang sampai input valid)
- aksi dilakukan dulu, baru dicek perlu diulang atau tidak
*/

// Contoh: Perulangan dengan nilai awal lebih besar dari kondisi
let i = 15;

do {
  console.log(i, "INI DO WHILE LOOP");
  i++;
} while (i <= 10);

// Penjelasan:
// - i dimulai dari 15
// - karena ini do...while, console.log tetap dijalankan sekali
// - setelah itu baru dicek: apakah 15 <= 10? (false), maka loop berhenti
