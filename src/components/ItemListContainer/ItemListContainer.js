import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MOCK_DATA from '../../data/productos-flyshop.json';
import {pedirDatos} from '../../helpers/pedirDatos.js';
import {ItemList} from '../ItemList/ItemList.js';
import { Loader } from "../Loader/Loader";

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(() => { 
        setLoading(true);
        pedirDatos(true, MOCK_DATA)
            .then((res) => { 
                if (categoryId) {
                    setProductos(res.filter((prod) => prod.category === categoryId));
                } else {
                    setProductos(res);
                }
            })
            .catch((res) => { 
                console.log('error'); 
            })
            .finally(() => { 
                setLoading(false);
            })
    }, ([categoryId]))

    return (
        <div className="list-container">
            <h2 className="list-container__title">Productos</h2>
            <hr/>
            {
                loading
                    ? <Loader />
                    : <ItemList items={productos}/>

            }
        </div>
    )
}