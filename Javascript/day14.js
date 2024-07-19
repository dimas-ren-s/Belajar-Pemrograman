// Arrow function
// arrow function : shorten than function expression
// if we make a function expression like this
const greeting =  function(nama){
    return `Halo ${nama}`;
}

let dimas = greeting("Dimas");
console.log(dimas);

// if we make it using an arrow function is like this
const greetingArrow = nama => `Halo ${nama}`;

let adimas = greetingArrow("Addimas");
console.log(adimas);

// map
let numberList = [1, 3, 5, 1, 2, 6];
const sumTheList = (arr) => {
    let total = 0;
    arr.map(element => total += element);
    return total;
}
console.log(sumTheList(numberList));

// reduce
console.log(numberList);
const sumtheListv2 = (arr) => {
    return arr.reduce((total, element) => total + element);
}
console.log(sumtheListv2(numberList));


// Scope : lexical scope
// there is no concept this in arrow function, so arrow function will searching in the lexical scope for this is value
// this concept will use full when hoisting happen, cause 'this' in normal function will be a window value
// this case will we see in constructor function

const MakeMoney = function (item, price){ // when u make constructor, u can't make an arrow function to initiation
    this.item = item;
    this.price = price;
    this.totalOrder = () => `Total Order for Item ${this.item}x : ${item*price}`; // there is no concept 'this' in arrow func
}

let pizza = new MakeMoney(2, 25000);
console.log(pizza.totalOrder());



// High order function 
// : A function that has a function as a parameter(calback) or return value as a function.
const showLetter = (text) => `Text : ${text} dengan jumlah karakter ${text.length}`;; // this function will be a callback function in countLetter

const countLetter = (text, action) => { // high order function
    return action(text);
}

console.log(countLetter("Dimas Rendy Sugara", showLetter));

// before, we are already make a basic example of High order function : map, reduce
// let's make another example using array.filter
let numList = [5, 7 ,1, 2, 1, 2, 0 , 9, 7, 5, 6, 3, 4, 10, 11];
const moreThanThis = (num, list) => { // function expression biasa
    let total = list.filter((element) => element > num); // high order function, filter
    // bentuk asli :
    // list.filter(function(element){
        //     return element > num;
        // });
    return total;
}

let angka5 = moreThanThis(5, numList);
console.log(angka5);

// Method chaining
// if we wanna sum the angka5 before with reduce
let angka5v2 = moreThanThis(5, numList).reduce((prev, curr) => prev + curr);
console.log(angka5v2);

// Template Literals
// Fungsi :
// -- Multi Line string
// -- HTML Fragment
// -- embedded expression string termasuk expression interpolation, ternary
// -- tag template

