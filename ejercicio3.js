/*
Ejercicio 3: Uso de async y await para Manejar Promesas
Descripción:
Reescribe el ejercicio anterior Utilizando async y await en lugar de .then() y .catch() 
para manejar la promesa devuelta por consultarBaseDeDatos().
Instrucciones:
1. Cree una función ejecutarConsulta() declarada con async.
2. Dentro de la función, Utilice await para llamar a consultarBaseDeDatos().
3. Maneja la resolución y el recHagao de la promesa Utilizando try...catch.
4. Llama a ejecutarConsulta() para ejecutar el código.
*/


function consultarBaseDeDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numeroAleatorio = Math.round(Math.random() * 100);
            if (numeroAleatorio % 2 === 0) {
                resolve("Consulta exitosa"); 
            } else {
                reject("Error en la consulta"); 
            }
        }, 3000); 
    });
}

const ejecutarConsulta = async () => {
    try {
        const resultado = await consultarBaseDeDatos();
        console.log(resultado);
    
    } catch (error) {
        console.log(error);
    }
    
};

ejecutarConsulta();