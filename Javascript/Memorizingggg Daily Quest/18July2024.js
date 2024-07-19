// === KONSEP JAVASCRIPT MODERN ===


// [a, b] = [b, a] : memutarbalikkan Value(khusus let)
let varSatu = [1, 2, 3];
let varDua = `Dimas`;
[varSatu, varDua] = [varDua, varSatu];
console.log(varSatu);

// nama : nama, bisa dibuat nama saja
const nama = "Dimas";
const umur = 23;
const getProfile = {
    nama, // bisa dibuat nama saja
    umur : umur // aslinya begini
}
console.log(getProfile);

// Kondisi && ditampilkan : Penyederhanaan dari if(kondisi){ return ditampilkan }
const kondisi = true;
kondisi && console.log(`Kondisi True`);

// trueable || default jika false : Penyederhanaan dari ternary jika kondisi cekKondisi ? cekKondisi : 'Kondisi False';
const cekKondisi = `Nilainya trueable Tidak Kosong/Undefined/Null`;
console.log(cekKondisi || `Kondisi False`);

// Method Chaining : menggabungkan berbagai macam fungsi pada satu baris code yang dijalankan beraturan
const stringNama = `Dimas Rendy Sugara`;
const totalHurufNama = stringNama.split(" ").join("").length; // string di split untuk menghilangkan spasi, lalu digabungkan lagi, lalu tinggal dihitung panjang 
console.log(totalHurufNama);





// === Object.create ===


// Digunakan pada function declaration untuk pembuatan object
// Digunakan untuk memanggil method lain sebagai function bawaan
const methodMahasiswa = {
    makan : function(porsi){
        this.energi += porsi*5;
        return `Energi bertambah ${porsi*5}`;
    },
    main : function(jam){
        this.energi -= jam*3;
        return `this.Energi berkurang ${jam*3}`;
    }
}

function mahasiswa(nama, energi){
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    return mahasiswa;
}

let dimas = mahasiswa("Dimas", 20);
console.log(dimas.main(1));
console.log(dimas);





// === Prototype ===


// prototype digunakan pada function constructor
// Prototype adalah sebuah object yang mewarisi sifat, prototype juga memiliki function bawaan.
function Mahasiswa(nama, energi){
    console.log(Mahasiswa.prototype);
    // let this = Object.create(Mahasiswa.prototype) // Dibalik layar 
    this.nama = nama;
    this.energi = energi;
    // return this; // Dibalik layar
}

Mahasiswa.prototype.makan = function(porsi){
    this.energi += porsi*5;
    return `Energi bertambah ${porsi*5}`;
}

Mahasiswa.prototype.main = function(jam){
    this.energi -= jam*3;
    return `Energi berkurang ${jam*3}`;
}

let adimas = new Mahasiswa("Adimas", 20);
console.log(adimas.main(3));
console.log(adimas);


// Class

// Bentuk manusiawi dari function constructor dan lebih efisien
class Mahasiswa1{
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
        return `Energi bertambah ${porsi*5}`;
    }

    main(jam){
        return `Energi berkurang ${jam*3}`;
    }
}

let rendy = new Mahasiswa1("Rendy", 20);
console.log(rendy.makan(2));
console.log(rendy); // lebih hemat karna function makan,main tidak dibawa ke variable rendy





// === EXECUTION CONTEXT, HOISTING, DAN SCOPE ===



// Execution context adalah proses dimana javascript akan melakukan eksekusi code dari baris pertama ke terakhir secara berurutan

// Hoisting adalah mengangkat function ataupun method bawaan javascript ke paling atas baris code untuk di eksekusi terlebih dahulu

// Scope adalah suatu lingkungan dimana sebuah variable/function dapat diakses.





// === CLOSURE ===



// Closure adalah sebuah function yang dijalankan setelah function lain selesai dijalankan

// Closure digunakan untuk >>>
// Encapsulation : Penyembunyian variable ke lingkup lexical scope agar tidak dapat diubah dan bersifat tetap
function createCounter(){
    let count = 0; // variable yang di tetapkan untuk konstan dan tidak berubah
    return function(){
        count++;
        return count;
    }
}

