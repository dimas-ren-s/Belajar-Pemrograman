// ##############################################
// 
// ================== Variable ==================
// 
//  2 Soal : berupa ditandai ???
// 
// ##############################################



// Let : Variable yang dapat diubah, tidak perlu di inisialisasi nilai dan tipe data diawal
??? myLet;
myLet = 10;
console.log(myLet);

myLet = "bisa diubah nilai dan tipe data";
console.log(myLet);

// Const : Variable yang tidak dapat diubah, harus menginisialisasi nilai dan tipe data diawal
// const myConst; --> Error : 'const' declarations must be initialized.
const myConst = 10;
console.log(myConst); // 10

// nilai dari Const dapat diubah namun tipe data tidak dapat diubah
// myConst = "tidak bisa diubah"; --> Error : Assignment to constant variable.
const myConstArr = [1, 2, 3];
myConstArr.push(10);
console.log(myConstArr); // ???



// ###############################################
//
// ================== TIPE DATA ==================
// 
// 3 Soal
// 
// ###############################################



// String : berupa teks
const myString = "Hello World!";
console.log(typeof(myString)); // String

// ??? : berupa angka
const myInt = 10;
console.log(typeof(myInt)); // Number

// Big Integer : angka yang melebihi limit dari number
const myBigInt = 10n;
console.log(typeof(myBigInt)); // ???

// Boolean : berupa true/false
const myBoolean = true;
console.log(typeof(myBoolean)); // boolean

// Array : urutan variable yang dikelompokkan berdasarkan indeks
const myArr = [1, 2, 3];
console.log(Array.isArray(myArr)); // true

// Object : urutan variable yang dikelompokkan berdasarkan properti
const myObj = {
    nama : "dimas",
    umur : "23"
}
console.log(typeof(myObj)); // object

// Undefined : tidak memiliki nilai
let myUndefined;
console.log(typeof(myUndefined)); // undefined

// Null : tidak memiliki nilai yang disengaja dibuat/dinisialisasi diawal
const myNull = null;

// NaN (Not a ???) : Sebuah error yang ditampilkan ketika mencoba melakukan aksi aritmatika pada tipe data buka number/bigInt



// ################################################
//
// ================== ARITMATIKA ==================
// 
// 3 Soal
// 
// ################################################



// Tambah
const myTambah = 3 + 2;
console.log(myTambah); // 5

// Kurang
const myKurang = 3 - 2;
console.log(myKurang); // 1

// Bagi
const myBagi = 3 ??? 2;
console.log(myBagi); // 1.5

// Kali
const myKali = 3 * 2;
console.log(myKali); // 6

// Modulus(sisa bagi)
const myModulus = 3 % 2;
console.log(myModulus); // 1

// Pangkat
const myPangkat = 3 ??? 2;
console.log(myPangkat); // 9

// Increment(variable Let)
let myIncrement = 10;
myIncrement++;
console.log(myIncrement); // 11

// Decrement(variable Let)
let myDecrement = 10;
myDecrement???;
console.log(myDecrement); // 9



// ###################################################
//
// ================== PENGKONDISIAN ==================
// 
// 4 Soal
// 
// ###################################################



// If else 
const myIf = false;
if(!myIf){ // Semua yang bernilai true, tanda ! akan membalikkan nilai true false
    console.log("Jika true masuk ini");
} else ??? (myIf) {
    console.log("Jika True");
} else {
    console.log("Jika Tidak masuk pengkodisian diatas");
}

// Ternary
const myTernary = false;
myTernary ? console.log('Bernilai true') ??? console.log('Bernilai False');

// Switch
const mySwitch = "Web";
switch(???){
    case "Web" : // note ga perlu tanda kurung mas bro
        console.log("Seorang Web Dev");
        break;
    case "Mobile" : // nah ini yang bener
        console.log("Seorang Mobile Dev");
        break;
    ??? :
        console.log("Ini Default");
}



// ###################################################
//
// ================== PENGKONDISIAN ==================
// 
// 4 Soal
// 
// ###################################################



// For
const varFor = [1, 2, 3, 4, 5];
for(let i = 0; i < varFor.length; ???){
    console.log(`Angka ${varFor[i]}`);
}

// While
const varWhile = [1, 2, 3, 4, 5];
let i = 0;
while(i < varWhile.length){
    console.log(`Angka ${varWhile[???]}`);
    i++;
}

