//basic Array calling

let myArray = ["Jack","Jill",4,5,true,"John"]
console.log(myArray[0]);
console.log(myArray[5]);

//Iterate through arrays (forEach)
let Arrays = ["Jack","Jill",4,5,true,"John"]
Arrays.forEach(element => {
    console.log(element)
})

//Index Arrays
let Array1 = ["Jack","Jill",4,5,true,"John"]
for (const [index, value] of Object.entries(Array1)) {
  console.log(index, " - ", value);
}

//Array Mapping
let myMap = new Map();
//Add a key-value pair to the map, with a key of "name" and a value of "John". 
myMap.set("name", "John")
//Add another key-value pair to the map, with a key of "age" and a value of 22.
myMap.set("age", 22)
myMap.forEach((val,key) => {
    console.log(key, " - ", val)
})