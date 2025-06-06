// =======================
// ARRAY METHODS IN JAVASCRIPT
// =======================

/*
Deskripsi Umum:
Array di JavaScript digunakan untuk menyimpan kumpulan data dalam satu variabel.
Array bisa berisi berbagai tipe data dan bersifat **mutable** meskipun dideklarasikan dengan `const`.

JavaScript menyediakan banyak method bawaan (built-in) untuk:
- Menambahkan / menghapus elemen
- Menyambung / menyalin / memanipulasi isi array
- Mengiterasi dan menghasilkan array baru dari hasil transformasi/filter

Contoh array:
*/
const fruits = ["apple", "banana", "mango"];

// =======================
// 1. length
/*
Mengembalikan jumlah elemen dalam array.
*/
console.log(fruits.length); // 3

// =======================
// 2. toString()
/*
Mengubah array menjadi string, memisahkan elemen dengan koma.
*/
console.log(fruits.toString()); // "apple,banana,mango"

// =======================
// 3. join(separator)
/*
Menggabungkan elemen array menjadi string, dengan pemisah kustom.
*/
console.log(fruits.join(" - ")); // "apple - banana - mango"

// =======================
// 4. delete Operator
/*
Menghapus elemen array, tapi TIDAK mengubah panjang array.
Akan menyisakan "undefined" di posisi tersebut.
*/
delete fruits[1];
console.log(fruits); // ['apple', <1 empty item>, 'mango']
console.log(fruits.length); // 3

// =======================
// 5. concat()
/*
Menggabungkan dua atau lebih array menjadi array baru.
*/
const moreFruits = ["grape", "melon"];
const allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ['apple', empty, 'mango', 'grape', 'melon']

// =======================
// 6. flat()
/*
Meratakan array bersarang (nested) menjadi array datar.
*/
const nested = [1, 2, [3, 4, [5]]];
console.log(nested.flat()); // [1, 2, 3, 4, [5]]
console.log(nested.flat(2)); // [1, 2, 3, 4, 5]

// =======================
// 7. push()
/*
Menambahkan elemen di akhir array. Mengubah array asli.
*/
fruits.push("orange");
console.log(fruits); // ['apple', empty, 'mango', 'orange']

// =======================
// 8. unshift()
/*
Menambahkan elemen di awal array. Mengubah array asli.
*/
fruits.unshift("kiwi");
console.log(fruits); // ['kiwi', 'apple', empty, 'mango', 'orange']

// =======================
// 9. pop()
/*
Menghapus elemen terakhir dari array dan mengembalikannya.
*/
const last = fruits.pop();
console.log(last); // 'orange'
console.log(fruits);

// =======================
// 10. shift()
/*
Menghapus elemen pertama dari array dan mengembalikannya.
*/
const first = fruits.shift();
console.log(first); // 'kiwi'
console.log(fruits);

// =======================
// 11. splice(start, deleteCount, item1, ..., itemN)
/*
Menambah / menghapus elemen di posisi tertentu.
- Bisa menghapus, menyisipkan, atau keduanya.
*/
const animals = ["cat", "dog", "bird"];
animals.splice(1, 1, "rabbit", "turtle");
console.log(animals); // ['cat', 'rabbit', 'turtle', 'bird']

// =======================
// 12. slice(start, end)
/*
Mengambil sebagian array dan mengembalikannya sebagai array baru.
Tidak mengubah array asli.
*/
const sliced = animals.slice(1, 3);
console.log(sliced); // ['rabbit', 'turtle']

// =======================
// 13. some(callback)
/*
Mengembalikan true jika minimal SATU elemen lolos tes callback.
*/
const nums = [1, 3, 5, 8];
const hasEven = nums.some((n) => n % 2 === 0);
console.log(hasEven); // true

// =======================
// 14. map(callback)
/*
Membuat array baru dengan hasil transformasi dari setiap elemen.
Tidak mengubah array asli.
*/
const doubled = nums.map((n) => n * 2);
console.log(doubled); // [2, 6, 10, 16]

// =======================
// 15. filter(callback)
/*
Membuat array baru hanya dengan elemen yang lolos tes.
Tidak mengubah array asli.
*/
const evenNums = nums.filter((n) => n % 2 === 0);
console.log(evenNums); // [8]

// =======================
// 16. reduce(callback, initialValue)
/*
Menggabungkan seluruh elemen array menjadi satu nilai.
Contoh: jumlah semua angka.
*/
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 17

// =======================
// 17. reverse()
/*
Membalik urutan elemen dalam array. Mengubah array asli.
*/
const reversed = [...nums].reverse();
console.log(reversed); // [8, 5, 3, 1]

// =======================
// 18. values()
/*
Mengembalikan iterator yang berisi nilai dari setiap elemen.
Bisa digunakan dengan for...of.
*/
const iterator = nums.values();
for (let value of iterator) {
  console.log(value);
}