// Do While
const varDoWhile = [1, 2, 3, 4, 5];
i = 0;
??? {
    console.log(`Angka ${varDoWhile[i]}`);
    i++;
}
???(i < varDoWhile.length);



// ###########################################
//
// ================== Array ==================
// 
// 35 Soal
// 
// ###########################################



// 1. length : Menghitung total indeks
const arrLength = [1, 2, 3];
console.log(arrLength.length); // 3

// 2. join("pemisah") : Menggabungkan sebuah array menjadi string !!! return nilai + variable baru !!!
const arrJoin = [1, 2, 3];
console.log(arrJoin.join(" lalu ")); // 1 lalu  2 lalu 3

// 3. ???(...array) : Menggabungkan array !!! return nilai + variable baru !!!
const arrCon = [1, 2, 3];
const arrCat = [1, 2, 3];
const arrCon1 = [1, 2, 3]
console.log(arrCon.concat(arrCat, arrCon1)); // [1, 2, 3, 1, 2, 3, 1, 2, 3]

// 4. push(...value) : Memasukkan value ke array di indeks terakhir
const arrPush = [1, 2, 3];
arrPush.push(5);
console.log(arrPush); // [1, 2, 3, 5]

// 5. pop() : Menghapus value di indeks terakhir array
const arrPop = [1, 2, 3, 5];
const arrPopMasuk = arrPop.pop(); // indeks terakhir disimpan ke variable baru, dan dihapus dari array lama
console.log(arrPop); // [1, 2, 3]
console.log(arrPopMasuk); // ???

// 6. ???(...value) : Menambahkan data di indeks pertama array dan menggeser indeks yang sudah ada sebelumnya
const arr??? = [1, 2, 3];
arr???.???(9, 8);
console.log(arr???); // [9, 8, 1, 2, 3];

// 7. shift() : Menghapus value indeks pertama dari array
const arrShift = [1, 2, 3];
const arrShiftMasuk = arrShift.shift();
console.log(arrShift); // [2, 3]
console.log(arrShiftMasuk); // 1

// 8. sort(callback) : Menyusun array menjadi kecil ke besar / sebaliknya
const arrSort = [1, 2, 10, 3, 5, 6, 7, 8, 4];
console.log(arrSort.sort(???)); // callback membuat sort ascending

// 9. reverse() : Membalikkan posisi indeks array
const arrReverse = [1, 2, 3];
console.log(arrReverse.reverse()); // ???

// 10. splice(start, deleteCount, ...value) : Menambah Value(bisa lebih dari satu) pada indeks start dan menghapus mulai dari indeks start sebanyak deleteCount data
const arrSplice = [1, 2, 3];
const arrSpliceMasuk = arrSplice.splice(1, 1, 5); // menyimpan value di indeks 1 sebanyak 1
console.log(arrSplice); // ???

// 11. slice(start, end-1) : Mengambil nilai dari sebuah array di range  tertentu !!! return nilai + variable baru !!!
const arrSlice = [1, 2, 3];
console.log(arrSlice.slice(1, 3));
console.log(arrSlice); // ???

// 12. split("pemisah") : Menghapus nilai dari sebuah string sebagai batas/karakteristik tertentu !!! return nilai + variable baru yang tipe datanya array!!!
const arrSplit = `1,2,3`;
const arrSplit1 = arrSplit.split(",");
console.log(arrSplit1); // ???

// 13. find(callback) : Mencari sebuah --VALUE-- di dalam array yang cocok dengan kondisi pengkondisian dari callback !!! return nilai + variable baru !!!
const arrFind = [4, 2, 6, 3];
console.log(arrFind.find(e => e % 2)); // ???

// 14. findIndex(callback) : Mencari sebuah --INDEKS-- di dalam array yang cocok dengan kondisi pengkondisian dari callback !!! return nilai + variable baru !!!
const arrFindIndex = [1, 2, 3, 4];
console.log(arrFindIndex.findIndex(e => e % 2 == 0)); // ???

// 15. includes(...value) : Mencari satu/lebih value, jika ada maka true !!! return nilai + variable baru !!!
const arrIncludes = [1, 2, 3];
console.log(arrIncludes.includes(2, 3)); // ???

// 16. s???(callback) : mencari setidaknya satu data yang sesuai dengan kondisi callback !!! return nilai + variable baru !!!
const arrS??? = [1, 2, 3];
console.log(arrS???.s???(e => e % 2 == 1)); // true

