console.log("Hello World!");

// Expression
5;
3 + 2;

// Statement
var name;
let age;

// one row
/* first row 
second row */

// Variable
let myName;
console.log(myName); // output : undefined
// need to assign value
myName = "John";
console.log(myName); // output : John

let myAge = 20; // declare and assign value

const _construct = "Harus ada Value";
const myId = "19990101"; // constant variable
const kd_fjjp7 = 1070108; // huruf, angka, underscore, $
const $dolar = 1000;

const z = 100;
console.log(z);
// z = 200; // error
// console.log(z); // error

// Data Type
let x;
console.log(typeof (x)); // output : undefined

let xy = 10;
console.log(typeof (xy)) /* output: number */

let yz = 17.25;
console.log(typeof (yz)) /* output: number */

const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/

console.log(5n + 2n); // output : 7n
console.log(5n - 2n); // output : 3n
console.log(5n * 2n); // output : 10n
console.log(5n / 2n); // output : 2n, bukan 2.5n
console.log(5n % 2n); // output : 1n

let greet = "Hello";
let moreGreet = 'Hallo';
let greetAgain = `Hai`;
console.log(typeof (greet)) /* output: string */
console.log(typeof (moreGreet)) /* output: string */
console.log(typeof (greetAgain)) /* output: string */

let otherGreet = greet + " " + greetAgain;
console.log(otherGreet) /* output: Hello Hai */

const namaLengkap = "Dimas Rendy Sugara";
console.log(`Hello, my name is ${namaLengkap}.`);
/* output: Hello, my name is Dimas Rendy Sugara. */

let myBool = true;
console.log(typeof (myBool))
/* output: boolean */

const a = 10;
const b = 12;

let isGreater = a > b;
let isLess = a < b;

console.log(isGreater); // false
console.log(isLess); // true

let someLaterData = null;
console.log(someLaterData); // output : null

const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1); // output : Symbol(id)
console.log(id2); // output : Symbol(id)
console.log(id1 == id2); // output : false, karena setiap symbol adalah unik

let ab = 10;
let bx = ab;
console.log(bx); // output : 10

ab += bx; // artinya -> ab = ab + bx; output : 20
ab -= bx; // artinya -> ab = ab - bx; output : 0
ab *= bx; // artinya -> ab = ab * bx; output : 100
ab /= bx; // artinya -> ab = ab / bx; output : 1
ab %= bx; // artinya -> ab = ab % bx; output : 0

let xyz = 10;
let abc = 15;
console.log(xyz > abc); // output : false
console.log(xyz < abc); // output : true
console.log(xyz >= abc); // output : false
console.log(xyz <= abc); // output : true
console.log(xyz == abc); // output : false
console.log(xyz != abc); // output : true
console.log(xyz === abc); // output : false
console.log(xyz !== abc); // output : true

let first = 10;
let second = 12;

/* AND operator */
console.log(first < 15 && second > 10); // (true && true) -> true
console.log(first > 15 && second > 10); // (false && true) -> false

/* OR operator */
console.log(first < 15 || second > 10); // (true || true) -> true
console.log(first > 15 || second > 10); // (false || true) -> true

/* NOT operator */
console.log(!(first < 15)); // !(true) -> false
console.log(!(first < 15 && second > 10)); // !(true && true) -> !(true) -> false

let jika = true;
if (jika) {
    console.log("Jika benar, maka ini akan dijalankan");
} else {
    console.log("Nilai Salah");
}
// output : Jika benar, maka ini akan dijalankan

let language = "French";
let greeting = "Selamat Pagi"

if (language === "English") {
    greeting = "Good Morning!";
} else if (language === "French") {
    greeting = "Bonjour!"
} else if (language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}

console.log(greeting); // output : Bonjour!

// condition ? true expression : false expression

const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)
// output : Anda mendapatkan diskon sebesar 0%

/* switch (expression / variable) {
    case value1:
        // do something;
        break;
    case value2:
        // do something;
        break;
    default:
    // do something;
} */

let country = "French";
let time = null;

switch (country) {
    case "English":
        time = "Good Morning!";
        break;
    case "French":
        time = "Bonjour!";
        break;
    case "Japanese":
        time = "Ohayou Gozaimasu!";
        break;
    default:
        time = "Selamat Pagi!";
}

console.log(greeting);
/* output Bonjour! */

for (let i = 0; i < 5; i++) {
    console.log(i);
}

/* output
0
1
2
3
4 // berhenti ketika i = 5,
    dan tidak menampilkan nilai lagi
*/

let myArray = ["Luke", "Han", "Chewbacca", "Leia"];
/* for (const variableBaru of Array sebelumnya (myArray)){
    // do something
} */
for (const arrayItem of myArray) {
    console.log(arrayItem)
}

