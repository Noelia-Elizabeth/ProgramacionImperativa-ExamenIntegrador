/*
    NOTA: Al final encontrará comentada la sección de 'console.log' que permite ver el resultado de cada método.
*/

/* Ejercicio 1 */

const fs = require('fs');

const bicicletasJSON = fs.readFileSync(__dirname + '/BICICLETAS.json', 'UTF-8');

const arrayBicicletas = JSON.parse(bicicletasJSON);

/* Ejercicio 2 */

const carrera = {
    bicicletas : arrayBicicletas,
    bicisPorTanda : 7,
    bicicletasHabilitadas : function () {
        return this.bicicletas.filter(bicicleta => bicicleta.doppingPositivo === false ? bicicleta : '');
    },
    listarBicicletas : function (bicicletas) {
        bicicletas.forEach( bicicleta => console.log('Id: ' + bicicleta.id + ', rodado:' + bicicleta.rodado + ', peso en Kg: ' + bicicleta.pesoEnKg + ', estado: ' + (bicicleta.doppingPositivo === true ? 'descalificado' : 'habilitado')));
    },
    buscarPorId : function (id) {
        return this.bicicletas.find(bicicleta => bicicleta.id === id ? bicicleta : '');
    },
    buscarPorRodado : function (rodado) {
        return this.bicicletasHabilitadas().filter(bicicleta => bicicleta.rodado <= rodado ? bicicleta : '');
    },
    ordenarPorRodado : function () {
        return this.bicicletas.sort((bici1, bici2) => bici1.rodado < bici2.rodado ? -1 : bici1.rodado > bici2.rodado ? 1 : 0);
    },
    generarTanda : function (rodado, peso) {
        return this.buscarPorRodado(rodado).map(bicicleta => bicicleta.pesoEnKg <= peso ? bicicleta : '').slice(0,this.bicisPorTanda);
    },
    calcularPodio : function () {
        let podio = this.generarTanda(100, 100).sort((bici1, bici2) => bici1.puntaje > bici2.puntaje ? -1 : bici1.puntaje < bici2.puntaje ? 1 : 0).slice(0,3);
        console.log('El ganador es: ' + podio[0].ciclista + ', con un puntaje de: ' + podio[0].puntaje + ',\nel segundo puesto es para: ' + podio[1].ciclista + ', con un puntaje de: ' + podio[1].puntaje + '\ny el tercer puesto es para: ' + podio[2].ciclista + ', con un puntaje de: ' + podio[2].puntaje);
    }
}


// Para ver el resultado de los ejercicios descomente las líneas correspondientes.


/*
console.log('---------Ejercicio 1----------');
console.log(arrayBicicletas);

console.log('---------Ejercicio 2A----------');
console.log(carrera.bicicletas);

console.log('---------Ejercicio 2B----------');
console.log('Cantidad máxima de bicicletas por tanda: ' + carrera.bicisPorTanda);

console.log('---------Ejercicio 2C----------');
console.log(carrera.bicicletasHabilitadas());

console.log('---------Ejercicio 2D----------');
carrera.listarBicicletas(carrera.bicicletas);

console.log('---------Ejercicio 2E----------');
console.log(carrera.buscarPorId(3));

console.log('---------Ejercicio 2F----------');
console.log(carrera.buscarPorRodado(60));

console.log('---------Ejercicio 2G----------');
console.log(carrera.ordenarPorRodado());

console.log('---------Ejercicio 2H----------');
console.log(carrera.generarTanda(100, 100));

console.log('---------Ejercicio 2I----------');
carrera.calcularPodio();*/