// 17. forEach(callback) : Melakukan sesuatu callback ke setiap elemen array yang di iterasi
const arrForEach = [1, 2, 3];
arrForEach.forEach(e => console.log(`Angka ${e}`)); // ???

// 18. m???(callback) : Melakukan sesuatu callback kepada setiap elemen array yang di iterasi !!! return nilai + variable baru !!!
const arrM??? = [1, 2, 3];
const arrM???1 = arrM???.m???(e => e ** 2);
console.log(arrM???1); // [1, 4, 9]

// 19. r???(callback) : Melakukan setiap aksi dengan prev menampung total nilai sebelumnya dan curr menampung nilai selanjutnya !!! return nilai + variable baru !!!
const arrR??? = [1, 2, 3];
console.log(arrR???.r???((prev, curr) => prev + curr)); // 6

// 20. Array.isArray : Melakukan Pengecekan ke suatu variable apakah ia berupa array !!! return nilai + variable baru !!!
const arrIsArray = [1, 2, 3];
console.log(Array.isArray(arrIsArray)); // ???

// 21. ??? : Melakukan perubahan dari Array menjadi Object dimana indeks berubah menjadi key/properti object
const arr??? = ["1", "2", "3"];
console.log(???(arr???)); // { 1 : "1", 2 : "2", 3 : "3" }



// ############################################
//
// ================== Object ==================
// 
// 11 Soal
// 
// ############################################



// Cara membuat sebuah object :
// Variable langsung
const myObject = {
    nama ??? "Dimas",
    umur ??? 23,
    sayHello ??? () => {
        return `Hello ${nama}`;
    }
}

console.log(myObject.nama); // "Dimas"
console.log(myObject.umur); // 23
console.log(myObject???); // "Hello Dimas"

// Function Declaration tidak menggunakan this
function myObjectFunc(nama, umur){
    let mhs = ???
    mhs.nama = nama;
    mhs.umur = umur;
    mhs.sayHello = () => {
        return `Hello ${nama}`; // this tidak ada di dalam konsep arrow func
    }

    return ???;
}

let dimas = myObjectFunc("Dimas", 23);
console.log(dimas.nama); // "Dimas"
console.log(dimas.sayHello()); // "Hello Dimas"

// Function Expression
const myObjectExpression = ??? => {
    let mhs = {}
    mhs.nama = nama;
    mhs.umur = umur;
    mhs.sayHello = () => `Hello ${nama}`;

    return mhs;
}

let dimas1 = myObjectExpression("Dimas", 23);
console.log(dimas1.sayHello()); // "Hello Dimas"

// Function Constructor
function MyObjectCons(nama, umur){
    this.nama = nama;
    this.umur = umur;
    this.sayHello = () => `Hello ${nama}`;
}

let dimas2 = ???("Dimas", 23);
console.log(dimas2.sayHello()); // "Hello Dimas"

// Class
class MyObjectClass???
    ???(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }

    sayHello(){
        return `Hello ${nama}`
    }
???

let dimas3 = new MyObjectClass("Dimas", 23);
console.log(dimas3.sayHello()); // "Hello Dimas"


// Object.entries : membuat sebuah array dari properti dan value object
const myObjEntries = {
    nama : "dimas",
    skill : "PHP, JS"
}

const myBro = Object.entries(myObjEntries);
console.log(myBro); // [[nama, "Dimas"], [skill, "PJP, JS"]]



// #####################################################
//
// ================== FOR OF & FOR IN ==================
// 
// 2 Soal
// 
// #####################################################



// for of : melakukan iterasi segala sesuatu yang iterable selain object
const arrForOf = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(e of arrForOf){
    console.log(`value ${e}`); // ???
}

// for in : melakukan iterasi untuk object
const arrForIn = {
    id : 1,
    nama : "Dimas",
    umur : 23,
    feature : {
        system : ["Setting", "Profile"],
        penunjang : ["Ranking", "Title"]
    }
};

for(e in arrForIn){
    console.log(`Properti : ${e}`); // e mengambil properti dari object
    console.log(`Cara melihat value : ${arrForIn[e]}`); // ???
}



// #####################################################
//
// ================== SPREAD OPERATOR ==================
// 
// 5 Soal
// 
// #####################################################



