// Execution Context, hoisting, dan scope

// Contoh
console.log(myFunc());
// console.log(myName); // error karena tidak diinisialisasi sebelum baris ini di eksekusi, ini sudah mencakup contoh execution context, dan scope
let myName = "Dimas";
console.log(myName);

console.log(myFunc()); // disini kenapa function berhasil dijalankan sedangkan varible harus diinisialisasi dulu karena sifat hoisting function
function myFunc(){
    return "Halo myfunc";
}

// Closure : sebuah function yang dijalankan setelah function lain selesai di eksekusi dan mengembalikan nilai
// harus dideklarasikan dulu di sebuah variable
function greeting(waktu){ // yang di inisialisasi diawal
    return function(nama){ // sebagai parameter ketika function sebelumnya telah di deklarasi+inisialisasi
        console.log(`Selamat ${waktu}, pelanggan ${nama}`);
    }
}

let selamatPagi = greeting('Pagi');
let selamatMalam = greeting('Malam');

selamatPagi('Dimas');
selamatMalam('Jamal');

// Arrow function : sebuah function expression yang dibuat lebih singkat dan lebih implisit
// -- funtion expression
const jumlahDetik = function(hari){
    return hari * 24 * 60 * 60;
}

console.log(jumlahDetik(5));

// -- Arrow Function,
const jumlahDetikArrow = (hari) => {
    return hari * 24 * 60 * 60;
} 

console.log(jumlahDetikArrow(5));

// -- Arrow function implisit return, jika satu parameter dapat dihilangkan tanda kurung dan satu return saja bisa dapat dihilangkan return dan tanda kurung siku
const jumlahDetikArrowImplisit = hari => hari * 24 * 60 * 60; // hanya untuk satu parameter dan return saja dan cukup 1 baris
console.log(jumlahDetikArrowImplisit(5));
const hellow = () => `Hello World`; // tapi kalau parameter kosong, harus menggunakan tanda kurung
console.log(hellow());

// -- Arrow function jika ada 2 parameter, dan terdapat kondisi sebelum return
const tagihanPesanan = (harga, jumlah) => { // parameter harus menggunakan tanda kurung, return harus menggunakan kurung siku dan return
    let total = harga * jumlah;
    return total;
}

console.log(tagihanPesanan(10000, 2));


// function map
let mahasiswa = ["Dimas", "Rendy", "Sugara"];
const jumlahHuruf = mahasiswa.map(function(nama){ // .map(function(element masing masing array yang dilakukan sesuatu))
    return nama.length
});

console.log(jumlahHuruf);

// function map + arrow function
const jumlahHurufArrow = mahasiswa.map(nama => nama.length);
console.log(jumlahHurufArrow);

// Lebih paham dikit
const jumlahHurufLengkap = mahasiswa.map( nama => ({ // harus dibungkus ({ }) untuk membuat object dan buka return
    nama : nama, // -- nama, atau jika nama : nama bisa disingkat cuman nama aja,
    jumlahHuruf : nama.length
}));
console.log(jumlahHurufLengkap);



// This pada arrow function tidak ada, jadi dia mengambil lexical scope
// Jika pada function constructor menggunakan this
const ucapanSelamat = function(nama, waktu){
    this.nama = nama;
    this.waktu = waktu;
    this.saySelamat = function(){
        return `Selamat ${this.waktu}, pelanggan ${this.nama}`;
    }
}

let adimas = new ucapanSelamat("Adimas", "Pagi");
console.log(adimas.saySelamat());

// Namun jika menggunakan arrow function
const ucapanSelamatArrow = function(nama, waktu){ // pada saat deklarasi constructor kita tidak bisa merubah function ke arrow function
    this.nama = nama;
    this.waktu = waktu;
    this.saySelamat = () => `Selamat ${this.nama}, pelanggan ${waktu}`; // kalau menggunakan arrow function, this mengacu pada lexical scope
}

let adinda = new ucapanSelamatArrow("Adinda", "Malam");
console.log(adinda.saySelamat()); // tidak ada perbedaan? tapi sebenarnya dia itu tidak menggunakan konsep this

// ------> Arrow function ini dapat berguna jika konsep hoisting diterapkan, dimana hoisting mengangkat this menjadi window bukan lexical scope
// contoh  : 
const SelamatDatang = function (nama){
    this.nama = nama;
    this.saySelamat = () => {
        let datang = "Datang";
        let pulang = "Pulang";
        if(datang == "Datang"){ // memutar balikkan nilai -- atau bisa dibuat untuk css memutar balik efek
            [datang, pulang] = [pulang, datang];
        }
        
        setTimeout(() => {
            console.log(`Selamat ${datang}, pelanggan ${this.nama}`);
        }, 500);
    }
    
    // setTimeout(function(){
    //     console.log(this.nama); // output this.nama akan menghasilkan undefined karna hoisting function
    // }, 500)

}

let jamal = new SelamatDatang("Jamal");
jamal.saySelamat();



