// Async Await
// Async akan selalu mengembalikan promise
async function getAsync(strings){
    return `Input yang diberikan : ${strings}`;
}
getAsync("Dimas").then(result => console.log(result)); // menggunakan .then untuk mengambil nilai promise yang fulfilled

// await menandakan bahwa di dalam function tersebut akan ada asynchronous function yang di panggil
async function getFakeAPI(){
    let response = await fetch('https://fakestoreapi.com/products'); // await menggantikan then, dimana fungsinya akan terlihat seperti asynchronous
    let data = await response.json() // menandakan bahwa data yang telah di dapat akan berupa promise, dan dikembalikan ke bentuk json
    console.log(data);
}

getFakeAPI(); 

// Bagusnya menggunakan async await dari pada promise .then

// Error Handling
// : ketika sebuah promise

// Error handling Promise then and catch
fetch('https://fakestoreapi.com/products')
    .then(result => result.json())
    .then(responseJSON => console.log(responseJSON))
    .catch(error => console.log('Error :', error));

// Error Handling Promise Async Await
async function getFakeApi2(){
    try {
        const response = await fetch('https://fakestoreapi.com/products/11212');
        if(!response.ok){
            throw new Error('Failed to fetch API');
        }

        const cekDataAPI = await response.text();
        if(cekDataAPI.trim() === ''){
            throw new Error('Data not found');
        }

        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log('Error :', error);
    }
}

getFakeApi2();