// ======================================
// CONTOH: Pewarisan (Inheritance) Berlapis
// Studi Kasus: Produk Elektronik & Buku
// ======================================

/*
📦 CLASS: Product (Super Class)
- Deskripsi  : Class dasar untuk semua jenis produk
- Atribut    : name (string), price (number)
- Constructor: Menerima name & price
*/

class Product {
  name;
  price;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

/*
🔌 CLASS: Elektronik (Sub Class dari Product)
- Deskripsi  : Produk-produk elektronik seperti TV, Kulkas, dll
- Atribut    : brand (string)
- Constructor: Menerima name, price, brand
*/

class Elektronik extends Product {
  brand;

  constructor(name, price, brand) {
    super(name, price); // panggil Product constructor
    this.brand = brand;
  }
}

/*
📺 CLASS: TV (Sub Class dari Elektronik)
- Deskripsi  : TV sebagai jenis khusus dari elektronik
- Atribut    : layar (string)
- Constructor: Menerima name, price, brand, layar
*/

class TV extends Elektronik {
  layar;

  constructor(name, price, brand, layar) {
    super(name, price, brand); // panggil Elektronik constructor
    this.layar = layar;
  }
}

/*
📚 CLASS: Book (Sub Class dari Product)
- Deskripsi  : Buku sebagai produk umum non-elektronik
- Atribut    : author (string), publsher (string)
- Constructor: Menerima name, price, author, publsher
*/

class Book extends Product {
  author;
  publsher;

  constructor(name, price, author, publsher) {
    super(name, price); // panggil Product constructor
    this.author = author;
    this.publsher = publsher;
  }
}

// ======================================
// CONTOH PEMAKAIAN
// ======================================

const tv = new TV("Samsung Smart TV", 5000000, "Samsung", "22 inch");
console.log(tv);
// Output:
// TV {
//   name: 'Samsung Smart TV',
//   price: 5000000,
//   brand: 'Samsung',
//   layar: '22 inch'
// }

const buku = new Book("Harry Potter", 200000, "J.K. Rowling", "Matahari");
console.log(buku);
// Output:
// Book {
//   name: 'Harry Potter',
//   price: 200000,
//   author: 'J.K. Rowling',
//   publsher: 'Matahari'
// }
