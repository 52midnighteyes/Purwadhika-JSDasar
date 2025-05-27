// =======================
// USE CASE: STOK BARANG OTOMATIS (VERSI SCALABLE)
// =======================

/*
Deskripsi:
Sebuah gudang memiliki 10 barang dengan nomor 1 sampai 10.
Beberapa barang (misalnya no. 1 dan 7) sedang kosong, sisanya tersedia.
Program harus mencetak status masing-masing barang secara otomatis.

Struktur yang digunakan:
- for loop → untuk menelusuri seluruh barang
- if → untuk mengecek apakah barang sedang kosong
- includes() → untuk mengecek apakah nomor barang ada dalam array barangKosong

Kelebihan:
- Daftar barang kosong dapat diubah dengan mudah tanpa mengubah logika program
*/

let noBarang = 1;
let barangKosong = [1, 7]; // ubah isi array ini jika ada perubahan status stok

for (let i = noBarang; i <= 10; i++) {
  if (barangKosong.includes(i)) {
    // Jika barang termasuk dalam daftar kosong
    console.log(`Barang No. ${i} sedang kosong`);
  } else {
    // Selain itu, anggap tersedia
    console.log(`Barang No. ${i} tersedia`);
  }
}
