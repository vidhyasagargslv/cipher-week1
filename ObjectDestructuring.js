//Object Destructuring

let details = {
    name : "Sri",
    age : 24,
    address: {
        city: "Rajahmundry",
        district: "East Godavari",
        state: "Andhra Pradesh",
        country:"India",
        passportDetails:{
        passportNumber:"AP05US5241",

    },
},
};
// console.log(details.address.passportDetails.passportNumber);
// console.log(details.address);
let passportNumber=details.address.passportDetails.passportNumber;
console.log(passportNumber);