/* output
Luke
Han
Chewbacca
Leia
*/

// let i = 1;

// while (i <= 100) {
//     console.log(i);
//     i++;
// }
// // output : 1 sampai 100

// let loop = 1;

// do {
//     console.log(loop);
//     loop++;
// } while (loop <= 100);
// output : 1 sampai 100

if ((true || false) && (false || false)) {
    console.log("It's true");
} else {
    console.log("It's false");
}
// output : It's false

// const object = {};

let object = { key1: "value1", key2: "value2", key3: "value3" }
let contohObject = {
    key1: "value1",
    $key2: "value2",
    _key3: "value3",
    "key keempat": "value4",
}

/* const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`); */

/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
*/

// ${namaObject.keyValue}
// user[“home world”];

const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);

/* output
Halo, nama saya Luke Skywalker
Umur saya 19 tahun
Saya berasal dari Tattooine
*/
object.key1 = "value1"; // bentuk $, hanya untuk penggunaan string
user.age = 21;
user["home world"] = "Chefchaouen";
delete object.key1; // menghapus key isJedi
delete user.isJedi;

let varArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(varArray);
console.log(varArray[1]);
console.log(typeof varArray);
console.log(Array.isArray(varArray));
varArray.pop("Programming");
console.log("jumlah data saat ini: ", varArray.length);
/* output:
[ 'Cokelat', 42.5, 22, true, 'Programming' ]
42.5
object
true */

const month = ['January', 'March', 'April', 'May'];
month.push('June'); // June pada index terakhir
console.log(month);
// output: [ 'January', 'March', 'April', 'May', 'June' ]
month.pop();
console.log(month);
// output: [ 'January', 'March', 'April', 'May' ]
month.shift();
console.log(month);
// output: [ 'March', 'April', 'May' ]
month.unshift('February');
console.log(month);
// output: [ 'February', 'March', 'April', 'May' ]
delete month[1];
console.log(month);
// output: [ 'February', <1 empty item>, 'April', 'May' ]

month.splice(0, 2);
console.log(month);
// output: [ 'April', 'May' ]

month.splice(1, 0, 'June', 'July', 'August');
console.log(month);
// output: [ 'April', 'June', 'July', 'August', 'May' ]

// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// console.log(favorites);
// console.log(...favorites);
/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
Seafood Salad Nugget Soup
*/

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];
console.log(allFavorites);
/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/

let data = [
    {
        userId: 1,
        nameId: "Dimas Rendy",
    },
    {
        "userId": 2,
        "nameId": "Fulan bin Fulan",
    }
]

let { userId, nameId } = data[0];
console.log(userId); // output : 1
console.log(nameId); // output : Dimas Rendy

// let firstName = "Dimas";
// let lastName = "Rendy";

const profile = {
    firstName: "John",
    lastName: "Doe",
};

let { firstName: namaDepan, lastName: namaBelakang } = profile;

console.log(namaDepan);
console.log(namaBelakang);
/* output
John
Doe
*/

let namaBuku = "Buku Default";
const buku = ["Game of Thrones"];
let [judulBuku, pengarangBuku = "Tidak ada"] = buku;
console.log(judulBuku);
console.log(pengarangBuku);
// output: Game of Thrones
// output: Harry Potter

// const myMap = new Map();
const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);

console.log(myMap.size);
console.log(myMap.get(1));
console.log(myMap.set('2', 'another string'));
console.log(myMap.has('2'));
console.log(myMap.delete('2'));
console.log(myMap);

const numberSet = new Set([1, 4, 6, 4, 1]);
console.log(numberSet);
numberSet.add(5);
console.log(numberSet);
numberSet.delete(4);
console.log(numberSet);
// output: {1, 4, 6}
// output: {1, 4, 6, 5}
// output: {1, 6, 5}

function namaFunction(addSomethingOptional) {
    // do something
}

namaFunction("optionalData");

function myMoney(porto) {
    return porto * 10;
}

console.log(myMoney(1000));

function welcome(namaAnda, negaraAnda) {
    if (negaraAnda == "Indonesia") {
        return `Selamat Datang, ${namaAnda}`;
    } else {
        return `Welcome, ${namaAnda}`;
    }
}

let message = welcome("Dimas", "Indonesia");
console.log(message);

let salamKenal = function (myNama, myNegara) {
    if (myNegara == "Indonesia") {
        return `Selamat Datang, ${myNama}`;
    } else {
        return `Welcome, ${myNama}`;
    }
}

let myMessage = salamKenal("Dimas", "Indonesia");
console.log(myMessage);

let myObject = {
    myUserId: 1,
    myUserName: "Dimas Rendy",
}

function myFunction({ myUserId, myUserName }) {
    console.log(myUserId, myUserName);
}

