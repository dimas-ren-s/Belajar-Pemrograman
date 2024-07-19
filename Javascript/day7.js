// Membuat object dengan constructor, 
// perbedaan signifikan adalah 
// -- penggunaan new ketika pemanggilan constructor
// -- penggunaan this. pada function
function Karyawan (nama, umur, pekerjaan, alamat){
    this.nama = nama;
    this.umur = umur;
    this.pekerjaan = pekerjaan;
    this.alamat = alamat;
}

let karyawan1 = new Karyawan('dimas', 23, 'web developer', 'meulaboh');
console.log(karyawan1);
let karyawan2 = new Karyawan('Jamal', 23, 'Chef', 'Bandung');
console.log(karyawan2);