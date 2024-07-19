let listMenu = ['Gado-gado', 'Ayam Goreng', 'Rendang'];
let tampilkanMenu = [];
for (let i = 0; i < listMenu.length; i++) {
    switch (listMenu[i]) {
        case 'Gado-gado' :
            tampilkanMenu.push('Gado-gado');
            break;
        case 'Ayam Goreng' :
            tampilkanMenu.push('Ayam Goreng');
            break;
        case 'Rendang' :
            tampilkanMenu.push('Rendang');
            break;
    }
}

console.log(tampilkanMenu);

