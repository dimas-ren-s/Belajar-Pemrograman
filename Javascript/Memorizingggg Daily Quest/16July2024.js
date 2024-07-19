// === VARIABLE ===


// let = dapat diubah tipe data dan valuenya, bisa dideklarasi tanpa inisialisasi;
let varLet; // tanpa inisialisasi
varLet = 10;
console.log(varLet);

varLet = "bisa diubah"; // bisa langsung diubah
console.log(varLet);

// const = tidak dapat mengubah tipe data, value dapat diubah dengan function(khusus array dan object), dan wajib di inisialisasi
const varConst = 10; // wajib di inisialisasi
console.log(varConst);





// === TIPE DATA VARIABLE ===


// String
const tipeString = `ini tipe teks, angka123, dan berbagai symbol <>//`;
console.log(typeof tipeString);

// Boolean
const tipeBoolean = true;
console.log(typeof tipeBoolean);

// Number/Integer
const tipeNumber = 123;
console.log(typeof tipeNumber);

// Big Integer
const tipeBigInt = 123n;
console.log(typeof tipeBigInt);

// Array
const tipeArray = [1, 2, 3, 4, 5];
console.log(Array.isArray(tipeArray));

// Object
const tipeObject = { nama : "Dimas" };
console.log(typeof tipeObject);

// Undefined
const tipeUndefined = undefined;
console.log(typeof tipeUndefined);

// Date
const tipeDateMiliSec = Date.now();
console.log(tipeDateMiliSec);
const tipeDate = new Date(tipeDateMiliSec);
console.log(tipeDate);

// Null
const tipeNull = null;





// === ARITMATIKA ===



// Tambah
const tambah = 3 + 2;
console.log(tambah);

// Kurang
const kurang = 3 - 2;
console.log(kurang);

// Bagi
const bagi = 3 / 2;
console.log(bagi);

// Kali
const kali = 3 * 2;
console.log(kali);

// Pangkat
const pangkat = 3 ** 2;
console.log(pangkat);

// Modulus
const modulus = 3%2;
console.log(modulus);





// === PENGKONDISIAN ===



// If Else
const varIfElse = true;

if(!varIfElse){ // tanda ! akan membalikkan nilai Boolean yang dihasilkan
    console.log(`Jika False Maka masuk Kesini`);
} else if (varIfElse){
    console.log(`Jika true masuk Kesini`);
} else {
    console.log(`Jika tidak ada true dan false, maka akan masuk kesini`)
}


// Switch
const varSwitch = "Web";

switch(varSwitch){
    case "Mobile" :
        console.log(`Mobile Dev`);
        break;
    case "Web" :
        console.log(`Web Dev`);
        break
    case "Apple" :
        console.log(`Swift Dev`);
        break;
    default :
        console.log(`Selain case case, Masuk kesini`);
        break;
}





// === Perulangan ===



// For
const varFor = [1, 2, 3, 4, 5];
for(let i = 0; i < varFor.length; i++){
    console.log(`Angka ${varFor[i]}`);
}

// While
const varWhile = [1, 2, 3, 4, 5];
let i = 0;
while(i < varWhile.length){
    console.log(`Angka ${varWhile[i]}`);
    i++;
}

// Do While
const varDoWhile = [1, 2, 3, 4, 5];
i = 0;
do {
    console.log(`Angka ${varDoWhile[i]}`);
    i++;
}
while(i < varDoWhile.length);





// === Array ===


// length : Menghitung total indeks
const arrLength = [1, 2, 3];
console.log(arrLength.length);

// sort(callback) : Menyusun array menjadi kecil ke besar / sebaliknya
const arrSort = [10, 9, 8, 7];
console.log(arrSort.sort((a,b) => a - b)); //ascending

// reverse() : Membalikkan posisi indeks array
const arrReverse = [1, 2, 3];
console.log(arrReverse.reverse());

// push(...value) : Memasukkan value ke array di indeks terakhir
const arrPush = [1, 2, 3];
arrPush.push(5);
console.log(arrPush);

// pop() : Menghapus value di indeks terakhir array
const arrPop = [1, 2, 3];
arrPop.pop();
console.log(arrPop);

// unshift(...value) : Menambahkan data di indeks pertama array dan menggeser indeks yang sudah ada sebelumnya
const arrUnshift = [1, 2, 3];
arrUnshift.unshift(5);
console.log(arrUnshift);

// shift() : Menghapus value indeks pertama dari array
const arrShift = [1, 2, 3];
arrShift.shift();
console.log(arrShift);

// splice(start, deleteCount, ...value) : 
const arrSplice = [1, 2, 3];
arrSplice.splice(0, 2, 10, 11);
console.log(arrSplice);

// slice(start, end-1) : Mengambil nilai dari sebuah array di range  tertentu !!! return nilai + variable baru !!!
const arrSlice = [1, 2, 3];
const arrSlice1 = arrSlice.slice(0, 2);
console.log(arrSlice1);

// split("pemisah") : Menghapus nilai dari sebuah string dengan batas/karakteristik tertentu !!! return nilai + variable baru yang tipe datanya string!!!
const stringSplit = `1, 2, 3`;
const stringSplit1 = stringSplit.split(", ");
console.log(stringSplit1);

// concat(...array) : Menggabungkan array !!! return nilai + variable baru !!!
const arrCon = [1, 2, 3];
const arrCat = ["dimas"];
const arrConcat = arrCon.concat(arrCat);
console.log(arrConcat);

// join("pemisah") : Menggabungkan sebuah array menjadi string !!! return nilai + variable baru !!!
const arrJoin = [1, 2, 3];
const arrJoin1 =  arrJoin.join(" < ");
console.log(arrJoin1);
console.log(typeof arrJoin1);

// find(callback) : Mencari sebuah --VALUE-- di dalam array yang cocok dengan kondisi pengkondisian dari callback !!! return nilai + variable baru !!!
const arrFind = [1, 2, 3];
const arrFind1 = arrFind.find((e) => e % 2 == 0);
console.log(arrFind1);

// findIndex(callback) : Mencari sebuah --INDEKS-- di dalam array yang cocok dengan kondisi pengkondisian dari callback !!! return nilai + variable baru !!!
const arrFindIndex = [1, 2, 3];
const arrFindIndex1 = arrFindIndex.findIndex(e => e % 2 == 0)
console.log(arrFindIndex1);

// includes(...value) : Mencari satu/lebih value, jika ada maka true !!! return nilai + variable baru !!!
const arrIncludes = [1, 2, 3];
const arrIncludes1 = arrIncludes.includes(2);
console.log(arrIncludes1);

// some(callback)
const arrSome = [1, 2, 3];
const arrSome1 = arrSome.some(e => e % 2 == 0);
console.log(arrSome1);

// filter(callback)
const arrFilter = [1, 2, 3];
const arrFilter1 = arrFilter.filter(e => e % 2 == 1)
console.log(arrFilter1);

// forEach
const arrForEach = [1, 2, 3];
arrForEach.forEach((e) => console.log(`Angka ${e}`));

// map
const arrMap = [1, 2, 3];
const arrMap1 = arrMap.map(e => e ** 2);
console.log(arrMap1);

// reduce
const arrReduce = [1, 2, 3];
const arrReduce1 = arrReduce.reduce((prev, curr) => prev + curr);
console.log(arrReduce1);

// isArray
const arrIsArray = [1, 2, 3];
console.log(Array.isArray(arrIsArray));

// Set
const arrSet = [1, 3, 5, 1, 2, 3, 4, 9, 1];
const arrSet1 = new Set(arrSet);
console.log(Array.isArray(arrSet1));