
import { Navbar } from './components/Navbar/Navbar';
import './styles/index.scss';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer.js';
import {Nosotros} from './components/Nosotros/Nosotros.js';
import {Error404} from './components/Error404/Error404.js';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Routes> 
            <Route path='/' element={ <ItemListContainer /> }/>
            <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
            <Route path='/detail/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/nosotros' element={ <Nosotros/> }/>
            <Route path='*' element={ <Error404/> }/> 
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
