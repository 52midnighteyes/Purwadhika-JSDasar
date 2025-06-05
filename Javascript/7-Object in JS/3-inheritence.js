class Product {
  name;
  price;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Elektronik extends Product {
  brand;

  constructor(name, price, brand) {
    super(name, price);
    this.brand = brand;
  }
}

class TV extends Elektronik {
  layar;

  constructor(name, price, brand, layar) {
    super(name, price, brand);
    this.layar = layar;
  }
}

class Book extends Product {
  author;
  publsher;

  constructor(name, price, author, publsher) {
    super(name, price);
    this.author = author;
    this.publsher = publsher;
  }
}

const tv = new TV("Samsung", 5000, "Samsung", "22 inch");
console.log(tv);

const buku = new Book("harry potter", 2000, "JK Rowling", "Matahari");
console.log(buku);
