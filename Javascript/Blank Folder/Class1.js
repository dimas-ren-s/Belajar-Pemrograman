// Class
class Mahasiswa {
    constructor(nama, nip, knowledge){
        this.nama = nama;
        this.nip = nip;
        this.knowledge = knowledge;
    }

    belajar(jam){
        this.knowledge += jam;
        return `Pengetahuan bertambah + ${jam}, tersisa ${this.knowledge}`;
    }

    main(jam){
        this.knowledge -= jam;
        return `Pengetahuan berkurang - ${jam}, tersisa ${this.knowledge}`
    }
}

let dimas = new Mahasiswa("Dimas", 1908107010040, 10);
console.log(dimas);
dimas.belajar(2);
console.log(dimas.main(5));