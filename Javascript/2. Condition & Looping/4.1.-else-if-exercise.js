let nomorAngkot = 1;
const jumlahAngkot = 10;
const angkotBeroperasi = [1, 2, 3, 4, 5, 6];
const angkotDalamPerbaikan = [7, 9, 10];
const angkotBekerjaLembur = [8];

// for (; nomorAngkot <= jumlahAngkot; nomorAngkot++) {
//   if (
//     angkotBeroperasi.includes(nomorAngkot) &&
//     !angkotBekerjaLembur.includes(nomorAngkot)
//   ) {
//     console.log(`Angkot No. ${nomorAngkot} beroperasi dengan normal.`);
//   } else if (
//     angkotBekerjaLembur.includes(nomorAngkot) &&
//     !angkotDalamPerbaikan.includes(nomorAngkot)
//   ) {
//     console.log(`Angkot No. ${nomorAngkot} sedang bekerja lembur.`);
//   } else {
//     console.log(`Angkot No. ${nomorAngkot} sedang dalam perbaikan`);
//   }
// }

// versi yang lebih optimized
// memperbaiki urutan conditions supaya lebih optimal

for (; nomorAngkot <= jumlahAngkot; nomorAngkot++) {
  if (angkotDalamPerbaikan.includes(nomorAngkot)) {
    console.log(`Angkot No. ${nomorAngkot} sedang dalam perbaikan`);
  } else if (angkotBekerjaLembur.includes(nomorAngkot)) {
    console.log(`Angkot No. ${nomorAngkot} sedang bekerja lembur`);
  } else {
    console.log(`Angkot No. ${nomorAngkot} beroperasi dengan normal`);
  }
}
