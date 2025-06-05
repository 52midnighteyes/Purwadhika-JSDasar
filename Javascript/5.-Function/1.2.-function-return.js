// ============================
// RETURN & PARAMETER DALAM JAVASCRIPT
// ============================

/*
PARAMETER:
- Parameter adalah variabel yang ditulis di dalam tanda kurung pada saat mendefinisikan function.
- Parameter digunakan untuk menerima input dari luar saat function dipanggil.
- Parameter bisa lebih dari satu, dipisahkan dengan koma.
- Nilai yang dikirim saat pemanggilan disebut "argument".

RETURN:
- return adalah keyword yang digunakan untuk mengembalikan suatu nilai dari dalam function ke tempat function tersebut dipanggil.
- Setelah return dijalankan, function akan berhenti.
- return bisa mengembalikan berbagai tipe data: number, string, boolean, array, object, bahkan function lain.
*/

// ============================
// RETURN SEDERHANA
// ============================

function pembagian(a, b) {
  return a / b; // nilai hasil pembagian dikembalikan ke pemanggil
}

console.log(pembagian(6, 2));
// Output: 3
// Penjelasan: nilai 6 dan 2 dikirim sebagai argument ke parameter a dan b

// ============================
// RETURN MULTIPLE NILAI (DENGAN OBJECT)
// ============================

let hasil = function (a, b) {
  const pengurangan = a - b;
  const penambahan = a + b;

  // mengembalikan 2 nilai sekaligus dalam bentuk object
  return { pengurangan, penambahan };
};

console.log(hasil(1, 4));
// Output: { pengurangan: -3, penambahan: 5 }

// ============================
// DEFAULT PARAMETER
// ============================

/*
- Default parameter digunakan untuk memberi nilai awal jika tidak ada argument yang dikirim.
- Fitur ini mencegah hasil menjadi undefined saat parameter tidak diisi.
*/

function modulo(a = 3, b = 2) {
  return a % b;
}

console.log(modulo());
// Output: 1 (karena pakai nilai default 3 % 2)

console.log(modulo(10, 4));
// Output: 2 (pakai nilai dari argument)

// ============================
// REST PARAMETER
// ============================

/*
- Rest parameter digunakan ketika jumlah argument tidak pasti (bisa 1, 2, atau lebih).
- Sintaks: tiga titik (...) diikuti nama parameter.
- Semua argument setelah parameter pertama & kedua akan dimasukkan ke dalam array bernama "c".
*/

function message(a, b, ...c) {
  console.log(a); // Output: "hello"
  console.log(b); // Output: "world"
  console.log(c); // Output: ['selamat', 'pagi']
}

message("hello", "world", "selamat", "pagi");

// Penjelasan:
// a → "hello"
// b → "world"
// c → sisa argumen dalam bentuk array → ["selamat", "pagi"]
