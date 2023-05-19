import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import './Cart.scss'

export const Cart = () => {

    const {cart, vaciarCarrito, removerItem, totalCarrito, editCantidad} = useContext(CartContext); 

    if (cart.length === 0) {
        return (             
            <div className="container my-5">
                <h2>Tu carrito está vacío</h2> 
                <hr/>     
                <Link to="/inicio" className="btn btn-primary">Volver</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <img className="item-img" src={item.img} alt="error"/>
                        <div>
                            {
                                item.cantidad > 1 // ejemplo de un renderizado condicional usando un inline con fragment (&&)
                                    && <button onClick={() => (editCantidad(item.id, -1))} className="btn btn-outline-primary"> - </button>
                            }
                            <small>Cantidad: {item.cantidad} - Precio por unidad: {item.price}</small>
                            {
                                item.cantidad < item.stock
                                    && <button onClick={() => (editCantidad(item.id, 1))} className="btn btn-primary"> + </button>
                            }
                        </div>
                        <p>Precio total por item: {item.cantidad * item.price}</p>
                        <button onClick={() => (removerItem(item.id))} className="btn btn-danger"><BsFillTrashFill/></button>
                        <hr/>
                    </div>
                ))
            }
            <h3>TOTAL CARRITO: {totalCarrito()}</h3>
            <Link to="/checkout" className="btn btn-success m-2">Finalizar compra</Link>         
            <button onClick={vaciarCarrito} className="btn btn-danger m-2">Vaciar carrito</button>
        </div>

    )
}