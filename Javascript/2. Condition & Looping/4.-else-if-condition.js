// =======================
// ELSE IF CONDITION
// =======================

/*
SINTAKS DASAR:
if (kondisi1) {
  // aksi jika kondisi1 true
} else if (kondisi2) {
  // aksi jika kondisi2 true
} else {
  // aksi jika semua kondisi di atas false
}

Penjelasan:
- if → kondisi pertama yang diuji
- else if → kondisi tambahan, hanya dicek jika if sebelumnya false
- else → blok fallback jika semua kondisi sebelumnya false

Else if cocok digunakan ketika:
- ingin mengecek beberapa kondisi secara berurutan
- hanya satu kondisi yang dijalankan dari beberapa pilihan
- urutan pengecekan mempengaruhi hasil program
*/

// Contoh 1: Versi panjang (kurang akurat, hanya untuk pemahaman dasar)
let angka = 1;

if (angka % 2 === 0) {
  // Salah logika: ini harusnya "genap"
  console.log(`${angka} adalah bilangan ganjil`);
} else if (angka % 2 === 1) {
  // Benar: 1 % 2 === 1 → ganjil
  console.log(`${angka} adalah bilangan ganjil`);
} else {
  // Fallback untuk nilai yang tidak bisa diproses sebagai angka
  console.log(`${angka} bukanlah data berupa angka`);
}

// Contoh 2: Versi lebih ringkas dengan validasi tipe
if (angka % 2 == 0 && typeof angka == "number") {
  // Cek apakah angka genap dan bertipe number
  console.log(`${angka} adalah bilangan genap`);
} else if (angka % 2 == 1 && typeof angka == "number") {
  // Cek apakah angka ganjil dan bertipe number
  console.log(`${angka} adalah bilangan ganjil`);
} else {
  // Tangani jika bukan number
  console.log(`${angka} bukanlah data berupa angka`);
}

// Contoh 3: Versi paling aman dan efisien
if (typeof angka !== "number" || isNaN(angka)) {
  // Tangani jika angka bukan number atau NaN
  console.log(`${angka} bukanlah number`);
} else if (!Number.isInteger(angka) || angka <= 0) {
  // Tangani jika bukan bilangan bulat positif
  console.log(`${angka} bukanlah bilangan bulat positif`);
} else if (angka % 2 === 0) {
  // Bilangan genap
  console.log(`${angka} adalah bilangan genap`);
} else {
  // Bilangan ganjil
  console.log(`${angka} adalah bilangan ganjil`);
}
