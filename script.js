// что-то добавить в массив
var arr = ["Hi", "Hello", "Bonjour"];
arr.push("Hola");
// console.log(arr);

// ====================================================================
// ====================================================================
// добавить с помощью push +
var arr0 = ["Hi", "Hello", "Bonjour", "Hola"];

// append multiple values to the array
arr0.push("Salut", "Hey");

// вывод каждого элеме́нт
for (var i = 0; i < arr0.length; i++) {
  //   console.log(arr0[i]);
}

// ====================================================================
// ====================================================================
// добавьление с помощью concat
var arr1 = ["apple", "banana", "cherry"];

arr1 = arr1.concat(["dragonfruit", "elderberry", "fig"]);

//   console.log(arr1);

// ====================================================================
// ====================================================================
// старый массив прибавить новую.
const arr2 = ["Hi", "Hello", "Bonjour"];

const newArr = [...arr2, "Salut"];

//   console.log(newArr);

// ====================================================================
// ====================================================================
// добавьление в старый массив новую
var fruits = ["Banana", "Orange"];
var moreFruits = ["Apple", "Mango", "Lemon"];
var allFruits = fruits.concat(moreFruits);
// console.log(allFruits);

// ====================================================================
// ====================================================================
function removeItemOnce(arr5, value) {
    var index = arr5.indexOf(value);
    if (index > -1) {
      arr5.splice(index, 1);
    }
    return arr5;
  }
  
  function removeItemAll(arr5, value) {
    var i = 0;
    while (i < arr5.length) {
      if (arr5[i] === value) {
        arr5.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr5;
  }
  // Usage
  console.log([2,5,9,1,5,8,5]);
  console.log(removeItemOnce([2,5,9,1,5,8,5], 5))
  console.log(removeItemAll([2,5,9,1,5,8,5], 5))