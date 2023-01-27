
//using const
var num = 5;
console.log(num);

//string polatation

let firstName = "vidhya ";
                                
let lastName  = "sagar";
                              
//let fullName = firstName + " " + lastName - (takes more memory)
let fullName = `${firstName} ${lastName}`;
console. log(fullName);

//default params

let addTwoNumbers = (num1, num2) => {
    return num1 + num2;
};
console.log(addTwoNumbers(1,9));

 
//spread operator
// Rest and Spread Operator are applicable in Arrays and Objects
let array = [5, 10, 15, 20, 25];
// Spread ->
 // let newArray = [...array, 30, 35, 40];
let newArray=[...array];
console.log(array);



// //Spread Operator for arrays
// console.log("Spread Operator = ",...array);

// //Rest Operator
// let testFunction = (...args) => {
//     console.log(args);
// }

// let maxOfTwoNumbers = (num1, num2) => Math.max(num1,num2);
// console.log(maxOfTwoNumbers(5,6));

// let maxOfThreeNumbers = (num1, num2, num3) => Math.max(num1,num2, num3);
// console.log(maxOfThreeNumbers(8,9,7));

// let maxOfNumbers = (...numbers)=>{
//     let maximum = Number.MIN_VALUE;
//     for(let number of numbers) {
//         maximum = Math.max(maximum, number);
//     }
//     return maximum;
// };
// console.log(maxOfNumbers(1,2,3,4,5,6,7,8,9,10,15,25,30));

  

// Spread Operator for objects
//shallow cloning == Partially copied or modified
let object = {
    name: "sagar",
    age: 21,
    city: "vishakapatnam",
};

let object2 = {...object, name:"sagar", country:"INDIA", state: "Andhra_Pradesh"};
console.log(object)
console.log(object2)

                             
 