// Penggunaan/Fungsi : 
// [ ...String ] : Merubah String menjadi Array per karakter
const myStr = "Dimas";
console.log([...myStr]); // ???

// Mengcopy Array tanpa harus merubah array awal
const myArrFirstName = ["Dimas", "Rendy"];
const myArrFullName = [...myArrFirstName]; 
myArrFullName.push("Sugara"); // Menambahkan data tanpa mempengaruhi array asli
console.log(myArrFirstName); // ???
console.log(myArrFullName); // ???

// Menggabungkan Array lebih fleksible dari concat yang cuman 2 array saja, dapat menambahkan tipe data lain di antaranya
const myArrFirstName2 = ["Dimas", "Rendy"];
const myArrLastName = ["Rendy", "Sugara"];
const myArrFullName2 = [...myArrFirstName2, 12345, ...myArrLastName];
console.log(myArrFullName2) // ???

// Kombinasi isi object dengan properti yang sama
const myFirstName = {first : "Dimas", second : "Tampan"};
const myLastName = {second : "Rendy", third : "Sugara"};
const myFullname = {...myFirstName, ...myLastName}; // merubah data pada key/properti second mengikuti kombinasi object ke 2
console.log(myFullname); // ???

// Merubah nodelist/arguments menjadi array, mirip fungsi pertama



// ####################################################
//
// ================== REST PARAMETER ==================
// 
// 6 Soal
// 
// ####################################################



// Adalah spread operator yang digunakan pada parameter

// Penggunaan/Fungsi :

// Menggabungkan banyak parameter menjadi 1 array
function getMyTimeWaste(name, ???){
    console.log(???);
    console.log(Array.isArray(???));
    const wasteTime = ???.reduce((prev, curr) => {
        return prev + curr
    });
    return `Waktu yang dihabiskan oleh ${name} adalah ${wasteTime} jam selama ${???.length} hari`;
}

let myRestParam = getMyTimeWaste("Dimas", 3, 2, 1, 6, 6, 1, 4);
console.log(myRestParam); // `Waktu yang dihabiskan oleh Dimas adalah 23 jam selama 7 hari`;

// Ketika mereturn nilai dapat digunakan sebagai penggabung 2 buah value
function getMyProfile(name, age){
    return ???; // menggabungkan 2 buah array/object + tipe data lainnya
}

const myName = {
    firstName : "Dimas"
};

const myProfile = getMyProfile(myName, 23);
console.log(myProfile); // { firstName : "Dimas", age : 23 }



// ##############################################################
//
// ================== KONSEP JAVASCRIPT MODERN ==================
// 
// 9 Soal
// 
// ##############################################################



// [a, b] = [b, a] : memutarbalikkan Value(khusus let)
let varSatu = [1, 2, 3];
let varDua = `Dimas`;
[varSatu, varDua] = [varDua, varSatu];
console.log(varSatu); // ???

// nama : nama, bisa dibuat nama saja
const nama = "Dimas";
const umur = 23;
const getProfile = {
    nama, // bisa dibuat nama saja
    umur : umur // aslinya begini
}
console.log(getProfile); // ???

// Kondisi ??? ditampilkan : Penyederhanaan dari if(kondisi){ return ditampilkan }
const kondisi = true;
kondisi ??? console.log(`Kondisi True`); // "Kondisi True"

// trueable ??? default jika false : Penyederhanaan dari ternary jika kondisi cekKondisi ? cekKondisi : 'Kondisi False';
const cekKondisi = `Nilainya trueable Tidak Kosong/Undefined/Null`;
console.log(cekKondisi ??? `Kondisi False`); // ???
// Tanda ?? juga dapat digunakan, sebagai penggantinya
console.log(cekKondisi ?? `Kondisi False`); // "Nilainya trueable Tidak Kosong/Undefined/Null"

// Method ??? : menggabungkan berbagai macam fungsi pada satu baris code yang dijalankan beraturan
const stringNama = `Dimas Rendy Sugara`;
const totalHurufNama = stringNama.split(" ").join("").length; // string di split untuk menghilangkan spasi, lalu digabungkan lagi, lalu tinggal dihitung panjang 
console.log(totalHurufNama); // ???



// ###################################################
//
// ================== OBJECT.CREATE ==================
// 
// 5 Soal
// 
// ###################################################



