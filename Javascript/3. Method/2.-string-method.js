let string = "hello world";
console.log(string);

// toUpperCase() : menjadikan string kapital semua
const upString = string.toUpperCase();
console.log(upString);

// toLoweCase() : menjadikan string lowercase semua
const lowString = string.toLowerCase();
console.log(lowString);

// trim() : menghapus spasi di depan dan belakang string
string = " hello world ";
console.log(string);
const trimString = string.trim();
console.log(trimString);

// replace(yang mau diganti, pengannti) : replace karakter yang pertama kali ditemukan
// 1. ini case sensitive
// 2. bisa menggunakan regex

string = "hello world";
const replaceString = string.replace("e", "a");
console.log(replaceString);

// replaceAll()
