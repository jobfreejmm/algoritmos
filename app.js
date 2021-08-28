// const producto = [
// {nombre: "salsa", descripcion:"Salsa de tomate"},
// {nombre: "papa", descripcion:"Papas fritas"},
// {nombre: "jugo", descripcion:"jugo de tomate"},
// {nombre: "vaso", descripcion:"vasos de plastico"}


// // ];

// // const  busqueda = "jugo"; 
// // const filtro = producto.filter((producto)=>(
// //   producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 

// //   producto.descripcion.includes(busqueda)

// // ))
// // console.log(filtro[0]);


// function generarNumeros() {
    
//     return Math.floor(Math.random() * 100 -1  + 1) + 1;
// }

// const alicia =  [40, 20,23]
// const bob = [25, 20, 90];
// // for (let i = 1; i <= 3; i++) {
// //     const numeros = generarNumeros();
// //      alicia.push(numeros)
// //      bob.push(generarNumeros()) 
// // }
// function ganador(ali, bob) {
//     let puntos = [];
//     let puntoA = 0;
//     let puntoB = 0;
//     const marcadorAlicia ={}
//     for (let index = 0; index < 3; index++) {
//         if (ali[index] > bob[index]) {
//         puntoA++;
//         console.log(puntoA);
//         }
//         else if (ali[index] != bob[index]  ) {
        
//         puntoB++;
//         }
        
//     }
//     marcadorAlicia.alicia = puntoA;
//     marcadorAlicia.bob = puntoB;
//     puntos.push(marcadorAlicia);
//     return puntos[0];
// };
// console.log(ganador(alicia, bob))
