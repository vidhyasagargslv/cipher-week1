// Promise is a class and constructor(function)
let promise = new Promise((fulfilled, notFulfilled) => {
    let num1=10;
    let num2=20;
    let sum = num1 + num2;
    if(sum>30) {
        fulfilled();

    }
    else {
        notFulfilled();

    }
});
//.then() only promise is fulfilled
//.catch() only promise is not fulfilled
promise.then(()=>{
    console.log("Promise was fulfilled");
}).catch(()=>{
    console.log("Promise was not fulfilled");
}).finally()


function addTwoNumbers(num1, num2) {
    let sum=0;
    setTimeout(()=> {
        console.log(num1+num2);
        sum = num1+num2;
    },5000);
    
    console.log("Inside addTwoNumbers");
    return sum;
}
console.log(addTwoNumbers(4,5));