myFunction(myObject);
// output : 1 'Dimas Rendy'

function exponentsFormula(baseNumber, exponent = 2) {
    const result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(3); // output : 3^2 = 9

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5));
// output : 15

// function expression
const sayHello = () => console.log(`WELCOME!`);
sayHello();

const howMuch = (a, b) => a * b;
console.log(howMuch(2, 3));

// global variable, dapat diakses pada parent() dan child()
const asd = 'a';

function parent() {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
    const b = 'b';

    function child() {
        // local variable, dapat diakses hanya pada fungsi child().
        const c = 'c';
    }
}

function multiply(num) {
    total = num * num;
    return total;
}

// let total = 9;
let number = multiply(20);

console.log(total)

const add = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
}

const addCounter = add();

function minimal(a, b) {
    if (b < a) {
        return b;
    } else {
        return a;
    }
}

console.log(minimal(1, 4));
console.log(minimal(3, 2));
console.log(minimal(3, 3));

function findIndex(arrayItem, numberItem) {
    for (let i = 0; i < arrayItem.length; i++) {
        if (arrayItem[i] == numberItem) {
            return i;
        }
    }
    return -1;
}

console.log(findIndex([1, 2, 3, 4, 5], 3));
console.log(findIndex([1, 2, 3, 4, 5], 6));

function multiply(num) {
    total = num * num;
}

const result = multiply(3);

console.log(result);

function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);
// output : currentMin: -23, currentMax: 71

function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}
console.log(calculate(3)); // output : 2

/* const car = {
    // properties
    brand: 'Ford',
    color: 'red',
    maxSpeed: 200,
    chassisNumber: 'f-1',
    // methods
    drive: () => {
        console.log('driving');
    },
    reverse: () => {
        console.log('reversing');
    },
    turn: () => {
        console.log('turning');
    }
}

console.log(car.brand); // Ford
console.log(car.color); // red
console.log(car.maxSpeed); // 200
console.log(car.chassisNumber); // f-1
car.drive(); // driving
car.reverse(); // reversing
car.turn(); // turning */

/* function Car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
}
// method
Car.prototype.drive = function () {
    console.log(`${this.brand} ${this.color} is driving`);
}

Car.prototype.reverse = function () {
    console.log(`${this.brand} ${this.color} is reversing`);
}

Car.prototype.turn = function () {
    console.log(`${this.brand} ${this.color} is turning`);
}

// Membuat objek mobil dengan constructor function Car
const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
const car2 = new Car('Honda', 'Black', 180, 'ho-1');
const car3 = new Car('Suzuki', 'Red', 220, 'su-1');

console.log(car1);
console.log(car2);
console.log(car3);

car1.drive();
car2.drive();
car3.drive(); */

/* Output
Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }
 
Toyota Silver is driving
Honda Black is driving
Suzuki Red is driving
*/

class Car {
    constructor(brand, color, maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
    }

    drive() {
        console.log(`${this.brand} ${this.color} is driving`);
    }

    reverse() {
        console.log(`${this.brand} ${this.color} is reversing`);
    }

    turn() {
        console.log(`${this.brand} ${this.color} is turning`);
    }
}

// Membuat objek mobil dengan constructor function Car
const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
const car2 = new Car('Honda', 'Black', 180, 'ho-1');
const car3 = new Car('Suzuki', 'Red', 220, 'su-1');

console.log(car1);
console.log(car2);
console.log(car3);

car1.drive();
car2.drive();
car3.drive();

class User {
    #defaultMoney = null; // enclosing class

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#defaultMoney = this.#generateMoney();
    }

    get defaultMoney() {
        return this.#defaultMoney;
    }

    set defaultMoney(value) {
        console.log(`Sorry you can't change default money`);
    }

    #generateMoney() {
        return Math.floor(Math.random() * 1000000) + 1;
    }
}

const user1 = new User('Dimas', 'Rendy');
console.log(user1); // object User
// user1.#generateMoney = 1000000; // tidak ada akses
// console.log(user1.#defaultMoney); // object user.defaultMoney

/* // Superclass
class MailService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
}

// Subclass
class WhatsAppService extends MailService {
    sendBroadcastMessage(message, receivers) {
        for (const receiver of receivers) {
            this.sendMessage(message, receiver);
        }
    }
}

// Subclass
class EmailService extends MailService {
    sendDelayedMessage(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay);
    }
}

const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');

whatsapp.sendMessage('Hello', '+6289876543210');
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
// whatsapp.sendDelayedMessage(); // Error karena milik EmailService

email.sendMessage('Hello', 'john@doe.com');
email.sendDelayedMessage('Hello', 'john@doe.com', 3000);
// email.sendBroadcastMessage(); // Error karena milik WhatsAppService */

