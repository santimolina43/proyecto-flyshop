import { Link } from "react-router-dom";

export const Item = ( {item} ) => {


    return (
        <div className='col-3 m-2'> 
            <h2>{item.name}</h2>
            <img src={item.img} alt='error'/>
            <p>{item.category}</p>
            <p>Precio: ${item.price}</p>
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
        </div>
    )
}


