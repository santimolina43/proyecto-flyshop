


export const pedirDatos = (bool, arr) => { // por lo general no se crean constantes de promesas directamente, sino que se crean
                                    // funciones que retornan una promesa, entonces luego nosotros llamamos a esa funcion,
                                    // pasandole parámetros de entrada, y le hacemos un .then y .catch a la promesa que nos
                                    // devuelve la funcion
    return new Promise((resolve, reject) => {  // resolve y reject son las dos funciones que se ejecutaran
        // cuerpo de la promesa                   dependiendo del resultado de la promesa (nombres convencionales) 
        setTimeout(() => {
            if (bool) {
                resolve(arr);
            } else {
                reject("promesa rechazada");
            }
            }, 3000)
        })
}