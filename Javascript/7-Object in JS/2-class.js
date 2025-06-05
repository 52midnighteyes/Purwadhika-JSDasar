/**
 * Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.
 */

class Sepatu {
  nama;
  harga;
  model;

  constructor(paramNama, paramHarga, paramModel) {
    this.nama = paramNama;
    this.harga = paramHarga;
    this.model = paramModel;
  }
}

const newSepatu = new Sepatu("aduhdah", 5000, "boost");
newSepatu.nama = "adidas";
console.log(newSepatu);

const sepatu3 = new Sepatu("puma", 5000, "Macan");

class Car {
  brand;
  price;
  model;
  #color;

  constructor(paramBrand, paramPrice, paramModel, paramColor) {
    this.brand = paramBrand;
    this.price = paramPrice;
    this.model = paramModel;
    this.#color = paramColor;
  }

  getColor() {
    return this.#color;
  }

  setColor() {
    this.#color = paramColor;
  }
}

const BMW = new Car("BMW", 50000, "X", "white");
console.log(BMW.price);
console.log(BMW.getColor());
BMW.setColor("polka");

console.log(BMW);