/* class MailService {
    constructor(sender) {
        this.sender = sender;
    }
}

class WhatsAppService extends MailService {
    // overriding constructor
    constructor(sender, isBusiness) {
        super(sender); // super() harus dipanggil sebelum this

        this.isBusiness = isBusiness;
    }
} */

class MailService {
    constructor(sender) {
        this.sender = sender;
    }

    sendMessage(message, receiver) {
        console.log(`${this.sender} sent ${message} to ${receiver}`);
    }

}

class WhatsAppService extends MailService {
    constructor(sender, isBusiness) {
        super(sender);
        this.isBusiness = isBusiness;
    }

    // Overriding method
    sendMessage(message, receiver) {
        // memanggil method sendMessage pada superclass
        super.sendMessage(message, receiver);

        console.log('message sent via WhatsApp');
    }
}


const mailService = new MailService('someSender');
const whatsappService = new WhatsAppService('+6281234567890', true);

mailService.sendMessage('Hai, apa kabar?', 'someReceiver');
whatsappService.sendMessage('Hai, apa kabar?', '+6289876543210');

/**
* Output:
* someSender sent Hai, apa kabar? to someReceiver
* +6281234567890 sent Hai, apa kabar? to +6289876543210
* message sent via WhatsApp
*/

class Developer {
    constructor(name) {
        this.name = name;
    }

    commitChanges() {
        console.log(`${this.name} is committing changes...`);
    }
}

function canBuildUI(developer) {
    return {
        buildUI: () => {
            console.log(`${developer.name} is building UI...`);
        }
    }
}

function canBuildAPI(developer) {
    return {
        buildAPI: () => {
            console.log(`${developer.name} is building API...`);
        }
    }
}

function canDeployApp(developer) {
    return {
        deployApp: () => {
            console.log(`${developer.name} is deploying app...`);
        }
    }
}

function createFrontEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}

function createBackEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer));
}

function createDevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
}

function createFullStackDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
}

const frontEndDeveloper = createFrontEndDeveloper('Fulan');
frontEndDeveloper.commitChanges();
frontEndDeveloper.buildUI();
console.log(`is ${frontEndDeveloper.name} developer? `, frontEndDeveloper instanceof Developer);

const backEndDeveloper = createBackEndDeveloper('Fulana');
backEndDeveloper.commitChanges();
backEndDeveloper.buildAPI();
console.log(`is ${backEndDeveloper.name} developer? `, backEndDeveloper instanceof Developer);

const devOpsDeveloper = createDevOps('Fulani');
devOpsDeveloper.commitChanges();
devOpsDeveloper.deployApp();
console.log(`is ${devOpsDeveloper.name} developer? `, devOpsDeveloper instanceof Developer);

const fullStackDeveloper = createFullStackDeveloper('Fulanah');
fullStackDeveloper.buildUI();
fullStackDeveloper.buildAPI();
fullStackDeveloper.deployApp();
console.log(`is ${fullStackDeveloper.name} developer? `, fullStackDeveloper instanceof Developer);
console.log(fullStackDeveloper);

/**
* Output:
* Fulan is committing changes...
* Fulan is building UI...
* is Fulan developer?  true
* Fulana is committing changes...
* Fulana is building API...
* is Fulana developer?  true
* Fulani is committing changes...
* Fulani is deploying app...
* is Fulani developer?  true
* Fulanah is building UI...
* Fulanah is building API...
* Fulanah is deploying app...
* is Fulanah developer?  true
*/

const date = new Date();

const timeInJakarta = date.toLocaleString('id-ID', {
    timeZone: 'Asia/Jakarta',
});

const timeInTokyo = date.toLocaleString('ja-JP', {
    timeZone: 'Asia/Tokyo',
});

const timeInMakassar = date.toLocaleString('id-ID', {
    timeZone: 'Asia/Makassar',
});

console.log(timeInJakarta); // output : 12/10/2021, 10:00:00
console.log(timeInTokyo); // output : 12/10/2021, 11:00:00
console.log(timeInMakassar); // output : 12/10/2021, 09:00:00

class UniqueArray extends Array {
    constructor(...args) {
        // make sure args is unique before passing it to super
        const uniqueValue = args.filter((item, index) => args.indexOf(item) === index);

        super(...uniqueValue);
    }

    push(item) {
        // make sure only unique item is added
        if (!this.includes(item)) {
            super.push(item);
        }
    }
}

const someArray = new UniqueArray('a', 'b', 'c', 'a', 'b', 'c');
console.log(someArray); // ['a', 'b', 'c']
someArray.push('d');
console.log(someArray); // ['a', 'b', 'c', 'd']
someArray.push('a');
console.log(someArray); // ['a', 'b', 'c', 'd']

