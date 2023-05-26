
import '../ItemDetail/ItemDetail.scss'

export const ItemCount = ({max, cantidad, setCantidad, agregar}) => {

    const handleRestar = () => {
        (cantidad > 0) && setCantidad (cantidad - 1)
    }

    const handleSumar = () => {
        (cantidad < max) && setCantidad (cantidad + 1)
    }
    return (
        <div className="contador">
            <div className='botones-cantidad'>
                <button 
                    onClick={handleRestar} 
                    className={`btn ${cantidad <= 1 ? "no-stock" : "yes-stock"}`}
                    disabled={cantidad===1}> {/* condiciono las clases del componente, solo algunas, no todas */}
                    - 
                </button>
                <span className="mx-3">{cantidad}</span>
                <button 
                    onClick={handleSumar} 
                    className={`btn ${cantidad === max ? "no-stock" : "yes-stock"}`}
                    disabled={cantidad===max}>  
                    + 
                </button>
            </div>
            <br/>
            <button 
                onClick={agregar} 
                className="btn btn-success">
                    Agregar al carrito
            </button>

        </div>
    )
}