// Digunakan pada --- function declaration --- untuk pembuatan object
// Digunakan untuk memanggil method lain sebagai function bawaan
const methodMahasiswa = {
    makan ??? function(porsi){
        this.energi += porsi*5;
        return `Energi bertambah ${porsi*5}`;
    },
    main ??? function(jam){
        this.energi -= jam*3;
        return `this.Energi berkurang ${jam*3}`;
    }
}

function mahasiswa(nama, energi){
    let mahasiswa = Object.create(???);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    return mahasiswa;
}

let dimas3 = mahasiswa("Dimas", 20);
console.log(dimas3.main(1)); // ???
console.log(dimas3); // ???



// ###############################################
//
// ================== PROTOTYPE ==================
// 
// 6 Soal
// 
// ###############################################



// prototype digunakan pada function constructor
// Prototype adalah sebuah object yang mewarisi sifat, prototype juga memiliki function bawaan.
function Mahasiswa(nama, energi){
    // let this = Object.create(???) // Dibalik layar 
    this.nama = nama;
    this.energi = energi;
    // return ???; // Dibalik layar
}

???.makan = function(porsi){
    this.energi += porsi*5;
    return `Energi bertambah ${porsi*5}`;
}

???.main = function(jam){
    this.energi -= jam*3;
    return `Energi berkurang ${jam*3}`;
}

let adimas = new Mahasiswa("Adimas", 20);
console.log(adimas.main(3)); // ???
console.log(adimas); // ???



// ###########################################
//
// ================== CLASS ==================
// 
// 7 Soal
// 
// ###########################################



// Bentuk manusiawi dari function constructor dan lebih efisien
???{
    ???(???){
        this.nama = nama;
        this.energi = energi;
    }

    ???(porsi){
        return `Energi bertambah ${porsi*5}`;
    }

    main(???){
        return `Energi berkurang ${jam*3}`;
    }
}

let rendy = new Mahasiswa1("Rendy", 20);
console.log(rendy.makan(2)); // ???
console.log(rendy); // ???



// ############################################################################
//
// ================== EXECUTION CONTEXT, HOISTING, DAN SCOPE ==================
// 
// 3 Soal
// 
// ############################################################################



// ??? adalah suatu lingkungan dimana sebuah variable/function dapat diakses.

// ??? adalah proses dimana javascript akan melakukan eksekusi code dari baris pertama ke terakhir secara berurutan

// ??? adalah mengangkat function ataupun method bawaan javascript ke paling atas baris code untuk di eksekusi terlebih dahulu



// #############################################
//
// ================== CLOSURE ==================
// 
// 10 Soal
// 
// #############################################



// Closure adalah sebuah function yang dijalankan setelah function lain selesai dijalankan

// Fungsi Closure :::
// Encapsulation : Penyembunyian variable ke lingkup lexical scope agar tidak dapat diubah dan bersifat tetap
function createCounter(){
    let count = 0; // variable yang di tetapkan untuk konstan dan tidak berubah
    ???{
        count++;
        return count;
    }
}

let counterKlikKiri = createCounter();
console.log(counterKlikKiri()); // ???
console.log(counterKlikKiri()); // ???

let counterKlikKanan = createCounter();
console.log(counterKlikKanan()); // ???

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
console.log(myPrivateName); // ???
console.log(myPrivateName.getName()); // ???
console.log(myPrivateName._nama); // ???
myPrivateName.setName("Dimas Rendy Sugara");
console.log(myPrivateName.getName()); // ???

// Creating Factory Functions : Membuat sebuah fungsi yang memiliki karakteristik sama tetapi berbeda parameter 
// Currying : selain itu untuk Membuat banyak parameter menjadi 1 parameter saja di tiap function
function createMultipler(multiplier){
    return function(value){
        return value * multiplier;
    };
}

const double = createMultipler(2);
const triple = createMultipler(3);
console.log(double(5)); // ???
console.log(triple(10)); // ???



// ####################################################
//
// ================== ARROW FUNCTION ==================
// 
// 0 Soal
// 
// ####################################################



// Adalah penyederhanaan dari function expression(asal mula)

// Arrow func Scope : Karena tidak memiliki konsep this. maka arrow function akan mengambil nilai berdasarkan lexical scope hingga nilai terluar

// Dapat digunakan dalam callback function array seperti map/reduce/some/forEach/find/findIndex

