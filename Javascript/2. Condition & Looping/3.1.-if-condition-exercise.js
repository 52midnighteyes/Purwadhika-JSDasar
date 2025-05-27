// ===============================
// Exercise: Juragan Angkot (Versi 3)
// ===============================

/*
Deskripsi:
Kamu adalah seorang juragan angkot dengan total 10 angkot.
Sebanyak 6 angkot pertama beroperasi seperti biasa,
sedangkan sisanya sedang tidak beroperasi.

Tugas:
Gunakan satu buah perulangan for untuk mencetak status
masing-masing angkot berdasarkan nomor urutnya.

Output yang diharapkan:
Angkot No. 1 beroperasi dengan baik.
Angkot No. 2 beroperasi dengan baik.
...
Angkot No. 6 beroperasi dengan baik.
Angkot No. 7 sedang tidak beroperasi.
...
Angkot No. 10 sedang tidak beroperasi.
*/

let jumlahAngkot = 10;
let angkotBeroperasi = 6;
let nomorAngkot = 1;

// Perulangan for dengan kondisi bercabang menggunakan if-else
for (; nomorAngkot <= jumlahAngkot; nomorAngkot++) {
  if (nomorAngkot <= angkotBeroperasi) {
    console.log(`Angkot No. ${nomorAngkot} beroperasi dengan baik.`);
  } else {
    console.log(`Angkot No. ${nomorAngkot} sedang tidak beroperasi.`);
  }
}
