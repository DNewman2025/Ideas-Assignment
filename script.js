// let x = 5;
// let y = 10;

// let result = x + y;
// let name = David;

// let result = x + y;
// let result1 = x ** y;
// x >=y
// let me = "David" + x;

// data types
let student = false;
let res;
res = "Hello World";
let sex = null;
let sex_new = "";

// functions
function add(a, b) {
    let x = 5;
    let y = 10;
    return x + y;
}

function add2(a, b) {
    return a + b;
}

add2(5, 10);

// conversion of celsius to fahrenheit
function convertTemperature(Temp) {
    let convertPara = 5/9;
    return convertPara * (temp - 32);
}

// conversion of fahrenheit to celsius
function convertTemperature2(Temp) {
    let convertPara = 9/5;
    return temp * (convertPara + 32);
}

//comparison operators
x === y;
let x = 5;
let y = "10";
x <= y;

// conditional statements
if(x ==y) {
    console.log("Hurray!!!");
}

else {
    console.log("not correct");
}

let day = "friday";
switch(day) {
    case "friday":
        console.log("hurray, TGIF!!!");
        break;
    case "monday":
        console.log("welcome to another working day");
        break;
        default:
        console.log("sorry, you did not specify a valid day")
        break;
}

let age = (10);
switch (true) {
    case (age >= 18 && age <= 34):
        console.log("welcome, you're allowed to use this site");
        break;
    case (age < 18):
        console.log("sorry, you're not allowed to use this site");
        break;
    case (age > 34):
        console.log("you're overage but can still use the site");
        break;
        default:
        console.log("invalid age input");
        break;
}



        // for loops
        for(let i = 0; i < 100; i++) {
            console.log(i);
        }

        for(let i=0; i < 100; i--) {
            console.log(i);
        }




                
        
        

        // if (age < 18) {
        //     console.log("you're not allowed to use this site");
        // } else if (age >= 18 && age <= 34) {
        //     console.log("you're allowed to use this site");
        // } else {
        //     console.log("Error: age not specified");
        // }

                
        