// =======================
// WHILE LOOP
// =======================

/*
SINTAKS DASAR:
while (kondisi) {
  // aksi yang dijalankan selama kondisi bernilai true
}

Penjelasan:
- kondisi: ekspresi yang dicek sebelum setiap iterasi.
  Selama bernilai true, blok kode akan terus dijalankan.

While loop cocok digunakan ketika:
- jumlah perulangan tidak diketahui secara pasti
- perulangan bergantung pada kondisi eksternal yang berubah secara dinamis
- butuh fleksibilitas lebih dibanding for loop
*/

// Contoh 1: Loop menggunakan data boolean
let ulang = true;

while (ulang) {
  console.log("Hello, world!");
  // tanpa perubahan kondisi, loop akan berjalan terus (infinite loop selama nilai ulang = true)
  // jadi harus kita ubah agar berhenti:
  ulang = false;
}

// Contoh 2: Perulangan dengan angka
let nilaiAwal = 1;

while (nilaiAwal <= 5) {
  console.log(`nilaiAwal = ${nilaiAwal}`);
  nilaiAwal++; // menaikkan nilai untuk mendekati kondisi berhenti
}

// ketika nilaiAwal sudah lebih dari 5, loop berhenti
console.log("Setelah loop, nilaiAwal = " + nilaiAwal);
