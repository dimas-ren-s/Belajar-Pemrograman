// === Variable ===
// Let : Variable yang dapat diubah, tidak perlu di inisialisasi nilai dan tipe data diawal
let myLet;
myLet = 10;
console.log(myLet);

myLet = "bisa diubah nilai dan tipe data";
console.log(myLet);

// Const : Variable yang tidak dapat diubah, harus menginisialisasi nilai dan tipe data diawal
// const myConst; --> 'const' declarations must be initialized.
const myConst = 10;
console.log(myConst);

// myConst = "tidak bisa diubah"; --> Assignment to constant variable.
// nilai dari Const dapat diubah namun tipe data tidak dapat diubah
const myConstArr = [1, 2, 3];
myConstArr.push(10);
console.log(myConstArr);

// === Tipe Data Variable ===
// String : berupa teks
const myString = "Hello World!";
console.log(typeof(myString));

// Number : berupa angka
const myInt = 10;
console.log(typeof(myInt));

// Big Integer : angka yang melebihi limit dari number
const myBigInt = 10n;
console.log(typeof(myBigInt));

// Boolean : berupa true/false
const myBoolean = true;
console.log(typeof(myBoolean));

// Array : urutan variable yang dikelompokkan berdasarkan indeks
const myArr = [1, 2, 3];
console.log(Array.isArray(myArr));

// Object : urutan variable yang dikelompokkan berdasarkan properti
const myObj = {
    nama : "dimas",
    umur : "23"
}
console.log(typeof(myObj));

// Undefined : tidak memiliki nilai
let myUndefined;
console.log(typeof(myUndefined));

// === Aritmatika ===
// Tambah +
const myTambah = 3 + 2;
console.log(myTambah);

// Kurang -
const myKurang = 3 - 2;
console.log(myKurang);

// Bagi /
const myBagi = 3 / 2;
console.log(myBagi);

// Kali *
const myKali = 3 * 2;
console.log(myKali);

// Modulus(sisa bagi) %
const myModulus = 3 % 2;
console.log(myModulus);

// Pangkat
const myPangkat = 3 ** 2;
console.log(myPangkat);

// Increment(variable Let) ++
let myIncrement = 10;
myIncrement++;
console.log(myIncrement);

// Decrement(variable Let) --
let myDecrement = 10;
myDecrement--;
console.log(myDecrement);

// === Pengkondisian ===
// If else 
const myIf = false;
if(!myIf){ // Semua yang bernilai true, tanda ! akan membalikkan nilai true false
    console.log("Jika true masuk ini");
} else if (myIf === true) {
    console.log("Jika True");
} else {
    console.log("Jika Tidak masuk pengkodisian diatas")
}

// Ternary
const myTernary = false;
myTernary ? console.log('Diawal true') : console.log('Diakhir False');

// Switch
const mySwitch = "Web";
switch(mySwitch){
    case("Web") : // note ga perlu tanda kurung mas bro
        console.log("Seorang Web Dev");
        break;
    case "Mobile" : // nah ini yang bener
        console.log("Seorang Mobile Dev");
        break;
    default :
        console.log("Ini Default")
}

