// Array.sort memiliki kelemahan untuk angka 10, 20 dan seterusnya
// oleh karena itu, pada contoh ini kita menggunakan function(a,b) {return a-b}
// dapat dilihat pada mozilla developer
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

let arrSort = [1, 5, 8, 2, 7, 9, 11, 10, 1, 2];
arrSort.sort(function(a,b){
    return a-b; // ascending atau kecil ke besar
    return b-a; // descending atau besar ke kecil
})
console.log(arrSort);

let arrFind = [1, 3, 5, 11, 10, 8, 4];
let arrFindNew = arrFind.find(function(e){
    return e > 10; // pastikan merupakan pengkondisian, contoh e > 10 atau e != 1, Namun dia mengembalikan 1 nilai saja
})
console.log(arrFindNew);

let arrFindIndex = [1, 3, 5, 11, 10, 8, 4];
let arrFindIndexNew = arrFindIndex.findIndex(function(e){
    return e > 10; // dalam bentuk pengkondisian jangan inisialisasi, contoh inisialisasi adalah e = 5.
});
console.log(arrFindIndexNew);

let arrIndexOf = [1, 3, 5, 11, 10, 8, 4];
let arrIndexOfNew = arrIndexOf.indexOf(8); // untuk menetapkan angka pasti yang dicari kalau findIndex dapat menggunakan pengkondisian
console.log(arrIndexOfNew);

let arrIncludes = [1, 3, 5, 11, 10, 8, 4];
let arrIncludesNew = arrIncludes.includes(9); // pengecekan boleean apakah ada atau tidak, Nilai argumen harus pasti tidak bisa dalam bentuk pengkondisian
console.log(arrIncludesNew);

let arrSome = [1, 3, 5, 11, 10, 8, 4];
let arrSomeNew = arrSome.some(function(e){
    return e > 10; // tidak terlalu worth it digunakan, karena tidak masih bisa di akalin dengan filter, find, dan sebagainya
});
console.log(arrSomeNew);

let arrConcat1 = [1, 3, 5, 11, 10, 8, 4];
let arrConcat2 = [1, 3, 5, 11, 10, 8, 4];
let arrConcatNew = arrConcat1.concat(arrConcat2, arrConcat1);
console.log(arrConcatNew);

let arrPenumpang = []
let tambahPenumpang = function(namaPenumpang, arrPenumpang){
    let cekPenumpang = arrPenumpang.includes(namaPenumpang);
    if(cekPenumpang){
        return 'penumpang dengan nama "' + namaPenumpang + '" sudah ada';
    }
    let cekIndex = arrPenumpang.findIndex(e => e === undefined);
    cekIndex !== -1 ? arrPenumpang.splice(cekIndex, 1, namaPenumpang) : arrPenumpang.push(namaPenumpang);
    return arrPenumpang;
}

console.log(tambahPenumpang("Dimas", arrPenumpang));
console.log(tambahPenumpang("Dimas", arrPenumpang));
console.log(tambahPenumpang("Jamal", arrPenumpang));
console.log(tambahPenumpang( undefined, arrPenumpang));
console.log(arrPenumpang.push("Jajang"));
console.log(arrPenumpang);
console.log(tambahPenumpang("Rita", arrPenumpang));

let hapusPenumpang = function(namaPenumpang, arrPenumpang){
    let cekIndex = arrPenumpang.findIndex(e => e === namaPenumpang);
    let cekPenumpang = arrPenumpang.filter(function(e){
        return e !== undefined;
    });
    if(cekPenumpang == 0){
        return 'Angkot Kosong';
    }
    if(cekIndex !== -1){
        arrPenumpang.splice(cekIndex, 1, undefined);
    } else {
        return 'Tidak Ada Penumpang dengan Nama "' + namaPenumpang + '" di Angkot';
    }
    return arrPenumpang;
}

console.log(hapusPenumpang("Dimas", arrPenumpang));
console.log(hapusPenumpang("Kuli", arrPenumpang));
arrPenumpang = [undefined, undefined];
console.log(arrPenumpang);
console.log(hapusPenumpang("Kuli", arrPenumpang));
arrPenumpang = [];
console.log(arrPenumpang);
console.log(hapusPenumpang("Kuli", arrPenumpang));

