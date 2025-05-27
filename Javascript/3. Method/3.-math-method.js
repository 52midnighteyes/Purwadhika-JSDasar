// =======================
// MATH OBJECT IN JAVASCRIPT
// =======================

/*
Deskripsi Umum:
`Math` adalah objek bawaan di JavaScript yang menyediakan fungsi dan konstanta untuk melakukan operasi matematika.

Berbeda dengan objek `Number`, semua method di `Math` bersifat **static**, artinya dipanggil langsung dari `Math`, seperti `Math.abs()`.

`Math` digunakan untuk:
- Operasi pembulatan, nilai absolut, dan akar
- Perhitungan trigonometri dan logaritma
- Pembuatan angka acak
- Operasi bit-level dan efisiensi perhitungan

Catatan Penting:
- `Math` bukan konstruktor, jadi tidak bisa digunakan dengan `new Math()`.
- Semua method `Math` **tidak memodifikasi nilai asli**, tapi mengembalikan hasil baru.
- Beberapa fungsi menerima parameter dalam radian (bukan derajat), seperti trigonometri.
*/

let number = 9.765;

// =======================
// 1. Math.abs()
// =======================
/*
Mengembalikan nilai absolut (selalu positif) dari angka.
Jika diberi angka negatif, akan dikembalikan versi positifnya.
*/
console.log(Math.abs(-15)); // 15

// =======================
// 2. Math.ceil()
// =======================
/*
Membulatkan angka ke atas (menuju bilangan bulat yang lebih besar).
*/
console.log(Math.ceil(number)); // 10

// =======================
// 3. Math.floor()
// =======================
/*
Membulatkan angka ke bawah (menuju bilangan bulat yang lebih kecil).
*/
console.log(Math.floor(number)); // 9

// =======================
// 4. Math.round()
// =======================
/*
Membulatkan angka ke bilangan bulat terdekat.
Jika desimal ≥ 0.5, akan dibulatkan ke atas.
*/
console.log(Math.round(number)); // 10

// =======================
// 5. Math.trunc()
// =======================
/*
Menghapus bagian desimal dari angka, menyisakan bilangan bulat saja.
*/
console.log(Math.trunc(number)); // 9

// =======================
// 6. Math.max() & Math.min()
// =======================
/*
Mengembalikan nilai maksimum atau minimum dari kumpulan argumen angka.
*/
console.log(Math.max(1, 99, 300)); // 300
console.log(Math.min(1, 99, 300)); // 1

// =======================
// 7. Math.sqrt()
// =======================
/*
Mengembalikan akar kuadrat dari angka.
*/
console.log(Math.sqrt(81)); // 9

// =======================
// 8. Math.pow(x, y)
// =======================
/*
Menghitung x pangkat y (x^y).
Contoh: 2^3 = 8.
*/
console.log(Math.pow(2, 3)); // 8

// =======================
// 9. Math.random()
// =======================
/*
Menghasilkan angka desimal acak antara 0 (inklusif) dan 1 (eksklusif).
Dapat dikombinasikan dengan `Math.floor()` untuk angka acak dalam rentang tertentu.
*/
console.log(Math.random()); // contoh: 0.4823...

// Angka acak antara 1 dan 10:
let random1to10 = Math.floor(Math.random() * 10) + 1;
console.log(random1to10);

// =======================
// 10. Math.sign()
// =======================
/*
Mengembalikan tanda dari angka:
- 1 untuk positif
- -1 untuk negatif
- 0 untuk nol
*/
console.log(Math.sign(5)); // 1
console.log(Math.sign(-7)); // -1
console.log(Math.sign(0)); // 0

// =======================
// 11. Math.cbrt()
// =======================
/*
Mengembalikan akar pangkat tiga dari angka.
*/
console.log(Math.cbrt(27)); // 3

// =======================
// 12. Math.log() dan Math.log10()
// =======================
/*
- Math.log(): Logaritma natural (basis e)
- Math.log10(): Logaritma basis 10
*/
console.log(Math.log(Math.E)); // 1
console.log(Math.log10(100)); // 2

// =======================
// 13. Math.sin(), Math.cos(), Math.tan()
// =======================
/*
Fungsi trigonometri dengan input berupa radian.
Untuk mengonversi dari derajat ke radian: derajat * (Math.PI / 180)
*/
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0)); // 1
console.log(Math.tan(Math.PI / 4)); // 1

// =======================
// 14. Math.PI & Math.E
// =======================
/*
- Math.PI ≈ 3.14159 → rasio keliling dan diameter lingkaran
- Math.E ≈ 2.718 → basis logaritma natural
*/
console.log(Math.PI);
console.log(Math.E);

// =======================
// 15. Math.hypot(...args)
// =======================
/*
Mengembalikan akar dari jumlah kuadrat argumen.
Contoh: Math.hypot(3, 4) = akar(3^2 + 4^2) = 5
*/
console.log(Math.hypot(3, 4)); // 5

// =======================
// 16. Math.clz32()
// =======================
/*
Mengembalikan jumlah bit nol di depan angka dalam representasi 32-bit.
Berguna untuk operasi bit-level dan optimisasi.
*/
console.log(Math.clz32(1)); // 31

/*
Tips Tambahan:
- Gunakan Math untuk menghindari pembulatan manual.
- Perlu konversi derajat ke radian? Gunakan `deg * (Math.PI / 180)`.
- Math.random() tidak benar-benar acak secara kriptografi, tapi cukup untuk kebutuhan umum seperti game atau simulasi.
*/
