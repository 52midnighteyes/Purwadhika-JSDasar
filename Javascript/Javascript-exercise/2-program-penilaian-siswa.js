// =======================
// USE CASE: PENILAIAN SISWA
// =======================

/*
Deskripsi:
Program ini mengevaluasi nilai ujian seorang siswa dan 
mengubahnya menjadi huruf mutu sesuai ketentuan berikut:

  Nilai >= 90      → Grade A
  Nilai 80–89      → Grade B
  Nilai 70–79      → Grade C
  Nilai 60–69      → Grade D
  Nilai < 60       → Grade E

Instruksi:
1. Buat variabel bernama `nilai` dengan nilai numerik (misalnya 75).
2. Gunakan struktur if, else if, dan else untuk menentukan grade berdasarkan nilai.
3. Tambahkan validasi untuk memastikan nilai adalah angka antara 0–100.

Tujuan:
Melatih penggunaan if...else if...else dan validasi kondisi berurutan.
*/

let nilai = 75;

if (typeof nilai !== "number" || isNaN(nilai) || nilai < 0 || nilai > 100) {
  console.log(`${nilai} harus valid berupa anka dari 0 - 100`);
} else if (nilai >= 90) {
  console.log(`Grade A`);
} else if (nilai < 90 && nilai >= 80) {
  console.log(`Grade B`);
} else if (nilai < 80 && nilai >= 70) {
  console.log("Grade C");
} else if (nilai < 70 && nilai >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}
