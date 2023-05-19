import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore"
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

    const handleSubmit = (e) => {
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
        
        // cart.forEach((item) => {
        //     const docRef = doc(db, "productos", item.id)

        //     getDoc(docRef)
        //         .then((doc) => {
        //             let stock = doc.data().stock
                    
        //             if (stock - item.cantidad > 0) {
        //                 updateDoc(docRef,{
        //                     stock: stock - item.cantidad 
        //                 })
        //             } else {
        //                 alert("No hay stock suficiente de " + doc.data().name)
        //             }
        //         })

        // })


        const ordersRef = collection(db, "orders")
        // const productosRef = collection(db, "productos")

        

        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            })
            .catch(() => {
                console.log("error")
            })
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