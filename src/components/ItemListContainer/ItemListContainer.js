import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {ItemList} from '../ItemList/ItemList.js';
import { Loader } from "../Loader/Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config.js";


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

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