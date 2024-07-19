// === PROMISE ===


// Format : 
const myFunc = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve("Hasil True setelah 2 detik");
    }, 2000);
})

myFunc.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err)
})

const getMyName = new Promise(function(resolve, reject) {
    const kondisi1 = false;
    if(kondisi1){
        setTimeout(() => {
            resolve("Operasi selesai setelah 2 detik");
        }, 2000);
    } else {
        reject("Berarti False")
    }
});

getMyName.then(function(result) {
    console.log(result); // "Operasi selesai setelah 2 detik"
}).catch(function(error) {
    console.log(error);
});





// === FETCH === 


// Penggunaan Fetch untuk API
// fetch('https://fakestoreapi.com/products')
//     .then((res) => res.json())
//     .then((data) => console.log('data', data))
//     .catch((err) => console.log(err));





// === ASYNC AWAIT ===
const getFakeAPI = async function(){
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
    // return data;
}





// === ERROR HANDLING ===


// Promise :
// resolve dan Reject -> Mengirim Pesan
// then dan catch -> Menangkap Pesan

// Fetch : 
// then dan catch -> Menangkap Pesan

// Async Await :
// throw new Error -> Mengirim Pesan Error
// Try dan Catch -> Menangkap Pesan

// Contoh try and catch
async function getFakeApi3(){
    try{
        const response = await fetch("https://fakestoreapi.com/products");
        console.log(response);
        if(!response.ok){
            throw new Error('Gagal Terkoneksi');
        }
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log(error)
    }
}

getFakeApi3();