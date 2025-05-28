// =======================
// FOR LOOP
// =======================

/*
SINTAKS DASAR:
for (nilaiAwal; kondisi terminasi; increment/decrement) {
  // aksi yang dijalankan selama kondisi bernilai true
}

Penjelasan:
- nilaiAwal → inisialisasi variabel penghitung (counter)
- kondisi terminasi → selama kondisi ini true, loop akan terus berjalan
- increment/decrement → perubahan nilai setelah setiap iterasi

For loop cocok digunakan jika:
- jumlah perulangan sudah diketahui
- ingin struktur yang ringkas dan mudah dibaca
*/

// Contoh 1: Mencetak iterasi dari 1 sampai 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Contoh 2: Mencetak angka genap dari 2 sampai 10
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// Contoh 3: Mencetak angka mundur dari 5 ke 1
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// Contoh 4: mengisi
// =======================
// FOR LOOP
// =======================

/*
SINTAKS DASAR:
for (nilaiAwal; kondisi; perubahanNilai) {
  // aksi yang dijalankan selama kondisi bernilai true
}

Penjelasan:
- nilaiAwal: inisialisasi variabel untuk perulangan
- kondisi: dicek sebelum setiap iterasi, selama true, blok kode akan dijalankan
- perubahanNilai: dilakukan setiap akhir iterasi, untuk mendekati kondisi berhenti

For loop cocok digunakan ketika:
- jumlah perulangan sudah diketahui pasti
- ingin perulangan yang terstruktur dengan inisialisasi, kondisi, dan perubahan dalam satu baris
- pengulangan data dalam rentang tertentu (misal: dari 1 sampai 10)
*/

// Contoh 1: Menampilkan angka 1 sampai 5
for (let i = 1; i <= 5; i++) {
  console.log(`i = ${i}`);
}
// Output: i = 1, i = 2, ..., i = 5

// Contoh 2: Perulangan mundur dari 5 ke 1
for (let j = 5; j >= 1; j--) {
  console.log(`j = ${j}`);
}

// Contoh 3: Loop dengan increment lebih dari 1
for (let k = 0; k <= 10; k += 2) {
  console.log(`k = ${k}`);
}
// Output: 0, 2, 4, 6, 8, 10
