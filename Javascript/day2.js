// pembagian dengan penggenapan
let a = Math.ceil(10/3);
let b = Math.floor(10/3);
console.log(a);
console.log(b);

// Filter jika disuatu array ada data yang duplikat/sama
let c = [1,1,2,2,3,4,5,5,6,6,6,7,7,8,9,10,10];
let d = [...new Set(c)];
console.log(c);
console.log(d);

// Reduce, dapat menampung data sebelumnya dan data sekarang kemudian di lakukan sesuatu aksi
// - salah satu poin : menghitung jumlah data dalam array
let e = [1,2,3,4,5];
let f = e.reduce((total, value) => total + value, 0);
console.log(e);
console.log(f);

// Filter, dapat me
let g = 'AAABBAACCCAADDAAEEAACDAA';
let h = function(iterable){
    console.log([...iterable]);
    return [...iterable].filter((a,i) => a !== iterable[i-1]);
}
console.log(h(g));