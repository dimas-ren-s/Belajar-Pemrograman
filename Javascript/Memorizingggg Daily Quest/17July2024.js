// === Array ===



// 1. length
const arrLength = [1, 2, 3];
console.log(arrLength.length);

// 2. join
const arrJoin = [1, 2, 3];
console.log(arrJoin.join(" lalu "));

// 3. concat
const arrCon = [1, 2, 3];
const arrCat = [1, 2, 3];
console.log(arrCon.concat(arrCat));

// 4. push
const arrPush = [1, 2, 3];
arrPush.push(5);
console.log(arrPush);

// 5. pop
const arrPop = [1, 2, 3, 5];
const arrPopMasuk = arrPop.pop(); // indeks terakhir disimpan ke variable baru, dan dihapus dari array lama
console.log(arrPop)

// 6. unshift
const arrUnshift = [1, 2, 3];
arrUnshift.unshift(9, 8);
console.log(arrUnshift);

// 7. shift
const arrShift = [1, 2, 3];
const arrShiftMasuk = arrShift.shift();
console.log(arrShift);

// 8. sort
const arrSort = [1, 2, 10, 3, 5, 6, 7, 8, 4];
console.log(arrSort.sort((a,b) => a - b));

// 9. reverse
const arrReverse = [1, 2, 3];
console.log(arrReverse.reverse());

// 10. splice
const arrSplice = [1, 2, 3];
const arrSpliceMasuk = arrSplice.splice(1, 1, 5); // menyimpan value di indeks 1 sebanyak 1
console.log(arrSplice);

// 11. slice
const arrSlice = [1, 2, 3];
console.log(arrSlice.slice(1, 3));
console.log(arrSlice);

// 12. split (string to array)
const arrSplit = `1,2,3`;
const arrSplit1 = arrSplit.split(",");
console.log(arrSplit1);

// 13. find
const arrFind = [4, 2, 6, 3];
console.log(arrFind.find(e => e % 2));

// 14. findIndex
const arrFindIndex = [1, 2, 3, 4];
console.log(arrFindIndex.findIndex(e => e % 2 == 0));

// 15. includes
const arrIncludes = [1, 2, 3];
console.log(arrIncludes.includes(2, 3));

// 16. some
const arrSome = [1, 2, 3];
console.log(arrSome.some(e => e % 2 == 1));

// 17. forEach
const arrForEach = [1, 2, 3];
arrForEach.forEach(e => console.log(`Angka ${e}`));

// 18. map
const arrMap = [1, 2, 3];
const arrMap1 = arrMap.map(e => e ** 2);
console.log(arrMap1);

// 19. reduce
const arrReduce = [1, 2, 3];
console.log(arrReduce.reduce((prev, curr) => prev + curr));

// 20. Array.isArray
const arrIsArray = [1, 2, 3];
console.log(Array.isArray(arrIsArray));

// 21. new Set
const arrNewSet = [1, 2, 3];
console.log(new Set(arrNewSet));





// === Object ===


// Variable langsung
const myObject = {
    nama : "Dimas",
    umur : 23,
    sayHello : () => {
        return `Hello ${nama}`;
    }
}

console.log(myObject.nama);
console.log(myObject.umur);
console.log(myObject.sayHello());

// Function Declaration tidak menggunakan this
function myObjectFunc(nama, umur){
    let mhs = {}
    mhs.nama = nama;
    mhs.umur = umur;
    mhs.sayHello = () => {
        return `Hello ${nama}`; // this tidak ada di dalam konsep arrow func
    }

    return mhs;
}

let dimas = myObjectFunc("Dimas", 23);
console.log(dimas.nama);
console.log(dimas.sayHello());

// Function Expression
const myObjectExpression = (nama, umur) => {
    let mhs = {}
    mhs.nama = nama;
    mhs.umur = umur;
    mhs.sayHello = () => `Hello ${nama}`;

    return mhs;
}

let dimas1 = myObjectExpression("Dimas", 23);
console.log(dimas1.sayHello());

// Function Constructor
function MyObjectCons(nama, umur){
    this.nama = nama;
    this.umur = umur;
    this.sayHello = () => `Hello ${nama}`;
}

let dimas2 = new MyObjectCons("Dimas", 23);
console.log(dimas2.sayHello());

// Class
class MyObjectClass{
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }

    sayHello(){
        return `Hello ${nama}`
    }
}

let dimas3 = new MyObjectClass("Dimas", 23);
console.log(dimas3.sayHello());


// Object.entries : membuat sebuah array dari properti dan value object
const myObjEntries = {
    nama : "dimas",
    skill : "PHP, JS"
}

