
import {Item} from '../Item/Item.js'

export const ItemList = ( {items} ) => {

    return (
            <div className='row'>
                {items.map(producto => <Item key={producto.id} item={producto} />)}
            </div>
    )
}