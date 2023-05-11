


export const pedirDatos = (bool, arr) => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bool) {
                resolve(arr);
            } else {
                reject("promesa rechazada");
            }
            }, 500)
        })
}