const bulan = ['January', 'March', 'April', 'May', 'March'];
console.log(bulan.indexOf('May')); // output : 1
console.log(bulan.filter((jamal, tes) => bulan.indexOf(jamal) === tes))

class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

class Rabbit extends Animal {
    constructor(name, isMammal) {
        super(name, isMammal);

        this.isMammal = true;

        // atau cuman super saja
        // super(name, true);
    }

    eat() {
        return `${this.name} sedang makan!`;
    }
}

class Eagle extends Animal {
    constructor(name, isMammal) {
        super(name, isMammal);

        this.isMammal = false;

        // atau cuman super saja
        // super(name, false);
    }

    fly() {
        return `${this.name} sedang terbang!`;
    }
}

// Instance
const myRabbit = new Rabbit("Labi", 2);
const myEagle = new Eagle("Elo", 4);

console.log(myRabbit, myEagle);

/* // imperative programming
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for (let i = 0; i < names.length; i++) {
    newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);

// output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
*/

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log(newNamesWithExcMark);

/* output:
    [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
*/

// const createPersonWithAge = (age, person) => {
//     person.age = age;
//     return person;
// };

// const person = {
//     name: 'Bobo'
// };

// const newPerson = createPersonWithAge(18, person);

// console.log({
//     person,
//     newPerson
// });

/**
 * Output:
 *  {
        person: { name: 'Bobo', age: 18 },
        newPerson: { name: 'Bobo', age: 18 }
    }
*/

const createPersonWithAge = (age, person) => {
    // spread operator object, ketika dibuat akan menggabungkan
    // semua properti termasuk age yang ada di dalam object person
    return { ...person, age };
};

const person = {
    name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson,
});

/**
 * Output:
 *  { 
 *    person: { name: 'Bobo' },
 *    newPerson: { name: 'Bobo', age: 18 } 
 *  }
*/

const daftarNama = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamaTandaSeru = daftarNama.map((name) => `${name}!`);

console.log({
    daftarNama,
    newNamaTandaSeru,
});

/**
    {
    daftarNama: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
    newNamaTandaSeru: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
    }
 */

const usser = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}
// kita buat function untuk membuat object baru dengan nama yang benar
const createUserWithNewLastName = (newLastName, usser) => {
    // ubah property lastName menjadi newLastName
    return { ...usser, lastName: newLastName }
}
// kita manfaatkan function dan object yang sudah ada
const newUser = createUserWithNewLastName('Potter', usser);

console.log({ usser, newUser });

/**
 * output:
    {
        usser: { firstname: 'Harry', lastName: 'Protter' },
        newUser: { firstname: 'Harry', lastName: 'Potter' }
    }
 */

// const countDown = start => {
//     console.log(start);
//     if (start > 0) countDown(start - 1);
// };

// countDown(10);
// output : 10 - 0

const countDown = start => {
    do {
        console.log(start);
        start -= 1;
    }
    while (start > 0);
};

countDown(10);
// output : 10 - 1

// menyimpan function dalam variabel
const hello = () => {
    console.log('Hello!')
};
// memberikan function sebagai parameter pada fungsi lainnya say(hello)
// memanggil function hello diatas
const say = (someFunction) => {
    someFunction();
}
// mengembalikan function di dalam function
const letsHello = () => {
    return () => {
        console.log('Hello!');
    }
}

hello();
say(hello);
letsHello()();

/**
    Hello!
    Hello!
    Hello!
 */

const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => `${name}!`);
// const newArray = ['value1', 'value2', 'value3', 'value4'].map((perValue) => { //do something });
console.log(newArray);
// output : [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));
// const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((perItem) => { //filter true });
console.log(truthyArray);
// output : [ 1, 'Hallo', 'Harry', 14 ]

const students = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
// const eligibleForScholarshipStudents = arrayObject.filter((perObjectArray) => { //perObjectArray.keyObject true });
console.log(eligibleForScholarshipStudents);
// output : [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]

// arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])
// [...] adalah opsional parameter

const banyakStudent = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const totalScore = banyakStudent.reduce((acc, student) => acc + student.score, 0);
// const totalScore = arrayObject.reduce((accumulator, perObjectArray) => { //acc nol, tapi terus ditambah score });
console.log(totalScore); // 60 + 88 + 90 + 75 = 313 atau output : 313

// arr.some(callback(element, [index], [array]), [thisArg])
const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);

console.log(even); // true

// arr.find(callback(element, [index], [array]), [thisArg]);
const studentss = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const findJames = studentss.find(student => student.name === 'James');
console.log(findJames); // { name: 'James', score: 88 }

// arr.sort([compareFunction])

