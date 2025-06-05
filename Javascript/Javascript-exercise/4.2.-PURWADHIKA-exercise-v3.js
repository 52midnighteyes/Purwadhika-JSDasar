// =======================
// 1. Buatlah kode untuk menghitung luas persegi panjang.
// =======================

/*

problem: cari tahu berapa luas dari sebuah persegi panjang.

1. rumus luas persegi panjang adalah panjang x lebar
2. butuh variable untuk menampung panjang, lebar dan hasilnya
3. tampilkan hasil dalam bentuk console.log

*/

function luasPersegiPanjang(p, l) {
  if (typeof p !== "number") {
    return console.log(`${p} bukanlah tipe data berupa angka`);
  } else if (typeof l !== "number") {
    return console.log(`${l} bukanlah tipe data berupa angka`);
  }

  return p * l;
}

const luasPP = luasPersegiPanjang(4, 5);
console.log(luasPP);

luasPersegiPanjang("empat", 5);

// =======================
// 2. Buatlah kode untuk menghitung keliling persegi panjang.
// =======================

function kelPP(p, l) {
  if (typeof p !== "number") {
    return console.log(`${p} bukanlah tipe data berupa angka`);
  } else if (typeof l !== "number") {
    return console.log(`${l} bukanlah tipe data berupa angka`);
  }

  return 2 * (p + l);
}

const _kelPP = kelPP(4, 2);
console.log(_kelPP);

// =======================
// 3. Buatlah kode untuk menghitung diameter, keliling, dan luas lingkaran.
// =======================

function diameter(r) {
  if (typeof r !== "number") {
    return console.log(`${p} bukanlah tipe data berupa angka`);
  }

  return 2 * r;
}

const _diameter = diameter(3.5);
console.log(_diameter);

function kelLingkaran(diameter, pi = Math.PI) {
  if (typeof diameter !== "number") {
    return console.log(`${p} bukanlah tipe data berupa angka`);
  }

  return diameter * pi;
}

const _kelLingkaran = kelLingkaran(_diameter);
console.log(_kelLingkaran);
