class Animal {
  makeASound() {
    return "bersuara";
  }
}

class Dog extends Animal {
  constructor() {
    super();
  }

  makeASound() {
    return "bark";
  }
}

class Cat extends Animal {
  constructor() {
    super();
  }

  makeASound() {
    return "Meow";
  }
}