let counterKlikKiri = createCounter();
console.log(counterKlikKiri());
console.log(counterKlikKiri());

let counterKlikKanan = createCounter();
console.log(counterKlikKanan());

// Private Variable : Membuat sebuah variable yang hanya bisa diakses melalui function tersebut (berhubungan erat dengan authentikasi dan OOP)
function person(nama){
    let _nama = nama;
    return {
        getName : function(){
            return _nama;
        },
        setName : function(newName){
            _nama = newName;
        }
    }
}

let myPrivateName = person("Dimas");
console.log(myPrivateName);
console.log(myPrivateName.getName());
console.log(myPrivateName._nama);
myPrivateName.setName("Dimas Rendy Sugara");
console.log(myPrivateName.getName());

// Creating Factory Functions : Membuat sebuah fungsi yang memiliki karakteristik sama tetapi berbeda parameter 
// Currying : selain itu untuk Membuat banyak parameter menjadi 1 parameter saja di tiap function
function createMultipler(multiplier){
    return function(value){
        return value * multiplier;
    };
}

const double = createMultipler(2);
const triple = createMultipler(3);
console.log(double(5));
console.log(triple(10));





// === ARROW FUNCTION ===



// Arrow Function merupakan penyederhanaan dari function expression(asal mula)

// Arrow func Scope : Karena tidak memiliki konsep this. maka arrow function akan mengambil nilai berdasarkan lexical scope hingga nilai terluar

// Dapat digunakan dalam callback function array seperti map/reduce/some/forEach/find/findIndex

// Konsep this pada arrow func : selain tidak ada konsep this, ini membuat arrow func dapat mengabaikan hoisting yang disebabkan function/method dimana ketika hoisting this akan bernilai windows yang mengakibatkan nilai didalam function menjadi undefined





// === HIGH ORDER FUNCTION ===


// High Order Function : Sebuah function yang menggunakan parameter berupa function

// Contoh :
function getLength(nama){
    return nama.split(" ").join().length;
}

function myNameLength(nama, callback){
    return `nama : ${nama}, panjang nama : ${callback(nama)}`;
}

const myName2 = myNameLength("Dimas Rendy Sugara", getLength);
console.log(myName2);

// Callback : sebuah function yang dijadikan parameter di sebuah function lain





// === TEMPLATE LITERALS ===



// Multi Line Strings

// HTML Fragment

// Pengkondisian
const nama1 = "Dimas";
const cekNama = `Nama saya ${nama1 || 'Tidak Tersedia' }`;
console.log(cekNama);

// Tagged Template : Membuat sebuah fungsi yang menampung string dan value




// === TAGGED TEMPLATE ===



// Tagged Template : Membuat sebuah fungsi yang menampung string dan value
function setPanah(string, ...value){
    let result = '';
    string.forEach((e, i) => {
        e && (result += e + '`' + value[i] + '`');
    })
    console.log(result);
    return result;
}

const nama2 = 'Dimas Rendy Sugara';
const umur2 = 23;
const myName3 = setPanah`Nama saya : ${nama2}, Umur saya : ${umur2}`
console.log(myName3);

// Fungsi :
// Tranlate
// Menambahkan efek html misalnya? <b> dll
// Sanitizer HTML input, mengubah input yang dapat mempengaruhi tampilan html





// === DESTRUCTURING ASSIGNMENT DAN FUNCTION ===


// Mendeklarasikan variable yang datanya diambil dari suatu variable lain :
// Array 
const myName4 = ["Dimas Rendy Sugara", 23];
const [nama4, umur4] = myName4; // nama variable harus berurutan sesuai indeks
console.log(nama4, umur4);

// Object 
const myName5 = {
    nama5 : "Dimas Rendy Sugara",
    umur5 : 23
}
const {nama5, umur5} = myName5; // nama variable harus sama dengan properti/key
console.log(umur5)



