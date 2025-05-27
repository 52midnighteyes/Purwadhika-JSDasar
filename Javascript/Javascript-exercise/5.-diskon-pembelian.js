// =======================
// SOAL 7: DISKON PEMBELIAN
// =======================

/*
Deskripsi:
Sebuah toko memberikan diskon berdasarkan total belanja pelanggan.

Aturan diskon:
- Jika total belanja >= 500_000 → diskon 20%
- Jika total belanja >= 200_000 dan < 500_000 → diskon 10%
- Jika total belanja >= 100_000 dan < 200_000 → diskon 5%
- Jika total belanja < 100_000 → tidak ada diskon

Instruksi:
1. Buat variabel `totalBelanja` (contoh: 270000)
2. Hitung diskon sesuai aturan
3. Hitung total bayar = totalBelanja - diskon
4. Tampilkan output seperti:
   Total belanja: Rp270000
   Diskon: 10%
   Total bayar: Rp243000

Validasi:
- Jika totalBelanja bukan number atau kurang dari 0, tampilkan "Input tidak valid"
*/

/*
 problem: bikin total bayar after discount tertentu


 */
const totalBelanja = 270000;
const discount20 = 20 / 100;
const discount10 = 10 / 100;
const discount5 = 5 / 100;
let totalBayar = 0;
let totalDiscount = 0;
// TODO: kerjakan di sini

if (totalBelanja >= 500000) {
  totalDiscount = totalBelanja * discount20;
  totalBayar = totalBelanja - totalDiscount;
  console.log(
    `Harga yang harus dibayar adalah ${totalBayar} dengan discount sebesar ${
      totalBelanja - totalBayar
    }`
  );
} else if (totalBelanja >= 200000 && totalBelanja < 500000) {
  totalDiscount = totalBelanja * discount10;
  totalBayar = totalBayar - totalDiscount;
}
