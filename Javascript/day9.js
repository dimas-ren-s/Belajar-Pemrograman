// angkot , proses menggunakan function

let a = [10, 5];
let b = a.findIndex(e => e === undefined);
console.log(b);

let c = a.splice(0,2,11);
console.log(c);

let d = a.includes(9);
console.log(d);

function Angkot(jalur, penumpang, penghasilan){
    this.jalur = jalur;
    this.penumpang = penumpang;
    this.penghasilan = penghasilan;

    this.naikPenumpang = function(namaPenumpang){
        let cekPenumpang = this.penumpang.includes(namaPenumpang);
        if(cekPenumpang){
            return "Penumpang sudah ada"
        }
        let cekIndex = this.penumpang.findIndex(e => e === undefined);
        cekIndex !== -1 ? this.penumpang.splice(cekIndex, 1, namaPenumpang) : this.penumpang.push(namaPenumpang);
        return penumpang;
    };

    this.turunPenumpang = function(namaPenumpang, uangDiterima){
        let cekKosong = this.penumpang.filter(e => e !== undefined);
        if(!cekKosong.length){
            return "Angkot Kosong";
        }

        let cekPenumpang = this.penumpang.includes(namaPenumpang);
        if(!cekPenumpang){
            return "Penumpang tidak ditemukan";
        }
        let cekIndex = this.penumpang.findIndex(e => e === namaPenumpang);
        this.penumpang.splice(cekIndex, 1, undefined);
        this.penghasilan += uangDiterima;
        return [
            "List Penumpang : " + this.penumpang.join(', '),
            "Penghasilan : " + this.penghasilan
        ];
    }
}

let angkot1 = new Angkot('Bandung - Sukasari', [], 0);
console.log(angkot1);
angkot1.naikPenumpang('Dimas');
console.log(angkot1);
angkot1.naikPenumpang('Jamal');
console.log(angkot1);
angkot1.turunPenumpang('Andi', 1000);
console.log(angkot1.turunPenumpang('Andi', 1000));
console.log(angkot1);
angkot1.turunPenumpang('Dimas', 3000);
console.log(angkot1);
angkot1.naikPenumpang('Dimas');
console.log(angkot1);