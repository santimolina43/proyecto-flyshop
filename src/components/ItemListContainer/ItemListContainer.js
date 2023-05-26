import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import {ItemList} from '../ItemList/ItemList.js';
import { Loader } from "../Loader/Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config.js";
import './ItemListContainer.scss'
import { GeneralContext } from "../../context/GeneralContext.js";


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();
    const {desfijarFooter} = useContext(GeneralContext);

    desfijarFooter()

    useEffect(() => { 
        setLoading(true);
        const productosRef = collection(db, "productos")
        const q = categoryId 
                    ? query(productosRef, where("category", "==", categoryId))
                    : productosRef
        getDocs(q)
            .then((res) => {
                setProductos(res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            })
            .finally(() => setLoading(false))

    }, ([categoryId]))

    return (
        <div className="container my-5 general-container">
            <h2 className="list-container__title bottom-line">Productos</h2>
            {
                loading
                    ? <Loader />
                    : <ItemList items={productos}/>

            }
        </div>
    )
}