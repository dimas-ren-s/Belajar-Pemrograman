// Object Create, sebagai function bawaan di function declaration
const methodMahasiswa = {
    makan : function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan`);
    },
    main : function(jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat Main`);
    }
}

// Function declaration
function mahasiswa(nama, energi){
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}

let dimas = mahasiswa("dimas", 10);
console.log(dimas);
dimas.makan(10);
console.log(dimas);


// Prototype, sebuah object yang mawarisi sifat
// misalnya kita membuat sebuah constractor, ternyata dibalik layar sudah dibuatkan object.create
// constractor, sebelum class ditemukan wkwk
function Mahasiswa(nama, energi){
    // let this = Object.create(Mahasiswa.prototype); -- dibalik layar
    this.nama = nama;
    this.energi = energi;
    // return this ; -- dibalik layar
}

// method yang sebelumnya di panggil ketika function declaration, sekarang bisa di panggil menggunakan prototype
Mahasiswa.prototype.makan = function (porsi){
    this.energi += porsi;
    console.log(`Selamat makan ${this.nama}`);
}

Mahasiswa.prototype.main = function (jam){
    this.energi -= jam;
    console.log(`Selamat bermain ${this.nama}`);
}

let adimas = new Mahasiswa('Adimas', 10);
console.log(adimas);
adimas.makan(10);
console.log(adimas);



// Versi Class, dimana dibalik layar class itu adalah prototype diatas
// penulisan class dan tanpa ()
class Mahasiswaclass{
    constructor(nama, energi){  // constructor adalah variable/properti
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){ // method didefinisakan tanpa perlu menulis function lagi
        this.energi += porsi;
        console.log(`Selamat Makan ${this.nama}`);
    }

    main(jam){
        this.energi -= jam;
        console.log(`Selamat Bermain ${this.nama}`);
    }
}

let jamal = new Mahasiswaclass('Jamal', 10);
console.log(jamal);
jamal.makan(20);
console.log(jamal);


