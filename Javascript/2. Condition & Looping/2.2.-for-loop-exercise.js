// =========================
// SOAL 1 – Tangga Bintang Naik
// =========================

/*
Deskripsi:
Buatlah program dengan for loop untuk mencetak pola tangga dari karakter '*'.
Program menerima input angka n, yang menunjukkan jumlah baris.

Setiap baris berisi jumlah bintang sebanyak nomor barisnya.
Contoh jika n = 5:
*
**
***
****
*****

Ketentuan:
- Gunakan for loop.
- Tidak boleh pakai .repeat().
- Output dicetak dengan console.log
*/

const n = 5; // ubah nilai n untuk menguji dengan jumlah baris berbeda

// Kerjakan di bawah ini:

let stars = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  stars += "\n"; // ini yang bikin baris baru
}

console.log(stars);
