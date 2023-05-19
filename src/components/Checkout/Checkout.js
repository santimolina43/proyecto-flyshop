import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { collection, addDoc, query, where, documentId, getDocs, writeBatch } from "firebase/firestore"
import { db } from "../../firebase/config"

export const Checkout = () => {

    const {cart, totalCarrito, vaciarCarrito} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleValues = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // validaciones de formulario
        if (values.nombre.length < 3) {
            alert("El nombre es muy corto")
            return
        }
        if (values.direccion.length < 6) {
            alert("La direccion es muy corto")
            return
        }
        if (values.email.length < 6) {
            alert("El email es muy corto")
            return
        }
        
        const orden = {
            cleinte: values,
            items: cart,
            total: totalCarrito(),
            fechayhora: new Date()
        }

        const batch = writeBatch(db)

        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))

        const outOfStock = []

        const productos = await getDocs(q)
        
        productos.docs.forEach((doc) => {
            const item = cart.find((prod) => prod.id === doc.id)

            if (doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                    outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()
            const { id } = await addDoc(ordersRef, orden)
            setOrderId(id)
            vaciarCarrito()
        } else {
            alert("Hay items sin stock: " + outOfStock.map(i => i.name).join(', '))
        }  

    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Tu compra se registró exitosamente!</h2>
                <hr/>
                <p>Guardá tu número de orden: <strong>{orderId}</strong></p>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2>Ingresa tus datos</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleValues}
                    name="nombre"
                    value={values.nombre}
                    type="text"
                    className="form-control my-2"
                    placeholder="Tu nombre"
                />
                <input 
                    onChange={handleValues}
                    name="direccion"
                    value={values.direccion}
                    type="text"
                    className="form-control my-2"
                    placeholder="Tu dirección"
                />
                <input 
                    onChange={handleValues}
                    name="email"
                    value={values.email}
                    type="email"
                    className="form-control my-2"
                    placeholder="Tu email"
                />

                <button className="btn btn-primary" type="submit">Enviar</button>
            </form> 
        </div>
    )
}