// ==============================
// .forEach() vs .map()
// ==============================

// ==============================
// 1. .forEach()
// ==============================
// Digunakan untuk menjalankan aksi pada setiap elemen array.
// Tidak mengembalikan array baru (hasilnya undefined).

let angka1 = [1, 2, 3];

angka1.forEach((value, index, arrayAsli) => {
  console.log(`Index ${index}, value: ${value}, array: ${arrayAsli}`);
});

// Contoh pemakaian forEach:
let hasil1 = [];
angka1.forEach((val) => {
  hasil1.push(val + 10);
});
console.log("forEach hasil:", hasil1); // [11, 12, 13]

// Cocok untuk:
// - Nge-log data
// - Push manual ke array lain
// - Kirim API, manipulasi DOM, dsb
// - Kasus di mana kita cuma butuh efek samping (side effect)


// ==============================
// 2. .map()
// ==============================
// Digunakan untuk mengubah tiap elemen dan MENGHASILKAN array baru.
// Wajib pakai return di dalam fungsi map.

let angka2 = [1, 2, 3];

let hasil2 = angka2.map((value, index, arrayAsli) => {
  return value * 2;
});

console.log("map hasil:", hasil2); // [2, 4, 6]

// Contoh lainnya:
let nama = ["alwi", "budi", "dina"];
let hurufBesar = nama.map((val) => val.toUpperCase());
console.log("map upper:", hurufBesar); // ["ALWI", "BUDI", "DINA"]

// Cocok untuk:
// - Transformasi data
// - Bikin array baru dari array lama
// - Bisa langsung disimpan ke variable baru


// ==============================
// 3. Perbandingan Singkat
// ==============================

/*
| Hal                  | .forEach()                     | .map()                             |
|----------------------|--------------------------------|------------------------------------|
| Return nilai         | ❌ Tidak                       | ✅ Ya (array baru)                 |
| Tujuan utama         | Jalankan aksi / efek samping  | Transformasi data jadi array baru |
| Pakai return         | ❌ Boleh, tapi dibuang
