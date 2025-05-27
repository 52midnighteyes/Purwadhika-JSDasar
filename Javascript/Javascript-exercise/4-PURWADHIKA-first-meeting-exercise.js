// =======================
// 1. Buatlah kode untuk menghitung luas persegi panjang.
// =======================

/*

problem: cari tahu berapa luas dari sebuah persegi panjang.

1. rumus luas persegi panjang adalah panjang x lebar
2. butuh variable untuk menampung panjang, lebar dan hasilnya
3. tampilkan hasil dalam bentuk console.log

*/

let tinggi = 15;
let alas = 13;

const luasSegitiga = (alas * tinggi) / 2;
console.log(`luas segeitiga adalah ${luasSegitiga} cm`);

// simple function
function _luasSegitiga(alas, tinggi) {
  return (alas * tinggi) / 2;
}

const luas_segitiga = _luasSegitiga(15, 13);
console.log(`luas segeitiga adalah ${luas_segitiga} cm`);

// =======================
// 2. Buatlah kode untuk menghitung keliling persegi panjang.
// =======================

/*
problem: mencari keliling persegi panjang
1. keliling persegi panjang dapat ditemukan dengan menjumlahkan setiap sisi-sisinya (2x panjang + 2x lebar)
2. butuh variable untuk menampung nilai panjang, lebar dan keliling persegi panjang
3. tampilkan dalam bentuk console.log
*/

panjang = 15;
lebar = 13;

const kelilingPersegiPanjang = 2 * panjang + 2 * lebar;
console.log(`keliling persegi panjang adalah ${kelilingPersegiPanjang}`);

// =======================
// 3. Buatlah kode untuk menghitung diameter, keliling, dan luas lingkaran.
// =======================

/*

problem: mencari diameter, keliling dan luas lingkaran
1. mencari rumus yang dibutuhkan
    1.1. diameter lingkaran adalah 2x jari-jari
    1.2. keliling lingakaran adalah 2x jari-jari (diameter) x 3.14(phi)
    1.3. luas lingkaran adalah phi * jari-jari * jari-jari
2. buat variabel untuk menampung jari-jari, diameter, phi, dan hasil perhitungan
3. tampilkan hasil dalam console.log
*/

const jariJari = 7;
const phi = Math.PI;

//diameter lingkaran ( 2 * jari-jari lingkaran)
const diameter = 2 * jariJari;
console.log(`diameter lingkaran adalah ${diameter} cm`);

//keliling lingkaran (phi*diameter)
const kelilingLingkaran = phi * diameter;
console.log(`keliling lingkaran adalah ${kelilingLingkaran.toFixed(2)} cm`);

//luas lingkaran (phi*jari-jari^2)
const luasLingkaran = phi * Math.pow(jariJari, 2);
console.log(`luas lingkaran adalah ${luasLingkaran.toFixed(2)} cm`);

// =======================
// 4. Buatlah kode untuk menghitung besar sudut ketiga dari segitiga,
// =======================

/* 
problem: cari besar sudut ketiga (sudut pertama dan kedua, sudah diketahui)
1. total besar sudut segitiga selalu 180 derajat.
2. buat variabel sudut 1, sudut 2, dan totalsudut.
3. total sudut - sudut 1 - sudut 2 = sudut 3
4. tampilkan hasil dalam console.log

*/

const sudut1 = 80;
const sudut2 = 30;
const totalSudutSegitiga = 180;

let sudut3 = totalSudutSegitiga - sudut1 - sudut2;
console.log(`besar sudut ketiga adalah ${sudut3}°`);

// coba versi dengan validasi
if (sudut1 + sudut2 > 180) {
  console.log(
    `Besar sudut segitiga tidak bisa lebih dari ${totalSudutSegitiga}°`
  );
} else {
  sudut3 = totalSudutSegitiga - sudut1 - sudut2; //perhitungan dilakukan setelah validasi berhasil
  console.log(`besar sudut ketiga adalah ${sudut3}°`);
}

// =======================
// 5. Buatlah kode untuk mengonversi hari menjadi tahun, bulan, dan hari.
// =======================

/* 

problem: membuat kode untuk konversi jumlah hari jadi tahun
1. jumlah hari dibagi tahun (365) untuk mengetahui jumlah hari teresebut bisa menjadi berapa tahun
2. jumlah hari - 365 * jumlah tahun yang sudah kita ketahui
3. sisanya tinggal diulangi untuk mencari bulan dan hari


*/

const jumlahHari = 45;
const satuTahun = 365;
const satuBulan = 30;

const tahun = Math.trunc(jumlahHari / satuTahun);
console.log(tahun);

const sisaHariMinTahun = jumlahHari % satuTahun;
console.log(sisaHariMinTahun);

const bulan = Math.trunc(sisaHariMinTahun / satuBulan);
console.log(bulan);

const hari = sisaHariMinTahun % satuBulan;
console.log(hari);

// // Hitung tahun
// const tahun = Math.trunc(jumlahHari / satuTahun);

// // Sisa hari setelah dikurangi tahun
// const sisaHariSetelahTahun = jumlahHari % satuTahun;

// // Hitung bulan
// const bulan = Math.trunc(sisaHariSetelahTahun / satuBulan);

// // Sisa hari setelah dikurangi bulan
// const hari = sisaHariSetelahTahun % satuBulan;

console.log(
  `${jumlahHari} hari bila dikonversikan adalah ${tahun} tahun, ${bulan} bulan, ${hari} hari`
);

// =======================
// 6. Buatlah kode untuk menghitung selisih hari dari dua tanggal.
// =======================

/*
problem: cari selisih waktu antara dua tanggal
hints: javascrip menyimpan tanggal dalam milisecond (berapa milisecond telah berlalu sejak 1 januari 1970)
@var tanggalSekarang (startDate)
@var tanggalEvent (endDate)
@var selisihHari = end date - start date
@var konversiKeHari = bentuk milisecond kita balikin ke hari, tapi dibulatkan ke atas (Math.ceil).

1 detik = 1000ms
1 jam = 3600 detik
1 hari = 24 jam

*/

const tanggalSekarang = new Date();
console.log(tanggalSekarang);

const tanggalEvent = new Date("2025-6-1");
console.log(tanggalEvent);

const selisihHari = tanggalEvent - tanggalSekarang;
console.log(selisihHari);

const konversiKeHari = Math.ceil(selisihHari / (1000 * 3600 * 24));
console.log(konversiKeHari);
