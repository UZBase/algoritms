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
var arr1 = [
    "apple",
    "banana",
    "cherry"
  ];
  
  arr1 = arr1.concat([
    "dragonfruit",
    "elderberry",
    "fig"
  ]);
  
//   console.log(arr1);