// Konsep this pada arrow func : selain tidak ada konsep this, ini membuat arrow func dapat mengabaikan hoisting yang disebabkan function/method dimana ketika hoisting this akan bernilai windows yang mengakibatkan nilai didalam function menjadi undefined



// #########################################################
//
// ================== HIGH ORDER FUNCTION ==================
// 
// 2 Soal
// 
// #########################################################



// High Order Function : Sebuah function yang menggunakan ??? berupa function

// Contoh :
function getLength(nama){
    return nama.split(" ").join().length;
}

function myNameLength(nama, callback){
    return `nama : ${nama}, panjang nama : ${callback(nama)}`;
}

const myName2 = myNameLength("Dimas Rendy Sugara", getLength);
console.log(myName2); // ???

// Callback : sebuah function yang dijadikan parameter di sebuah function lain



// #######################################################
//
// ================== TEMPLATE LITERALS ==================
// 
// 4 Soal
// 
// #######################################################



// 1. ??? 

// 2. ???

// 3. Pengkondisian
const nama1 = "Dimas";
const cekNama = `Nama saya ${nama1 ?? 'Tidak Tersedia' }`;
console.log(cekNama); // ???

// 4. ??? : Membuat sebuah fungsi yang menampung string dan value



// #####################################################
//
// ================== TAGGED TEMPLATE ==================
// 
// 2 Soal
// 
// #####################################################



// Tagged Template : Membuat sebuah fungsi yang menampung string dan value
function setPanah(???){
    let result = '';
    string.forEach((e, i) => {
        e && (result += e + '`' + value[i] + '`');
    })
    return result;
}

const nama2 = 'Dimas Rendy Sugara';
const umur2 = 23;
const myName3 = setPanah`Nama saya : ${nama2}, Umur saya : ${umur2}`
console.log(myName3); // ???

// Fungsi :
// Tranlate
// Menambahkan efek html misalnya? <b> dll
// Sanitizer HTML input, mengubah input yang dapat mempengaruhi tampilan html (security hmtl manipulation)



// ###########################################################################
//
// ================== DESTRUCTURING ASSIGNMENT DAN FUNCTION ==================
// 
// 18 Soal
// 
// ###########################################################################



// Perbedaan Array dan Object : 
// 1. Tanda array [ ] dan tanda object { }
// 2. Posisi Variable array harus sesuai indeks, sedangkan Object bisa lebih bebas namun nama variable harus sama

// Mendeklarasikan variable yang datanya diambil dari suatu variable lain :
// Array 
const myName4 = ["Dimas Rendy Sugara", 23];
const [nama4, umur4] = ???; // nama variable harus berurutan sesuai indeks
console.log(nama4, umur4); // ["Dimas Rendy Sugara", 23]

// Object 
const myName5 = {
    nama5 : "Dimas Rendy Sugara",
    umur5 : 23
}
const {???, umur5} = ???; // nama variable harus sama dengan properti/key
console.log(umur5); // 23

// Mendeklarasikan varible secara langsung :
// Array 
const [nama6, umur6] = ["Dimas Rendy Sugara", 23];
console.log(nama6); // "Dimas Rendy Sugara"

// Object
const {???, umur7} = {
    nama7 : "Dimas Rendy Sugara",
    umur7 : 23
}
console.log(nama7); // "Dimas Rendy Sugara"

// Memanfaatkan Spread Operator
// Array
const myArr = ["Buah", "Apel", "Mangga", "Anggur"];
const [kategori, ???] = myArr;
console.log(kategori); // ???
console.log(nilai); // ???

// Object
const myObj = {
    nama8 : "Dimas Rendy Sugara",
    umur8 : 23,
    skill8 : ["web", "mobile"]
}

const {nama8, ...about8} = myObj;
console.log(nama8); // "Dimas Rendy Sugara"
console.log(about8); // ???

// Menetapkan Default
// Array
const myArr1 = [ "Dimas Rendy Sugara", 23];
const [nama9, umur9, skill9 ??? "Tidak ada"] = myArr1;
console.log(nama9); // "Dimas Rendy Sugara"
console.log(skill9); // ???

// Object
const myObj1 = {
    nama10 : "Dimas Rendy Sugara",
    umur10 : 23
}
const {nama10, umur10, skill10 ??? "Tidak Ada"} = myObj1;
console.log(nama10); // "Dimas Rendy Sugara"
console.log(skill10); // ???


