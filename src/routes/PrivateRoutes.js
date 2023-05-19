import {Routes, Route} from "react-router-dom";
import { Navbar } from '../components/Navbar/Navbar';
import { Nosotros } from '../components/Nosotros/Nosotros.js';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer.js';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from '../components/Cart/Cart';
import { Error404 } from "../components/Error404/Error404";
import { Checkout } from "../components/Checkout/Checkout";


export const PrivateRoutes = () => {

    return (
        <> 
            <Navbar />
            <Routes> 
                <Route path='/' element={ <ItemListContainer /> }/>
                <Route path='/inicio' element={ <ItemListContainer /> }/>
                <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
                <Route path='/detail/:itemId' element={<ItemDetailContainer />}/>
                <Route path='/nosotros' element={ <Nosotros/> }/>
                <Route path='/cart' element={ <Cart/> }/>
                <Route path='/checkout' element={ <Checkout/> }/>
                <Route path='/*' element={ <Error404/> }/> 
           </Routes>
        </>
    )
}