const array1 = [1, 30, 4, 1000];
// const compareNumber = (a, b) => { //do something };
const compareNumber = (a, b) => {
    return a - b;
};
// misal, a = 1, b = 30, maka a - b = -29, maka a sebelum b
// misal, a = 30, b = 4, maka a - b = 26, maka b sebelum a
// dan a = 30, b = 100, maka a - b = -70, maka a sebelum b
const sorting = array1.sort(compareNumber);
console.log(sorting); // [ 1, 4, 30, 1000 ]

// arr.every(callback(element, [index], [array]))

const scores = [70, 75, 90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
// const examPassed = array.every((perArray) => { //every score is more than minimumScore });
console.log(examPassed); // true

// array.forEach(callback(element, [index], [array]), [thisArg])

/* const namess = ['Harry', 'Ron', 'Jeff', 'Thomas'];

for (let i = 0; i < namess.length; i++) {
    if (namess[i] === 'Jeff') continue; // Bisa!

    console.log(`Hello, ${namess[i]}!`);
}

namess.forEach((name) => {
    if (name === 'Jeff') continue; // Tidak Bisa!
    console.log(`Hello, ${name}`);
}); */

const books = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
    { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
    { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
    { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
    { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
    { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];

const greatAuthors = books
    .filter(item => item.sales > 1000000)
    .map(item => `${item.author} adalah penulis buku ${item.title} yang sangat hebat!`);


try {
    console.log(greatAuthorss);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log('Finally akan tetap dieksekusi');
}
// output : ReferenceError
// output : greatAuthorss is not defined
// output : ReferenceError: greatAuthorss is not defined
// output : Finally akan tetap dieksekusi

/* const json = '{ "name": "Yoda", "age": 20 }';

try {
    const user = JSON.parse(json);

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
} */

/* const json = '{ bad json }';

try {
    const user = JSON.parse(json);

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
} */
// SyntaxError
// Expected property name or '}' in JSON at position 2 (line 1 column 3)

/* const json = '{ "age": 20 }';

try {
    const user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }

    console.log(user.name); // undefined
    console.log(user.age);  // 20
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
} */
// output : JSON Error: 'name' is required.

/* const json = '{ "name": "Yoda", "age": 20 }';

try {
    const user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }

    errorCode;

    console.log(user.name); // Yoda
    console.log(user.age);  // 20
} catch (error) {
    // Kalau syntax error, value undefined dsb
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } // kalau ReferenceError, berasal dari code error
    else if (error instanceof ReferenceError) {
        console.log(error.message);
    } // kalau error lainnya
    else {
        console.log(error.stack);
    }
} */
// output : ReferenceError: errorCode is not defined

// subclass dari Error
/* class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

const json = '{ "age": 30 }';

try {
    const user = JSON.parse(json);

    if (!user.name) {
        throw new ValidationError("'name' is required.");
    }
    if (!user.age) {
        throw new ValidationError("'age' is required.");
    }

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
} */
// output : Invalid data: 'name' is required.

/*
    Saat ini, Anda sudah memiliki fungsi detectTriangle yang berguna untuk
    mendeteksi jenis segitiga berdasarkan nilai argumen.
    Contoh:
    - 1, 1, 1 -> Segitiga sama sisi
    - 4, 4, 2 -> Segitiga sama kaki
    - 3, 4, 6 -> Segitiga sembarang
    
    Namun fungsi detectTriangle belum berjalan dengan baik karena
    bila ada argumen fungsi yang bukan number, alih-alih error, ia akan mengembalikan "Segitiga sembarang".
    Contoh:
    - 1, false, 1 -> Segitiga sembarang
    - 'a', 3, 5 -> Segitiga sembarang
    - 12, 2, null -> Segitiga sembarang
    Kondisi yang diharapkan:
    - 1, false, 1 -> Argumen kedua harus number
    - 'a', 3, 5 -> Argumen pertama harus number
    - 12, 2, null -> Argumen ketiga harus number
    
    Tugas Anda adalah memperbaiki fungsi detectTriangle agar berjalan dengan kondisi yang diharapkan.
    Pastikan Anda menggunakan teknik Throwing dan Handling Error yah.
    
    TODO 1:
    - Buatlah class ValidationError yang merupakan custom error dengan spesifikasi berikut:
    - Turunan dari class Error
    - Memiliki constructor(message)
    - this.name harus bernilai "ValidationError"

    TODO 2:
    - Buatlah fungsi validateNumberInput yang memvalidasi 3 buah input (argumen) dengan spesifikasi berikut:
    - Menerima 3 argumen
    - Bila argumen pertama bukan number:
        - throw ValidationError dengan pesan 'Argumen pertama harus number'
    - Bila argumen kedua bukan number:
        - throw ValidationError dengan pesan 'Argumen kedua harus number'
    - Bila argumen ketiga bukan number:
        - throw ValidationError dengan pesan 'Argumen ketiga harus number'

    TODO 3:
    - Panggil fungsi validateNumberInput di dalam fungsi detectTriangle untuk memvalidasi nilai argumen a, b, dan c.
    - pastikan Anda memanggil validateNumberInput menggunakan try .. catch.
    - bila block catch terpanggil, kembalikan fungsi detectTriangle dengan pesan error yang dibawa fungsi validateNumberInput.
 */

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

const validateNumberInput = (a, b, c) => {
    if (typeof a !== 'number') {
        throw new ValidationError('Argumen pertama harus number');
    }
    if (typeof b !== 'number') {
        throw new ValidationError('Argumen kedua harus number');
    }
    if (typeof c !== 'number') {
        throw new ValidationError('Argumen ketiga harus number');
    }
}

const detectTriangle = (a, b, c) => {
    try {
        validateNumberInput(a, b, c);

        if (a === b && b === c) {
            return 'Segitiga sama sisi';
        }

        if (a === b || a === c || b === c) {
            return 'Segitiga sama kaki';
        }

        return 'Segitiga sembarang';
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.log(`JSON Syntax Error: ${error.message}`);
        } else if (error instanceof ReferenceError) {
            console.log(`${error.message}`);
        } else if (error instanceof ValidationError) {
            console.log(`${error.message}`);
        } else {
            console.log(error.stack);
        }
    }
}

try {
    const arr = [1, 2, 3, 4];
    for (let i = 0; i <= 4; i++) {
        console.log(arr[i]);
    }
} catch (e) {
    console.log("Out of bounds");
}

console.log('Selamat datang!');

setTimeout(() => {
    console.log('Terima kasih sudah mampir, silakan datang kembali!');
}, 3000)

console.log('Ada yang bisa dibantu?');
// output : Selamat datang!
// output : Ada yang bisa dibantu?
// output : Terima kasih sudah mampir, silakan datang kembali!

/* function getUsers(isOffline, callback) {
    // simulate network delay
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];
        // kalau true, berarti akan dijalankan callback dengan parameter error
        if (isOffline) {
            callback(new Error('cannot retrieve users due offline'), null);
            return;
        }
        // kalau false, berarti akan dijalankan callback dengan parameter users
        callback(null, users);
    }, 3000);
}

function usersCallback(error, users) {
    if (error) {
        console.log('process failed:', error.message);
        return;
    }
    console.log('process success:', users);
}

getUsers(false, usersCallback); // process success: ['John', 'Jack', 'Abigail']
getUsers(true, usersCallback); // process failed: cannot retrieve users due offline */

/* function getUsers(isOffline) {
    // return a Promise object
    return new Promise((resolve, reject) => {

        // simulate network delay
        setTimeout(() => {
            const users = ['John', 'Jack', 'Abigail'];

            if (isOffline) {
                reject(new Error('cannot retrieve users due offline'));
                return;
            }

            resolve(users);
        }, 3000);

    });
} */

/* function getUsers(isOffline) {
    // return a promise object
    return new Promise((resolve, reject) => {

        // simulate network delay
        setTimeout(() => {
            const users = ['John', 'Jack', 'Abigail'];

            if (isOffline) {
                reject(new Error('cannot retrieve users due offline'));
                return;
            }

            resolve(users);
        }, 3000);
    });
}

getUsers(false)
    .then(users => console.log(users))
    .catch(err => console.log(err.message));

// output : ['John', 'Jack', 'Abigail'] */

/* const { promisify } = require('util');

function getUsers(isOffline, callback) {
    // simulate network delay
    setTimeout(() => {
        const users = ['John', 'Jack', 'Abigail'];
        if (isOffline) {
            callback(new Error('cannot retrieve users due offline'), null);
            return;
        }

        callback(null, users);
    }, 3000);
}

// create a Promise version of getUsers
const getUsersPromise = promisify(getUsers);

getUsersPromise(false)
    .then(users => console.log(users)) // ['John', 'Jack', 'Abigail']
    .catch(err => console.log(err.message));

getUsersPromise(true)
    .then(users => console.log(users))
    .catch(err => console.log(err.message)); // cannot retrieve users due offline */

/* const fs = require('fs');
const { promisify } = require('util');

//deklarasi fungsi readFilePromise dengan promisify
const readFilePromise = promisify(fs.readFile);

// './data.txt' adalah berkas terpisah
// dalam direktori yang sama
readFilePromise('./data.txt', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.log(err.message)); */

function withDrawMoney(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount > 100) {
                reject(new Error('Not enough money to withdraw'));
            }

            resolve(amount);
        }, 1000);
    });
}

