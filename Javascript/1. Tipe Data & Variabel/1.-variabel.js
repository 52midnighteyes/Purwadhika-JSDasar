// =======================
// PENGENALAN VARIABEL
// =======================

/*
📌 Apa itu variabel?
Variabel adalah "wadah" untuk menyimpan data.

Di JavaScript, kita bisa membuat variabel dengan:
1. var     → cara lama (tidak disarankan)
2. let     → modern, bisa diubah nilainya
3. const   → modern, tidak bisa diubah nilainya (konstan)

Kenapa penting? Karena semua data di program akan disimpan di variabel sebelum diproses.
*/

// =======================
// 1. VAR (cara lama)
// =======================

var nama = "Alwi";
console.log(nama); // Alwi

// var bisa di-deklarasi ulang (⚠️ tidak disarankan)
var nama = "Budi";
console.log(nama); // Budi

// var tidak punya block scope (⚠️ bisa bikin bug)

// =======================
// 2. LET (disarankan untuk variabel yang bisa berubah)
// =======================

let umur = 25;
console.log(umur); // 25

umur = 26;
console.log(umur); // 26

// let TIDAK boleh deklarasi ulang dalam scope yang sama
// let umur = 30; ❌ Error!

// =======================
// 3. CONST (untuk nilai yang tidak boleh berubah)
// =======================

const negara = "Indonesia";
console.log(negara); // Indonesia

// negara = "Malaysia"; ❌ Error! const tidak bisa diubah

// Tapi kalau isinya object/array, properti di dalamnya masih bisa diubah:
const user = {
  nama: "Alwi",
};
user.nama = "Budi"; // BISA
console.log(user.nama); // Budi

// =======================
// 4. PENAMAAN VARIABEL
// =======================
/*
✅ Boleh:
- huruf, angka, underscore (_), dollar ($)
- camelCase biasa digunakan di JS

❌ Tidak boleh:
- diawali angka (contoh: 1nama ❌)
- pakai spasi (contoh: nama lengkap ❌)
- pakai simbol aneh (@, %, dll)

Contoh valid:
let totalNilai;
const isActive;
let _counter;
let $token;
*/

// =======================
// 5. GOOD PRACTICE
// =======================
/*
- Gunakan `let` jika nilai akan berubah
- Gunakan `const` jika nilai tetap
- Hindari `var` untuk proyek modern
- Gunakan nama variabel yang jelas dan deskriptif
*/
