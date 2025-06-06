// menampilkan isi array
let arr = ["muhammad", "alwi", "susilo"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 1. join gabungin semua array jadi string
console.log(arr.join(" "));

// push, pop, shift, unshift
/**
 * pop mengeluarkan element terakhir
 * push menambah element ke index terakhir
 * shift menambahkan elemen baru di awal
 * unshift mengeluarkan elemen di index 0
 */

// slice & splice
/**
 * splice (index awal, mau dihapus berapa, elemenBaru, ...)
 * splice menyambung
 */

arr.splice(0, 0, "mantap", "gokil");
console.log(arr.join(" "));
console.log(arr);

// slice 5
let arr2 = arr.slice(1, 4);
console.log(arr2);
