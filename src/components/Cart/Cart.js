import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import './Cart.scss'
import { GeneralContext } from "../../context/GeneralContext"

export const Cart = () => {

    const {cart, vaciarCarrito, removerItem, totalCarrito, editCantidad} = useContext(CartContext); 
    const {fijarFooter, desfijarFooter} = useContext(GeneralContext)

    if (cart.length === 0) {

        fijarFooter()

        return (             
            <div className="container my-5 general-container">
                <h2 className="bottom-line">Tu carrito está vacío</h2> 
                <Link to="/inicio" className="btn btn-success">Volver</Link>
                <div className="space"></div>
            </div>
        )
    }

    desfijarFooter()

    return (
        <div className="container my-5 general-container">
            <h2 className="bottom-line">Tu compra</h2>
            {
                cart.map((item) => (
                    <div className="bottom-line" key={item.id}>
                        <div className="cart-item-header">
                            <h4>{item.name}</h4>
                            <button onClick={() => (removerItem(item.id))} className="btn btn-danger"><BsFillTrashFill/></button>
                        </div>
                        <div className="cart-item">
                            <img className="item-img" src={item.img} alt="error"/>
                            <p>Precio por unidad: ${item.price}</p>
                            <div>
                                {
                                    item.cantidad > 1 // ejemplo de un renderizado condicional usando un inline con fragment (&&)
                                        ? <button onClick={() => (editCantidad(item.id, -1))} className="btn yes-stock"> - </button>
                                        : <button className="btn no-stock"> - </button>
                                }
                                <small className="cantidad">{item.cantidad}</small>
                                {
                                    item.cantidad < item.stock
                                        ? <button onClick={() => (editCantidad(item.id, 1))} className="btn yes-stock"> + </button>
                                        : <button className="btn no-stock"> + </button>
                                }
                            </div>
                            <p className="item-total">Total: ${item.cantidad * item.price}</p>
                        </div>
                    </div>
                ))
            }
            <h3>TOTAL CARRITO: ${totalCarrito()}</h3>
            <Link to="/checkout" className="btn btn-success m-2">Finalizar compra</Link>         
            <button onClick={vaciarCarrito} className="btn btn-danger m-2">Vaciar carrito</button>
        </div>

    )
}