/*


teknik data structure akan mempengaruhi cara kita memngambil, menyimpan dan mengakses sebuah data


managa and utilize large datasets
search for particular data from database
disgin algorthms that are tailored towrads particular program
handle multiple request from user at once
simplify and speed up data processing



primitive data structure
boolean, null, number, string, etc.


non-primitive data structure
array, object.
cara kita menyimpan data, memasukan dan mengeluarkan data.





*/

// STACK
// LIFO = LAST IN FIRST OUT -> masuk belakangan, keluar duluan.
// contoh:

class Stack {
  #container: number[] = [];

  push(element: number) {
    this.#container.push(element);
  }

  pop() {
    this.#container.pop();
  }

  get() {
    return this.#container;
  }
}

const newStack = new Stack();
newStack.push(5);
newStack.push(4);
console.log(newStack.get());
newStack.pop();
console.log(newStack.get());

//QUEUE
//FIFO = FIST IN FIRST OUT -> masuk pertama, keluar pertama.
//contoh: sistem ngantri, yang ngatri duluan, yang dilayanain duluan.

class Queue {
  #container: number[] = [];

  push(element: number) {
    this.#container.push(element);
  }

  shift() {
    if ((this.#container.length = 0)) return "sudah tidak ada data";
    this.#container.shift();
  }

  get() {
    return this.#container;
  }
}

const newQueue = new Queue();
newQueue.push(5);
newQueue.push(4);
console.log(newQueue.get());
newQueue.shift();
console.log(newQueue.get());

// SET
// tidak boleh ada duplikasi data
const buah: string[] = ["jeruk", "jeruk", "apel", "semangka", "jeruk", "jeruk"];
console.log(buah);

const newBuah = new Set(buah);
console.log(newBuah);
console.log(newBuah.has("apel"));
newBuah.add("durian");
newBuah.delete("jeruk");

const uniqueBuah: string[] = Array.from(newBuah);
console.log(uniqueBuah);

// HASH TABLE / MAP
// melooping key dengan value

const user = {
  name: "budi",
  age: 22,
};

console.log(user);

const apaNich = Object.entries(user);
console.log(apaNich);

const userMap = new Map(Object.entries(user));
console.log(userMap);
userMap.set("phone", "085814071484");

// LINKED LIST
// ketika kita mau menyimpan banyak element

const array: string[] = ["A", "B", "C", "D"];
console.log(array);

const linkedList = {
  head: {
    element: "A",
    next: {
      element: "B",
      next: {
        elemet: "C",
        next: {
          elemet: "D",
          next: {
            element: null,
          },
        },
      },
    },
  },
};

console.log(linkedList);
