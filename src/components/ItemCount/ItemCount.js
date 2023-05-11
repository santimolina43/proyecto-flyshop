
export const ItemCount = ({max, cantidad, setCantidad, agregar}) => {

    const handleRestar = () => {
        (cantidad > 0) && setCantidad (cantidad - 1)
    }

    const handleSumar = () => {
        (cantidad < max) && setCantidad (cantidad + 1)
    }
    return (
        <div>
            <button 
                onClick={handleRestar} 
                className={`btn ${cantidad <= 1 ? "btn-outline-danger" : "btn-outline-primary"}`}
                disabled={cantidad===1}> {/* condiciono las clases del componente, solo algunas, no todas */}
                - 
            </button>
            <span className="mx-3">{cantidad}</span>
            <button 
                onClick={handleSumar} 
                className={`btn ${cantidad === max ? "btn-outline-danger" : "btn-outline-primary"}`}
                disabled={cantidad===max}>  
                    + 
            </button>

            <br/>

            <button 
                onClick={agregar} 
                className="btn btn-success">
                    Agregar al carrito
                </button>

        </div>
    )
}

