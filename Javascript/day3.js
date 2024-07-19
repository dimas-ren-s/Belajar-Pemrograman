// Function, dapat membuat suatu yang berulang kali dijalankan
function welcome(nama){
    return 'Selamat Datang ' + nama;
}

console.log(welcome('Dimas'));

// arguments, sebuah variabel array yang menampung semua argument yang dimasukkan ketika function dipanggil tapi
// pada parameter tidak didefinisikan
function sum(){
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}

console.log(sum(1,2,3,4,5));

// Function Declaration : function yang dideklarasikan dengan nama
console.log(namaFunction());
function namaFunction(optional){
    return 'bla bla bla';
}
console.log(namaFunction());

// function Expression : function yang dideklarasikan tanpa nama dan biasanya disimpan dalam variabel
// console.log(namaFunctionVar()); // Error karena harus dideklarasikan terlebih dahulu
let namaFunctionVar = function(optional){
    return 'bla bla bla';
}
console.log(namaFunctionVar()); // berhasil

// Perbedaan antara Function Declaration dan Function Expression adalah pada saat hoisting
// hoisting adalah proses mengangkat deklarasi variabel dan function ke atas

// function declaration
// - lebih fleksibel karena bisa dipanggil sebelum deklarasi (hoisting)
// - lebih mudah dibaca cocok untuk pemula

// function expression
// - tidak bisa dipanggil sebelum deklarasi
// - cocok untuk membuat function yang bersifat private (function yang hanya bisa diakses didalam variabel)
// - cocok untuk membuat function yang bersifat dinamis (function yang bisa diubah-ubah)
// - cocok untuk membuat function yang bersifat anonymous (function tanpa nama)
// - cocok untuk membuat function yang bersifat callback (function sebagai parameter)
// - cocok untuk membuat function yang bersifat closure (function didalam function)


// Array
// -- berisi kumpulan data yang memiliki key dan value

// Method Array
// - length : menghitung panjang array
// - join() : menggabungkan data array dan mengubahnya menjadi string juga bisa menambahkan separator/pemisah(opsional)
// - push() : menambahkan data di akhir array
// - pop() : menghapus data di akhir array
// - unshift() : menambahkan data di awal array
// - shift() : menghapus data di awal array
// - splice() : menambahkan atau menghapus data di posisi tertentu
// - slice() : mengambil data di posisi tertentu
// - forEach() : melakukan sesuatu pada setiap data array dan tidak mengembalikan array baru
// - map() : melakukan sesuatu pada setiap data array dan mengembalikan array baru
// - filter() : melakukan filter pada setiap data array dan mengembalikan array baru
// - reduce() : melakukan sesuatu pada setiap data array dan mengembalikan nilai baru
// - sort() : mengurutkan data array
// - find() : mencari data array
// - findIndex() : mencari index data array
// - indexOf() : mencari index data array
// - includes() : mencari data array
// - some() : mencari data array
// - concat() : menggabungkan 2 array atau lebih

let arrLength = [1,2,3,4,5];
console.log(arrLength.length);

let arrJoin = [1,2,3,4,5];
console.log(arrJoin.join(' -> '));

let arrPush = [1,2,3,4,5];
arrPush.push(6);
console.log(arrPush);

let arrPop = [1,2,3,4,5];
arrPop.pop();
console.log(arrPop);

let arrUnshift = [1,2,3,4,5];
arrUnshift.unshift(0);
console.log(arrUnshift);

let arrShift = [1,2,3,4,5];
arrShift.shift();
console.log(arrShift);

let arrSplice = [1,2,3,4,5];
arrSplice.splice(0,1);
console.log(arrSplice);
arrSplice.splice(2,1,10); // INDEX ke 2, lalu HAPUS 1 data di index ke 2, TAMBAH 10 di index ke 2
console.log(arrSplice);

let arrSlice = [1,2,3,4,5]; 
let arrSliceNew = arrSlice.slice(0,3); // INDEX ke 0, lalu AMBIL 3 data dari index ke 0
console.log(arrSliceNew);

let arrForEach = [1,2,3,4,5];
// Kombinasi dengan function expression tanpa mengembalikan array baru
arrForEach.forEach(function(e){
    // aksi yang dilakukan pada setiap data array, ga bisa di return
    console.log('ke-' + e);
});

let arrMap = [1,2,3,4,5];
// Kombinasi dengan function expression Dan mengembalikan array baru serta kita simpan di variable baru
let arrMapNew = arrMap.map(function(e){ // sebagai elemnen dari masing-masing index
    return e * 2; // aksi yang dilakukan pada setiap data array
});
console.log(arrMapNew);

let arrFilter = [1,2,3,4,5];
let arrFilterNew = arrFilter.filter(function(e){
    return e > 2; // kondisi yang ditentukan untuk masuk kedalam array baru
});
console.log(arrFilterNew);

let arrReduce = [1,2,3,4,5];
let arrReduceNew = arrReduce.reduce(function(total, e){
    return total + e; // aksi yang dilakukan pada setiap data array
});
console.log(arrReduceNew);

let arrSort = [5,3,1,4,2];
arrSort.sort(); // mengurutkan data array tanpa mengubah/mengembalikan array baru
console.log(arrSort);