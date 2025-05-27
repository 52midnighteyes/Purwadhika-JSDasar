// =======================
// IF CONDITION
// =======================

/*
SINTAKS DASAR:
if (kondisi) {
  // aksi yang dijalankan jika kondisi bernilai true
}

Penjelasan:
- kondisi: ekspresi yang akan dievaluasi sebagai true/false
- jika true → blok dijalankan
- jika false → blok dilewati

If cocok digunakan ketika:
- butuh percabangan logika
- ingin mengeksekusi kode hanya dalam kondisi tertentu
- mengontrol alur program secara dinamis
*/

// Contoh 1: Cek apakah angka sama dengan 1
let angka = 12;

if (angka === 1) {
  console.log(`Anda memasukkan angka ${angka}`);
}

// Contoh 2: Percabangan if...else
if (angka <= 5) {
  console.log(`${angka} lebih kecil dari atau sama dengan 5`);
} else {
  console.log(`${angka} lebih besar dari 5`);
}

// Contoh 3: Cek bilangan ganjil atau genap
if (angka % 2 === 0) {
  console.log(`${angka} adalah bilangan genap`);
} else {
  console.log(`${angka} adalah bilangan ganjil`);
}