function buyCinemaTicket(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 10) {
                reject(new Error('not enough money to buy ticket'));
            }

            resolve('ticket-1');
        }, 1000);
    });
}

function goInsideCinema(ticket) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!ticket) {
                reject(new Error('no ticket'));
            }

            resolve('enjoy the movie');
        }, 1000);
    });
}

// function watchMovie() {
//     withDrawMoney(10)
//         .then((money) => {
//             return buyCinemaTicket(money);
//         })
//         .then((ticket) => {
//             return goInsideCinema(ticket);
//         })
//         .then((result) => {
//             console.log(result);
//         })
//         .catch((error) => {
//             console.log(error.message);
//         });
// }
function watchMovie() {
    withDrawMoney(10)
        .then((money) => buyCinemaTicket(money))
        .then((ticket) => goInsideCinema(ticket))
        .then((result) => console.log(result))
        .catch((error) => console.log(error.message));
}

watchMovie();

// fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) => setTimeout(() => resolve("1"), 1000));
const promiseResolve2 = new Promise((resolve, reject) => setTimeout(() => resolve("2"), 2000));
const promiseResolve3 = new Promise((resolve, reject) => setTimeout(() => resolve("3"), 3000));

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
    .then((value) => console.log(value)) // 1
    .catch((error) => console.log(error.message));

