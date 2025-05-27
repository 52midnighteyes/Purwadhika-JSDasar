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
