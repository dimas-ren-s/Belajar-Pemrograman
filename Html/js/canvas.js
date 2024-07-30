// Menentukan canvas
const myCanvas = document.querySelector('#myCanvas');

// Mengatur ukuran canvas
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

// Mengatur konteks 2D di canvas
const myContext = myCanvas.getContext('2d')

// Mengatur warna dan border canvas
myContext.fillStyle = 'pink';
myContext.strokeStyle = '#333';
myContext.lineWidth = '5';

// Membuat Rectangle
myContext.rect(50, 50, 100, 100);
myContext.fill();
myContext.stroke();

// Membuat Lingkaran
myContext.fillStyle = 'green';
myContext.beginPath(); // untuk menginisialisasi konteks shape yang baru
myContext.arc(250, 100, 50, 0, 2 * Math.PI);
myContext.fill();
myContext.stroke();

// Membuat Segitiga
myContext.fillStyle = 'blue';
myContext.beginPath();
myContext.moveTo(400, 50);
myContext.lineTo(450, 150);
myContext.lineTo(350, 150);
// myContext.lineTo(400, 50); // atau myContext.closePath() // berfungsi untuk menutup line;
myContext.closePath(); // disarankan menggunakan .closePath() lebih mulus sudutnya
myContext.fill();
myContext.stroke();

// Membuat Lingkaran untuk Animasi dengan canvas API cara 1 : Function Biasa
// 1. Inisialisasi variable global
let xCoordinate = 550;
let yCoordinate = 100;
let xSpeed = ySpeed = 5;
let radius = 50;

// 2. inisialisasi function
function draw(){
    window.requestAnimationFrame(draw); // callback agar diputar terus menerus yang membuat menjadi animasi (canvas API)
    myContext.clearRect(0, 0, innerWidth, innerHeight); // membersihkan arc sebelumnya, jadi terlihat seperti animasi tanpa ada bayangan
    myContext.fillStyle = 'green';
    myContext.beginPath();
    myContext.arc(xCoordinate, yCoordinate, radius, 0, 2 * Math.PI); // (0, 2 * Math.PI digunakan untuk membuat lingkaran sempurna)
    myContext.fill();
    // myContext.stroke();

    if(xCoordinate + radius > innerWidth || xCoordinate - radius < 0){
        xSpeed = -xSpeed;
    }

    if(yCoordinate + radius > innerHeight || yCoordinate - radius < 0){
        ySpeed = -ySpeed;
    }

    xCoordinate += xSpeed;
    yCoordinate += ySpeed;
}

// draw(); 

// Membuat Lingkaran untuk Animasi dengan canvas API cara 2 : Closure
// 1. Inisialisasi function expression
const drawClosure = (function(){
    // 2. Inisialiasi variable private
    let xCoordinate = 550;
    let yCoordinate = 100;
    let xSpeed = ySpeed = 5;
    let radius = 50;
    // 3. Return function draw
    return function (){
        window.requestAnimationFrame(drawClosure); // callback agar diputar terus menerus yang membuat menjadi animasi (canvas API)
        myContext.clearRect(0, 0, innerWidth, innerHeight); // membersihkan arc sebelumnya, jadi terlihat seperti animasi tanpa ada bayangan
        myContext.fillStyle = 'green';
        myContext.beginPath();
        myContext.arc(xCoordinate, yCoordinate, radius, 0, 2 * Math.PI); // (0, 2 * Math.PI digunakan untuk membuat lingkaran sempurna)
        myContext.fill();
        // myContext.stroke();

        if(xCoordinate + radius > innerWidth || xCoordinate - radius < 0){
            xSpeed = -xSpeed;
        }

        if(yCoordinate + radius > innerHeight || yCoordinate - radius < 0){
            ySpeed = -ySpeed;
        }

        xCoordinate += xSpeed;
        yCoordinate += ySpeed;

        }
})();

drawClosure();