// Mendeklarasikan varible secara langsung :
// Array 
const [nama6, umur6] = ["Dimas Rendy Sugara", 23];
console.log(nama6);

// Object
const {nama7, umur7} = {
    nama7 : "Dimas Rendy Sugara",
    umur7 : 23
}
console.log(nama7);



// Memanfaatkan Spread Operator
// Array
const myArr = ["Buah", "Apel", "Mangga", "Anggur"];
const [kategori, ...nilai] = myArr;
console.log(kategori)
console.log(nilai);

// Object
const myObj = {
    nama8 : "Dimas Rendy Sugara",
    umur8 : 23,
    skill8 : ["web", "mobile"]
}

const {nama8, ...about8} = myObj;
console.log(nama8);
console.log(about8);


// Menetapkan Default
// Array
const myArr1 = [ "Dimas Rendy Sugara", 23];
const [nama9, umur9, skill9 = "Tidak ada"] = myArr1;
console.log(nama9);
console.log(skill9);

// Object
const myObj1 = {
    nama10 : "Dimas Rendy Sugara",
    umur10 : 23
}
const {nama10, umur10, skill10 = "Tidak Ada"} = myObj1;
console.log(nama10);
console.log(skill10);


// Merubah nama variable Object
const myObj2 = { 
    nama : "Dimas Rendy Sugar", // nama & umur sudah ada deklarasi sebelumnya
    umur : 23
}

const {nama : nama11, umur : umur11} = myObj2;


// Perbedaan Array dan Object : 1. Tanda array [ ] dan tanda object { }, 2. Posisi Variable array harus sesuai indeks, sedangkan Object bisa lebih bebas namun nama variable harus sama


// Penggunaan sebagai Parameter Function
// Array
const myArr2 = ["Dimas Rendy Sugara", 23];

function sayHello([nama, umur]){ // destructuring array
    return `Halo ${nama}, Tahun ini kamu berusia ${umur}`;
}

console.log(sayHello(myArr2)); // Mengirim Array

// Object
const myObj3 = {
    nama : "Dimas Rendy Sugara",
    umur : 23
}


// Penggunaan sebagai Parameter Nested Function
// Array
const myNestedArr = ["Dimas Rendy Sugara", 23, ["web", "mobile"]];
function sayHelloNested([nama, umur, [skill1, skill2]]){
    return `Hello ${nama}, Tahun ini kamu berusia ${umur} dan sudah menguasai ${skill1 + " dan " + skill2}`;
}

console.log(sayHelloNested(myNestedArr));

// Object
const myNestedObj = {
    nama : "Dimas Rendy Sugara",
    umur : 23,
    skill : {
        skill1 : "web",
        skill2 : "mobile"
    }
}

function sayHelloNestedObj({nama : nama12, umur : umur12, skill : {skill1, skill2}}){
    return `Hello ${nama12}, Tahun ini kamu berusia ${umur12} dan sudah menguasai ${skill1 + " dan " + skill2}`;
}

console.log(sayHelloNestedObj(myNestedObj));





// === ASYNCHRONOUS ===



// Single threaded : Menjalankan 1 task 1 waktu
// Non blocking : Dapat menjalankan task lain walau task sebelumnya belum selesai
// asynchronous : gabungan dari task dimana task selanjutnya dijalankan tanpa harus menunggu task sebelumnya selesai
// Concurrency : Gabunggan dari Single Threaded dan asynchronous




// === PROMISE ===
const getMyName = new Promise(function(resolve, reject) {
    const kondisi1 = false;
    if(kondisi1){
        setTimeout(() => {
            resolve("Operasi selesai setelah 2 detik");
        }, 2000);
    } else {
        reject("Berarti False")
    }
});

getMyName.then(function(result) {
    console.log(result); // "Operasi selesai setelah 2 detik"
}).catch(function(error) {
    console.log(error);
});

// === FETCH ===






// === ASYNC AWAIT ===






// === ERROR HANDLING ===