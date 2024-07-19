// Tempate literals
// What is it? we initation a string with backtick ` blabla `
// template literals has 5 functionality, there is :
// -- Multi line strings
// -- HTML Fragments
// -- Translation/
// -- styled components with tag template
// -- embedded expression

// Multi line string
// -- if we make like an enter in string, we need to add \n in normal string, but with template literals we can just enter. 
// in the background automatically javascript add \n
let normalString = 'Nama saya : Dimas \n Umur saya : 23';
console.log(normalString);
let templateString = `Nama saya : Dimas
                    Umur saya : 23`;
console.log(templateString);


// Embedded Expression
// -- we can make an expression function in it, like ternary, (looping, map, reduce, filter), or nested function
const string1 = `If u add 1 + 2 equal ${1+2}`; // expression basic
console.log(string1);

const string2 = `Everything devided by 2 is even, so 3 is ${(3 % 2 == 0) ? 'even' : 'odd'}`; // ternary
console.log(string2);

let arr = [1, 2, 3, 4, 5, 6];
const string3 = `I have an array [1, 2, 3, 4, 5, 6], and i wanna make a new array that only includes even number, so i can make it like this [${
                        arr.filter((element) => { // dapat dilakukan expression function, tapi alangkah bagusnya kita buat func terpisah untuk clean code
                            return element % 2 == 0
                        })
                    }]`
console.log(string3);

// nested function
// artinya bersarang, ya seperti expression function sebelumnya, tapi lebih clean code dan mudah dibuat walaupun kompleks
let arr1 = [1, 2, 3, 4, 5, 6];
const evenOrOdd = (number) => (number % 2 == 0) ? "Even" : "Odd";
const CreateObject = function(numList){
    numList.forEach((element, i) => {
        this[`index - ${i}`] = `number of ${element} is ${evenOrOdd(element)}`;
    })
}
const string4 = `I have an array [${arr1.join(', ')}], and i wanna make a new object thats show the even or odd category. 
The example like this ${JSON.stringify(new CreateObject(arr1))}`; // we will learn bout object next time
console.log(string4);



// Tagged Template
// : tagged template is like send a parameter of string in tag function
const addColon = (strings, ...values) => {
    let result = '';
    strings.forEach((element, i) => {
        result += element;
        if (i < values.length) {
            result += `: ${values[i]}`;
        }
    });
    return result;
}
const maString = addColon` Nama ${'Dimas'} \n Umur ${'23'}`;
console.log(maString);

// : tagged template is more use full for translation, styled components, and sanitize (security)




// Destructutring assignment
// : mengambil nilai dari sebuah array atau object dengan lebih mudah tanpa perulangan
// Jika kita mengambil array seperti ini index[i], dapat kita ubah menjadi seperti ini

// -- array
let arrSekolah = ["SMANSA MBO", 9];
console.log(arrSekolah[0]); // cara basic
let [namaSekolah, gradeSekolah] = arrSekolah; // di inisialisasi ke variable baru dengan krung siku [  ]
console.log(namaSekolah, gradeSekolah);

let arrBanyak = ['Buah-buahan', 'Rambutan', 'Jambu', 'Jeruk', 'Mangga']; // contoh yang buruk wkwk
let [kategori, ...valueKategori] = arrBanyak; // array pertama dimasukkan ke kategori, sedangkan sisanya masuk sebagai array di valueKategori
console.log(kategori, valueKategori);

let arrMinusSatu = ['ayam', 2];
let [daging, jumlah, jenis = 'normal'] = arrMinusSatu; // mendefinisikan nilai default
console.log(daging, jumlah, jenis);

let [daging1, jumlah1] = ['ayam', 2];
console.log(daging1, jumlah1);

console.log([daging1, jumlah1] = [jumlah1, daging1]); // atau membalikkan nilai

// -- object
const objSekolah = {
    nama: 'Smansa Mbo',
    grade: 8
}
console.log(objSekolah.nama); // cara basic

let {nama, grade} = objSekolah; // menggunakan kurawal {  }  untuk object dengan nama variable harus sama dengan properti object
console.log(nama, grade);

let {nama: name1, grade: rank} = objSekolah; // Merubah nama variable
console.log(name1, rank); // namun nama/grade tidak pernah ada karna sudah digantikan oleh variable baru

const objBanyak = {
    category: "Buah-buahan",
    apel: 1,
    mangga: 2,
    rambutan: 3
}
// let {category, ...valuesCategory} = objBanyak; // objek pertama sesuai category, sisanya akan masuk sebagai nilai object di valuesCategory
// console.log(category, valuesCategory);

let {apel, ...category} = objBanyak; // tidak akan tertukar walau posisi berbeda, namun perhatikan spread operatornya
console.log(category, apel)

const sessionAdmin = {
    id: 1,
    nama: "Dimas",
    role: "Admin",
    access: {
        system: true,
        feature: ['Create', 'Read', 'Write', 'Delete'],
        demo: true
    }
}

const getSession = ({id, nama, role}) => { // walau yang dikirim object, kita bisa langsung destructuring tanpa perlu inisialisasi data satu per satu, bisa kita sesuaikan data dengan database ga ya?
    return `ID : ${id}, Selamat datang ${role}, ${nama}`;
}

console.log(getSession(sessionAdmin)); 

const sayAllSession = ({id, nama, role, access: {system, ...listAccess}}) => { // langsung di destructuring lagi walaupun nested object
    const [...value] = Object.entries(listAccess);
    console.log(value);
    return `ID : ${id}, Selamat datang ${role}, ${nama}. ${system ? 'Kamu memiliki akses ke sistem.' : 'Kamu tidak memiliki akses ke sistem.'} ${listAccess ? `Fitur lainnya : ${value.map((element) => `${element[0]} = [${element[1]}]`)}` : ''}` // forEach untuk melakukan aksi yang tidak membutuhkan return nilai
}
console.log(sayAllSession(sessionAdmin));



