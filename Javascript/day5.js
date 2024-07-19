// Object, memiliki properti(variable) dan method(function).
// Object Literal, langsung menginisialisasi data varible berupa object
let object1 = {
    nama : 'Dimas Rendy Sugara',
    umur : 23,
    pekerjaan : 'Web Programmer',
    alamat : {
        jalan : 'Jl. Purna',
        lorong : 'Lr. Musta',
        kota : 'Mbo'
    },
    sapa : function(){
        return 'Hi, nama saya ' + this.nama + ', umur saya ' + this.umur + ', sebagai ' + this.pekerjaan;
    }
}
console.log(object1.sapa());


// function declaration, memanggil function untuk membuat object
function buatObjectOrang(nama, umur, pekerjaan, alamat){
    let orang = {};
    orang.nama = nama;
    orang.umur = umur;
    orang.pekerjaan = pekerjaan;
    orang.alamat = alamat;
    return orang;
}
let orang1 = buatObjectOrang('dimas', '23', 'Web Programmer', 'Jalan purna');
console.log(orang1);