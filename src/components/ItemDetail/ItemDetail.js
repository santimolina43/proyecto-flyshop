
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
        <div className="container my-5 general-container">
            <h2 className="bottom-line">{item.name}</h2>
            <div className="item-details">
                <img className="itemdetail-img" src={item.img} alt={item.name} />
                <div className="stock">
                    <p>Stock: {item.stock}</p>
                    {item.category === "accesorios" 
                        ? <Select 
                            set={setTalle}
                            options={talles}
                            />
                        : null
                    }
                </div>
                <p className="precio">Precio: ${item.price}</p>
                <br/>
                    {
                        item.stock === 0
                        ?   <div className="items-no-stock">
                                <h4>No hay stock de este producto</h4>
                                <Link to="/inicio" className="btn btn-success">Volver al inicio</Link>
                            </div>
                        :   isInCart(item.id)
                                ?   <div className="items-añadidos">
                                        <Link to="/cart" className="btn btn-success">Ir al carrito</Link> 
                                        <Link to="/inicio" className="btn btn-continuar">Seguir comprando</Link>
                                    </div>
                                :   <ItemCount 
                                        max={item.stock}
                                        cantidad={cantidad}
                                        setCantidad={setCantidad}
                                        agregar={handleAgregar}
                                    />
                    }
                <br />
            </div>
            <p>{item.description}</p>



        </div>
    )
}