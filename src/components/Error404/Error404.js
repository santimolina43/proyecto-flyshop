import { Link } from "react-router-dom"

export const Error404 = () => {

    return (
        <div className="container my-5">
                <h2>Ruta no encontrada</h2> 
                <hr/>     
                <Link to="/inicio" className="btn btn-primary">Volver al inicio</Link>
        </div>
    )
}