import { useState, useEffect } from "react";
import MOCK_DATA from '../../data/MOCK_DATA.json'
import {pedirDatos} from '../../helpers/pedirDatos.js'
import {ItemList} from '../ItemList/ItemList.js'
/*
const pedirDatos = (bool, arr) => { // por lo general no se crean constantes de promesas directamente, sino que se crean
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
*/

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    // console.log(promesa);  // puede estar en estado 'pending', 'fullfiled' o 'reject'

    useEffect(() => { // para que pedir datos no se llame cada vez que renderizo mi componente, lo incluyo dentro de
                      // un efecto de montaje (con el segundo parametro de array vacío)
        setLoading(true);
        pedirDatos(true, MOCK_DATA)
            .then((res) => {   // el .then se ejecuta cuando la promesa cambia a estado resuelta ('fullfiled')
                // console.log(res); // res sera el valor que se le haya pasado al resolve en su llamado 
                setProductos(res);
            })
            .catch((res) => { // el .catch se ejecuta cuando la promesa cambia a estado rechazada ('reject')
                console.log('error'); 
            })
            .finally(() => {  // el .finally se ejecuta siempre, sea rechazado o resuelto, despues del .catch o .then
                setLoading(false);
            })
    }, ([]))

    // MAP
    // const tutores = [{nombre:'Julian', edad:35},{nombre:'Fede', edad:25},{nombre:'Sergio', edad:45}]
    // const arrayresultado = tutores.map( (tutor) => <h2>tutor.nombre</h2>);
    // console.log(arrayresultado)


    return (
        <div className="list-container">
            <h2 className="list-container__title">Productos</h2>
            <hr/>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos}/>

            }
        </div>
    )
}