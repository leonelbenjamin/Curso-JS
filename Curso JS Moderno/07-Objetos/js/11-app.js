const televisor  = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function () {
        console.log(`El producto: ${this.nombre} tiene un valor de ${this.precio} `);
    }
}

const tablet  = {
    nombre: 'tablet',
    precio: 500,
    disponible: true,
    mostrarInfo: function () {
        console.log(`El producto: ${this.nombre} tiene un valor de ${this.precio} `);
    }
}

televisor.mostrarInfo();
tablet.mostrarInfo();

