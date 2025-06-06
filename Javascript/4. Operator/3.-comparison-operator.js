// ========================================
// Operator Perbandingan di JavaScript
// ========================================

let x = 5;

// == : Sama dengan (dibandingkan nilainya saja, tipe data bisa beda)
console.log(x == 8); // false
console.log(x == 5); // true
console.log(x == "5"); // true (karena hanya membandingkan nilai, bukan tipe)

// === : Sama nilai dan sama tipe data
console.log(x === 5); // true
console.log(x === "5"); // false (karena beda tipe: number vs string)

// != : Tidak sama dengan (nilai saja)
console.log(x != 8); // true

// !== : Tidak sama nilai atau tipe (strict not equal)
console.log(x !== 5); // false
console.log(x !== "5"); // true (beda tipe)
console.log(x !== 8); // true (beda nilai)

// > : Lebih besar dari
console.log(x > 8); // false

// < : Lebih kecil dari
console.log(x < 8); // true

// >= : Lebih besar atau sama dengan
console.log(x >= 8); // false

// <= : Lebih kecil atau sama dengan
console.log(x <= 8); // true
