
import {Item} from '../Item/Item.js'
import './ItemList.scss'

export const ItemList = ( {items} ) => {

    return (
            <div className='row items-display'>
                {items.map(producto => <Item key={producto.id} item={producto} />)}
            </div>
    )
}