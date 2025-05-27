// =======================
// SWITCH STATEMENT
// =======================

/*
SINTAKS DASAR:
switch (ekspresi) {
  case nilai1:
    // aksi jika ekspresi === nilai1
    break;
  case nilai2:
    // aksi jika ekspresi === nilai2
    break;
  ...
  default:
    // aksi jika tidak ada case yang cocok
}

Penjelasan:
- switch → mengevaluasi ekspresi
- case → membandingkan ekspresi dengan nilai tertentu
- break → keluar dari switch jika case cocok (menghindari "fall-through")
- default → dijalankan jika tidak ada case yang cocok

Switch cocok digunakan ketika:
- ingin mengecek banyak nilai dari satu variabel
- nilai-nilai yang dibandingkan spesifik (bukan kondisi kompleks)
- ingin struktur kode yang lebih rapi daripada banyak else-if
*/

// =======================
// CONTOH 1: Menilai hasil ujian
// =======================
let nilai = "A";

switch (nilai) {
  case "A":
    console.log("Excellent result");
    break;
  case "B":
    console.log("Good result");
    break;
  case "C":
    console.log("Average result");
    break;
  default:
    console.log("Poor result");
}

// =======================
// CONTOH 2: Menentukan hari
// =======================
let day = 3;

switch (day) {
  case 0:
    console.log("Minggu");
    break;
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  case 6:
    console.log("Sabtu");
    break;
  default:
    console.log("Hari tidak valid");
}
