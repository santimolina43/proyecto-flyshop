
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import { Select } from "../Select/Select";
import { Link } from "react-router-dom";
import "./ItemDetail.scss"

const talles = [
    {
        value: 'small',
        label: 'S'
    },  
    {
        value: 'medium',
        label: 'M'
    },
    {
        value: 'large',
        label: 'L'
    },
    {
        value: 'extra large',
        label: 'XL'
    }
]

export const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = useState(1);
    const [talle, setTalle] = useState("small");
    const {agregarAlCarrito, isInCart} = useContext(CartContext)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad, 
            talle
        }
        agregarAlCarrito(newItem)    
    }    


    return (
        <div>
            <h2>{item.name}</h2>
            <hr />
            <img className="itemdetail-img" src={item.img} alt={item.name} />
            <p>Stock: {item.stock}</p>
            <p>Precio: ${item.price}</p>
            {item.category === "accesorios" 
                ? <Select 
                    set={setTalle}
                    options={talles}
                    />
                : null
            }
            <br/>
            {
                item.stock === 0
                ?   <h4>No hay stock de este producto</h4>
                :   isInCart(item.id)
                        ?   <Link to="/cart" className="btn btn-success">Ir al carrito</Link> 
                        :   <ItemCount 
                                max={item.stock}
                                cantidad={cantidad}
                                setCantidad={setCantidad}
                                agregar={handleAgregar}
                            />
            }
            

            <br />
            <p>{item.description}</p>



        </div>
    )
}