const myBro = Object.entries(myObjEntries);
console.log(myBro);





// === FOR OF &&& FOR IN ===


// for of : melakukan iterasi segala sesuatu yang iterable selain object
const arrForOf = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(e of arrForOf){
    console.log(`value ${e}`);
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
    console.log(`Cara melihat value : ${arrForIn[e]}`);
}





// === SPREAD OPERATOR ===



// Penggunaan/Fungsi : 
// [ ...String ] : Merubah String menjadi Array per karakter
const myStr = "Dimas Rendy Sugara";
const myStr1 = myStr.split(" ").join("");
console.log([...myStr1].length); // telah di masukkan ke array, makanya bisa menggunakan .length

// Mengcopy Array tanpa harus merubah array awal
const myArrFirstName = ["Dimas", "Rendy"];
const myArrFullName = [...myArrFirstName]; 
myArrFullName.push("Sugara"); // Menambahkan data tanpa mempengaruhi array asli
console.log(myArrFirstName);
console.log(myArrFullName);

// Sedangkan copy array yang biasanya
const myArrFirstName1 = ["Dimas", "Rendy"];
const myArrFullName1 = myArrFirstName1;
myArrFullName1.push("Sugara");
console.log(myArrFirstName1); // Array asli ikut berubah
console.log(myArrFullName1);

// Menggabungkan Array lebih fleksible dari concat yang cuman 2 array saja, dapat menambahkan tipe data lain di antaranya
const myArrFirstName2 = ["Dimas", "Rendy"];
const myArrLastName = ["Rendy", "Sugara"];
const myArrFullName2 = [...myArrFirstName2, 12345, ...myArrLastName];
console.log(myArrFullName2)

// Kombinasi isi object dengan properti yang sama
const myFirstName = {first : "Dimas", second : "Tampan"};
const myLastName = {second : "Rendy", third : "Sugara"};
const myFullname = {...myFirstName, ...myLastName}; // merubah data pada key/properti second mengikuti kombinasi object ke 2
console.log(myFullname);

// Merubah nodelist/arguments menjadi array, mirip fungsi pertama




// === REST PARAMETER ===



// ... yang digunakan pada parameter baik fungsi atau pun deklarasi
// Penggunaan/Fungsi :

// Menggabungkan banyak parameter menjadi 1 array
function getMyTimeWaste(name, ...time){
    console.log(time);
    console.log(Array.isArray(time));
    const wasteTime = time.reduce((prev, curr) => {
        return prev + curr
    });
    return `Waktu yang dihabiskan oleh ${name} adalah ${wasteTime} jam selama ${time.length} hari`;
}

let myRestParam = getMyTimeWaste("Dimas", 3, 2, 1, 6, 6, 1, 4);
console.log(myRestParam);

// Ketika mereturn nilai dapat digunakan sebagai penggabung 2 buah value
function getMyProfile(name, age){
    return { ...name, age }; // menggabungkan 2 buah array/object + tipe data lainnya
}

const myName = {
    firstName : "Dimas"
};

const myProfile = getMyProfile(myName, 23);
console.log(myProfile);





// === KONSEP KONSEP JAVASCRIPT MODERN ===


// [a, b] = [b ,a] : memutarbalikkan nilai di sebuah variable (khusus let)
let varSatu = [1, 2, 3];
let varDua = "Dimas";
[varSatu, varDua] = [varDua, varSatu];
console.log(varSatu);

// nama : nama, bisa hanya nama saja
const nama1 = "Dimas";
const umur1 = 23;
const createMyObj = {
    nama1, // langsung saja
    umur1 : umur1 // aslinya seperti ini
}
console.log(createMyObj);


// kondisi && return : mempersingkat if(kondisi){ return bla bla }
const myTrue = true;
myTrue && console.log(`Berarti True`);

const myFalse = false;
!myFalse && console.log(`Berarti False`); // ! memutarbalikkan boolean


// trueable || Default : jika ada value diawal(selama kondisi true) maka akan diambil, jika value kosong/undefined maka akan muncul default
let myTrue1;
const baks = myTrue1 || 'Bakso bang?';
console.log(baks);

let myTrue2 = "Ada";
const baks2 = myTrue2 || 'Ga ada';
console.log(baks2);


// method chaining : sebelumnya ada sih contohnya, kira kira bisa dibilang kita menggabungkan function secara beraturan di 1 line code
const myName1 = `Dimas Rendy Sugara`;
let myNameLength = myName1.split(" ").join("").length; // pertama string myName1  diubah ke array dengan prototype split, lalu array tadi digabungkan dengan join menjadi sebuah string, lalu dihitung dengan length
console.log(myNameLength);





// === Object.create ===