// rejected sample
const promiseReject1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('1')), 1000));
const promiseReject2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('2')), 2000));
const promiseReject3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("3")), 3000));

Promise.any([promiseReject1, promiseReject2, promiseReject3])
    .then((value) => console.log(value))
    .catch((error) => console.log(error.message)); // All Promises were rejected

async function watchMovie(amount) {
    try {
        const money = await withDrawMoney(amount);
        const ticket = await buyCinemaTicket(money);
        const result = await goInsideCinema(ticket);

        return result;
    } catch (error) {
        throw error;
    }
}

watchMovie(10)
    .then((result) => console.log(result)) // enjoy the movie
    .catch((error) => console.log(error.message));

watchMovie(5)
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message)); // not enough money to buy ticket

function buyTollRoadCard(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money >= 25) {
                console.log('buying card');
                resolve({ tollRoadCard: true, balance: 0 });
                return;
            }

            reject(new Error('not enough money to buy card'));
        }, 1000);
    });
}

function topUpBalance(card, amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (card) {
                console.log('topping up balance');
                resolve({ ...card, balance: card.balance + amount });
                return;
            }

            reject(new Error('no card'));
        }, 1000);
    });
}


function useTollRoad(card) {
    const TOLL_PRICE = 10;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (card.balance < TOLL_PRICE) {
                reject(new Error('not enough balance'));
                return;
            }

            card.balance -= TOLL_PRICE;

            console.log('using toll road');
            resolve();
        }, 1000);
    });
}

module.exports = {
    buyTollRoadCard,
    topUpBalance,
    useTollRoad,
}


/**
* @TODO
* Lengkapilah kode di bawah ini agar dapat mengakses jalan tol.
* 1. Beli kartu tol (buyTollRoadCard) -> isi argumen money dengan angka 25 -> mengembalikan objek { tollRoadCard: true, balance: 0 }.
* 2. Isi saldo kartu tol (topUpBalance) -> isi argumen card dengan objek card yang didapat dari langkah 1 dan isi argumen amount dengan angka 10 -> mengembalikan objek { tollRoadCard: true, balance: 10 }.
* 3. Gunakan akses jalan toll (useTollRoad) -> isi argumen card dengan objek card yang didapat dari langkah 2.
*
* Catatan:
* - Anda boleh menggunakan async/await atau .then() atau .catch() atau kombinasi keduanya.
* - Jika ada error, tampilkan error (error.message) tersebut dengan console.log.
* - Masing-masing langkah di atas harus dijalankan secara berurutan.
* - Masing-masing langkah akan mencetak pesan ke console.
* - Anda bisa mengeksplorasi fungsi yang sudah disediakan di utils.js. Namun, Anda tidak boleh mengubah isi dari utils.js.
*/

const { buyTollRoadCard, topUpBalance, useTollRoad } = require('./utils');

function getTollAccess() {
    buyTollRoadCard(25)
        .then((card) => topUpBalance(card, 10))
        .then((toppedUpCard) => useTollRoad(toppedUpCard))
        .catch((error) => {
            console.log(error.message);
        });
}

// Jangan hapus kode di bawah ini
getTollAccess();

// atau 

async function getTollAccess() {
    try {
        const buyTollAccess = await buyTollRoadCard(25);
        const topUpAccess = await topUpBalance(buyTollAccess, 10);
        const result = await useTollRoad(topUpAccess);
        return result;
    } catch (error) {
        throw error;
    }
}

// Jangan hapus kode di bawah ini
getTollAccess();