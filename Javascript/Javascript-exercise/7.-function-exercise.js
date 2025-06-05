/*
Create a function that can create a triangle pattern according to the height we provide like the 
following :
01
02 03
04 05 06
07 08 09 10
*/

/**
 * case: bikin fungsi yang bikin segitiga, tapi ada pattern yang harus diikuti
 * bisa pakai loop di dalam function atau pakai reccursion func
 * butuh variabel penampung buat angka dan buat row setiap iterasi
 *
 */

function halfPyramid(height) {
  let num = 1;
  let str = "";
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
      str += `${String(num).padStart(2, "0")} `;
      num++;
    }
    str += `\n`;
  }

  return str;
}

console.log(halfPyramid(4));

// 2
// function yang loop number sesuai input bakal replace kelipatan 3 pakai fixx dan 5 pake buzz

// cara 1

function fizz_buzz(n) {
  let res = "";

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res += "fizbuzz, ";
    } else if (i % 3 === 0) {
      res += "fizz, ";
    } else if (i % 5 === 0) {
      res += "buzz, ";
    } else {
      res += `${i}, `;
    }
  }

  res = res.slice(0, -2);
  return res;
}
console.log(fizz_buzz(15));

// cara 2
function fbz(n) {
  let res = "";
  for (let i = 1; i <= n; i++) {
    let val = "";
    if (i % 3 === 0) val += "fizz";
    if (i % 5 === 0) val += "buzz";
    res += (val || i) + (i === n ? "" : ", ");
  }
  return res;
}

function fizzBuzz(param) {
  for (i = 0; i < param.length; i++) {
    if (param[i] % 3 === 0 && param[i] % 5 === 0) {
      param[i] = "fizzbuzz";
    } else if (param[i] % 3 === 0) {
      param[i] = "fizz";
    } else if (param[i] % 5 === 0) {
      param[i] = "buzz";
    }
  }
  console.log(param);
}

fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

// pakai .map
function _fizzBuzz(param) {
  const result = param.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
    else if (num % 3 === 0) return "fizz";
    else if (num % 5 === 0) return "buzz";
    else return num;
  });

  return result;
}

const resFizzbuzz = _fizzBuzz([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
]);
console.log(resFizzbuzz);

//3
// create function to calculate body mass index (BMI)
// formula BMI = weight/height
// paramater weithg & height

function bodyMassIndex(weight, height) {
  const formula = weight / Math.pow(height, 2);
  let BMI = "";
  if (formula < 18.5) {
    BMI = "less weight";
  } else if (formula <= 24.9) {
    BMI = "ideal";
  } else if (formula <= 29.9) {
    BMI = "overweight";
  } else if (formula <= 39.9) {
    BMI = "very overweight";
  } else {
    BMI = "overweight";
  }

  result = `skor ${formula} hasilnya adalah ${BMI}`;

  return result;
}

const bmiResult = bodyMassIndex(75, 1.7);
console.log(bmiResult);

/*
● Write a function to remove all odd numbers in an array and return a new array that contains even
numbers only
○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
*/

function removeOddNumbers(param) {
  let newArr = [];
  for (let i = 0; i < param.length; i++) {
    if (param[i] % 2 == 0) {
      newArr.push(param[i]);
    }
  }
  return newArr;
}

const noOdd = removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(noOdd);

//// pakai method filter
function _removeOddNumbers(param) {
  let newArr = [];
  return (newArr = param.filter((num) => num % 2 === 0));
}

const _noOdd = _removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(_noOdd);

/**
 * Write a function to split a string and convert it into an array of words
○ Example : “Hello World” → [“Hello”, “World”]
 */

function strSplit(param) {
  return param.split(" ");
}

const toArr = strSplit("muhammad alwi susilo");
console.log(toArr);
