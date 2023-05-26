import { Link } from "react-router-dom";
import "./Item.scss"

export const Item = ( {item} ) => {


    return (
        <div className='col-3 m-4 item-display'> 
            {/* <h2>{item.name}</h2> */}
            <img className="item-img" src={item.img} alt='error'/>
            <p>{item.name}</p>
            <p>Precio: ${item.price}</p>
            <div className="btn-ver">
                <Link to={`/detail/${item.id}`} className='btn btn-primary btn-ver-mas'>Ver más</Link>
            </div>
        </div>
    )
}


