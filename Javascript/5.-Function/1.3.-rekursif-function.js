// ============================
// REKURSIF DALAM JAVASCRIPT
// ============================

/*
Rekursif adalah fungsi yang memanggil dirinya sendiri.

Alur umum:
input => function => function memanggil dirinya sendiri => output

Rekursif biasanya digunakan untuk:
- Menggantikan looping
- Menghitung Fibonacci
- Penelusuran (traversal) pada struktur data seperti list dan tree
- Bahasa pemrograman yang tidak memiliki perulangan (loop)
*/

// ============================
// CONTOH INFINITE RECURSION
// ============================

function tes() {
  return tes(); // Tidak ada kondisi berhenti, menyebabkan infinite recursion (Stack Overflow)
}

// ============================
// VERSI FOR LOOP BIASA
// ============================

for (let i = 10; i >= 1; i--) {
  console.log(i); // Menampilkan angka 10 sampai 1 dengan loop
}

// ============================
// REKURSIF FUNCTION SEDERHANA
// ============================

function angka(num) {
  console.log(num);
  if (num === 0) return; // Kondisi berhenti agar tidak infinite
  angka(num - 1); // Memanggil dirinya sendiri dengan nilai lebih kecil
}

angka(5); // Output: 5, 4, 3, 2, 1, 0

// ============================
// FAKTORIAL DENGAN REKURSIF
// ============================

function faktorial(n) {
  console.log(n); // Menampilkan urutan pemanggilan
  if (n === 0) return 1; // Base case: faktorial(0) = 1
  return n * faktorial(n - 1); // Recursive call
}

console.log(faktorial(4));
// Output (log):
// 4
// 3
// 2
// 1
// 0
// Kemudian dihitung dari bawah: 1 * 1 * 2 * 3 * 4 = 24

// ============================
// IMPLEMENTASI LAIN REKURSIF
// ============================

// 1. Fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 2. Penelusuran Tree (misalnya pre-order traversal)
// 3. Mengganti loop pada bahasa fungsional
