/*
===============================
Exercise: Juragan Angkot
===============================

Deskripsi:
Kamu adalah seorang juragan angkot yang memiliki 10 armada. 
Setiap angkot memiliki nomor urut dari 1 sampai 10.

Tujuan:
Buatlah program menggunakan while loop untuk menampilkan 
laporan status operasional semua angkot seperti berikut:

Angkot No. 1 beroperasi dengan baik.
Angkot No. 2 beroperasi dengan baik.
...
Angkot No. 10 beroperasi dengan baik.

*/
let jumlahAngkot = 10;
let nomorAngkot = 1;
while (nomorAngkot <= jumlahAngkot) {
  console.log(`Angkot No. ${nomorAngkot} beroperasi dengan baik.`);
  nomorAngkot++; //ini sama dengan nilaiAwal = nilai awal + 1
}

// CATATAN

/*  
Selama nomorAngkot lebih kecil atau sama dengan jumlahAngkot, maka loop akan terus berjalan. 
Ketika kondisi berubah menjadi false (nomorAngkot > jumlahAngkot) maka loop akan berhenti.
*/
