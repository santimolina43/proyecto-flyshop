

export const Item = ( {item} ) => {


    return (
        <div className='col-3 m-2'> {/*Idealmente, debemos incluir en cada elemento la 
                                                    propiedad key, que marque la identidad del elemento.*/}
            <h2>{item.name}</h2>
            <img src={item.img} alt='error'/>
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
            <button className='btn btn-primary'>Ver más</button>
        </div>
    )
}


