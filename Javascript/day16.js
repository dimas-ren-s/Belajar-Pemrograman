// for ... of 
// : digunakan untuk perulangan khususnya unique iterable termasuk string dan arguments, dan secara default tidak memiliki index namun kita bisa menggunakan array.entries()
const arr1 = ["bakso", "rendang", "soto", "ayam kecap"];
for(const makanan of arr1){
    console.log(makanan);
}

const strings = `Saya makan bakso daging pak sur`;
for(huruf of strings){
    const regex = /^[a-zA-Z0-9]+$/;
    if(regex.test(huruf)){
        console.log(huruf);
    }
}

for([index, huruf] of arr1.entries()){ // untuk melihat index, tapi hanya bisa untuk array dan Object
    console.log(index)
}


// for ... in
// : dapat digunakan untuk mengambil nama properti dari sebuah objek
const obj1 = {
    nama: "Dimas",
    umur: 23,
    pekerjaan: "Web Developer"
}

for(prop in obj1){
    console.log(prop);
    console.log(obj1[prop]); // kalau mau menampilkan isinya
}
