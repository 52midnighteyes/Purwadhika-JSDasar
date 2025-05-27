/*
===============================
Exercise: Juragan Angkot (V2: While Loop + For Loop)
===============================

Deskripsi:
Kamu adalah seorang juragan angkot yang memiliki 10 armada. 
Setiap angkot memiliki nomor urut dari 1 sampai 10.

Tujuan:
Buatlah program menggunakan while loop untuk menampilkan 
laporan status operasional semua angkot seperti berikut:

Angkot No. 1–6 beroperasi dengan baik.
Angkot No. 7–10 tidak dapat beroperasi.
*/

let jumlahAngkot = 10;
let angkotBeroperasi = 6;
let nomorAngkot = 1;

while (nomorAngkot <= angkotBeroperasi) {
  console.log(`Angkot No. ${nomorAngkot} beroperasi dengan baik.`);
  nomorAngkot++; // sama dengan: nomorAngkot = nomorAngkot + 1
}

/*  
Catatan:
Selama nomorAngkot masih kurang dari atau sama dengan angkotBeroperasi,
maka blok kode dalam while akan terus dijalankan.
Loop akan berhenti ketika kondisi menjadi false (nomorAngkot > angkotBeroperasi).
*/

for (; nomorAngkot <= jumlahAngkot; nomorAngkot++) {
  console.log(`Angkot No. ${nomorAngkot} sedang tidak beroperasi.`);
}

/* 
Catatan:
tidak perlu define lagi karena nomor angkot sudah menjadi 7 setelah selesai loop while */
