
import { FaCartPlus } from 'react-icons/fa';

export const CartWidget = () => {

    return (
        <div className="cart-widget">
            <FaCartPlus className='cart-icon'/>
            <span>0</span>
        </div>
    )
}