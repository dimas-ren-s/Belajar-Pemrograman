// ================== Variable ==================

// Let ; Variable berisi nilai yang dapat diubah, boleh tidak memiliki default
let varLet; // tidak diinisialisasi nilai langsung

varLet = 10; // nilai di masukkan
console.log(varLet);

varLet = 15; // nilai let dapat diubah
console.log(varLet);

// Const : Variable yang bersifat tetap, dan nilai harus diinisialisasi dari saat definisian variable
// const varConst; --> const' declarations must be initialized.

const varConst = 10;
console.log(varConst);

// varConst = 15; --> Assignment to constant variable

// const dapat diubah jika nilai tersebut didalam array/object. Namun kita tidak bisa mengubah tipe data dari variable tersebut
const arrConst = [10, 15, 20];
arrConst.push(25); // dapat di tambahkan nilai baru
console.log(arrConst);

// Usahakan nilai const tidak dirubah dengan cara apapun dan digunakan untuk nilai data yang tetap, misalnya hari, jam, dan sebagainya.

// ================== Tipe Variable ==================

