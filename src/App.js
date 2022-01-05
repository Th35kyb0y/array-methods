import React from "react";
import "./style.css";

export default function App() {
  // define arraays
  let arr=[4,5,6,9]
  //All JavaScript objects have a toString() method.

  // m1 cnvrt arr to Str
  console.log(arr.toString())
  // if we want arr as string we have to first store it , same applies for all methods
 let arrStr= arr.toString()
  console.log(arrStr, ' is now string')

  //join() method also joins all array elements into a string., we can specify the separator:
// we have to store joined in a new var , basically it returns new arr
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let sepARR= fruits.join(" * ");
  console.log(sepARR)
  
  //pop() method removes the last element in arr
  fruits.pop();
  console.log('last elem is rmvd',fruits)

//push() method adds a new element at end of arr
fruits.push("Kiwi");
console.log(fruits , ' kiwi is added at end')

//shift() method removes the first array
fruits.shift();
console.log('first elem is rmvd',fruits)

//shift() method returns the value that was "shifted out"
let fruit = fruits.shift();
console.log(fruit,' is removed by shift ')

//unshift() method adds a new element (at the beginning) pehle wale ko aage kar dega
//  unshift() method returns the length of the new arr
console.log('current fruits in  arr', fruits)
fruits.unshift("Lemon");
console.log(fruits,'lemon is added and other shifted')

//length property provides an easy way to append a new element
fruits[fruits.length] = "Kiwi";
console.log(fruits, 'kiwi is added usinfg length')

/*Array elements can be deleted using the JavaScript operator delete.

Using delete leaves undefined holes in the array.

Use pop() or shift() instead.*/

//concat() method creates a new array by merging (concatenating) existing arrays
//The concat() method does not change the existing arrays. It always returns a new array.
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

let myChildren = myGirls.concat(myBoys);
console.log(myChildren,'boys girl concated')

// we can add as many as pssible arr using concat
//const myChildren = arr1.concat(arr2, arr3);

//(Merging an Array with Values) str or any data type
 myChildren = myGirls.concat("Peter",5); 
 console.log(myChildren,'Peter and 5 added')

 // splice() method can be used to add new items to an array
 //on a specif position, it takes 2 para , 1st index , 2nd how many remove from there
console.log(fruits)
 fruits.splice(2, 0, "Lemon", "Kiwi")
 console.log(fruits, '2nd post se lemond aa gya and nothing is rmvd')

 //now rmv 2 elem from position 2 
 fruits.splice(2, 2, );
 console.log(fruits,'lemon kiwi remove ho gya')

 //slice() se ek specif index se pura arr remove kar sakte hai 
 let citrus = fruits.slice(3);
 // fruits ke sab elem will be rmv position 3 tak , 0,1,2 removed only rest bacha hai
 console.log(citrus,'h')
 // it returns new arr , not change current arr ,so we have to define var for resiult

 //slice() method can take two arguments like slice(1, 3)
 // first argu yaha se shuru karo 0,1 1 se start hoga 3 means 2nd index 
 // 3rd element and start elem ko chod ke baki sab remove even 0 bhi
  citrus = fruits.slice(1,3);
 console.log(citrus)

 //ARRAY SORT METHODS-

 // sort() method sorts an array alphabetically
 fruits.sort();
 console.log(fruits,'a pehle then b wale ...so on')

 //reverse() method can descend like pehle z then w .. so on
 fruits.reverse();
 console.log(fruits)

 // using sort method for number sorting
 const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points)

//  descending number sort
points.sort(function(a, b){return b - a});
console.log(points)

//Fisher Yates shuffle,

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * i)
  let k = points[i]
  points[i] = points[j]
  points[j] = k
  console.log(points)
}

//Find the Highest (or Lowest) Array Value
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value

//You can use Math.max with spread operator to find highest value
console.log(Math.max(...points),'is highest value')

//You can use Math.min with spread operator to find lowest value in arr
console.log(Math.min(...points),'is lowest value')

//Sorting Object Arrays

 return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
