let number = 123;

// toString() = merubah data number menjadi string
console.log(number);
let stringNumber = number.toString();

console.log(stringNumber);

// kita cek ulang tipe data mereka
console.log(typeof number);
console.log(typeof stringNumber);

// toFixed(isi dengan berapa angka di belakang koma) : mengubah angka menjadi string dengan jumlah angka di belakang koma sesuai yang ditentukan
let decimalNumber = 1.1234567;
let fixedNumber = decimalNumber.toFixed(2);

console.log(fixedNumber);
console.log(typeof fixedNumber);