// Merubah nama variable Object
const myObj2 = { 
    nama : "Dimas Rendy Sugar", // nama & umur sudah ada deklarasi sebelumnya
    umur : 23
}

const {nama ??? nama11, umur ??? umur11} = myObj2;

// Penggunaan sebagai Parameter Function
// Array
const myArr2 = ["Dimas Rendy Sugara", 23];

function sayHello(???){ // destructuring array
    return `Halo ${nama}, Tahun ini kamu berusia ${umur}`;
}

console.log(sayHello(myArr2)); // "Halo Dimas Rendy Sugara, Tahun ini kamu berusia 23 Tahun"

// Object
const myObj3 = {
    nama : "Dimas Rendy Sugara",
    umur : 23
}

function sayHelloObj(???){
    return `Halo ${nama}, Tahun ini kamu berusia ${umur}`;
}

console.log(sayHelloObj(myObj3)); // "Halo Dimas Rendy Sugara, Tahun ini kamu berusia 23 Tahun"

// Penggunaan sebagai Parameter Nested Function
// Array
const myNestedArr = ["Dimas Rendy Sugara", 23, ["web", "mobile"]];
function sayHelloNested(???){
    return `Hello ${nama}, Tahun ini kamu berusia ${umur} dan sudah menguasai ${skill1 + " dan " + skill2}`;
}

console.log(sayHelloNested(myNestedArr)); // "Hello Dimas Rendy Sugara, Tahun ini kamu berusia 23 dan sudah menguasai web dan mobile"

// Object
const myNestedObj = {
    nama : "Dimas Rendy Sugara",
    umur : 23,
    skill : {
        skill1 : "web",
        skill2 : "mobile"
    }
}

function sayHelloNestedObj(???){
    return `Hello ${nama12}, Tahun ini kamu berusia ${umur12} dan sudah menguasai ${skill1 + " dan " + skill2}`;
}

console.log(sayHelloNestedObj(myNestedObj)); // "Hello Dimas Rendy Sugara, Tahun ini kamu berusia 23 dan sudah menguasai web dan mobile"



// ##################################################
//
// ================== ASYNCHRONOUS ==================
// 
// 0 Soal
// 
// ##################################################



// Single threaded : Menjalankan 1 task 1 waktu
// Non blocking : Dapat menjalankan task lain walau task sebelumnya belum selesai
// asynchronous : gabungan dari task dimana task selanjutnya dijalankan tanpa harus menunggu task sebelumnya selesai
// Concurrency : Gabunggan dari Single Threaded dan asynchronous



// #############################################
//
// ================== PROMISE ==================
// 
// 6 Soal
// 
// #############################################



const getMyName = ???(function(???) {
    const kondisi1 = false;
    if(kondisi1){
        setTimeout(() => {
            resolve("Operasi selesai setelah 2 detik");
        }, 2000);
    } else {
        reject("Berarti False");
    }
});

getMyName.???(function(result) {
    console.log(result); // ??? yang tampil yang mana
}).???(function(error) {
    console.log(error); // ??? tuliskan juga pesannya
});



// #############################################
//
// ================== FETCH ==================
// 
// 4 Soal
// 
// #############################################



fetch('https://fakestoreapi.com/products')
    .???((res) => ???)
    .???((data) => console.log('data', data))
    .???((err) => console.log(err));



// #############################################
//
// ================== ASYNC AWAIT ==================
// 
// 3 Soal
// 
// #############################################



const getFakeAPI = ??? function(){
    const response = ??? fetch('https://fakestoreapi.com/products');
    const data = ???;
    return data;
}



// ####################################################
//
// ================== ERROR HANDLING ==================
// 
// 3 Soal
// 
// ####################################################



// Promise :
// resolve dan Reject -> Mengirim Pesan
// then dan catch -> Menangkap Pesan

// Fetch : 
// then, then dan catch -> Menangkap Pesan dari API

// Async Await :
// throw new Error -> Mengirim Pesan Error
// Try dan Catch -> Menangkap Pesan

// Contoh try and catch
??? function getFakeApi3(){
    try{
        const response = ??? fetch("https://fakestoreapi.com/products");
        console.log(response);
        if(!response.ok){
            ???('Gagal Terkoneksi');
        }
        const data = ???;
        console.log(data); // Hasil API
    } catch(error){
        console.log(error);
    }
}

getFakeApi3();




// ================== FINISHED ==================