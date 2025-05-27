// ===============================
// Perbedaan a++ vs ++a di JavaScript
// ===============================

let a = 1;
let b = 1;

console.log("Nilai awal a:", a); // 1
console.log("Nilai awal b:", b); // 1

// ===============================
// Kasus 1: a = a++;
// ===============================
// Langkah-langkah:
// 1. Simpan nilai lama a (yaitu 1)
// 2. Tambahkan 1 ke a (jadi 2)
// 3. Tapi nilai yang dikembalikan dari a++ adalah nilai LAMA (1)
// 4. Maka a = 1 lagi (bukan 2)
a = a++;
// Sekarang a sebenarnya naik jadi 2, tapi langsung ditimpa balik jadi 1

// Tambah lagi dengan ++a
// Sekarang a ditambah dulu, baru hasilnya dipakai
++a; // a jadi 2
console.log("Nilai akhir a:", a); // 2

// ===============================
// Kasus 2: b = ++b;
// ===============================
// Langkah-langkah:
// 1. Tambahkan dulu b (jadi 2)
// 2. Hasil dari ++b adalah nilai BARU (2)
// 3. b = 2
b = ++b;
console.log("Nilai akhir b:", b); // 2

// ===============================
// Kesimpulan:
// - a = a++ => Nilainya tetap (tidak bertambah karena hasilnya nilai lama)
// - a++ sendiri tetap menaikkan nilai, tapi kalau langsung di-assign ulang, nilainya kembali ke awal
// - ++a akan menaikkan nilai dan mengembalikan nilai barunya
