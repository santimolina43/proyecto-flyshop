import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loader } from "../Loader/Loader";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config.js";
import { GeneralContext } from "../../context/GeneralContext";


export const ItemDetailContainer = () => {

    const {desfijarFooter} = useContext(GeneralContext);
    desfijarFooter();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true);
         const docRef = doc(db, "productos", itemId)
         getDoc(docRef)
             .then((doc) => {
                 setItem({
                     id: doc.id,
                     ...doc.data()
                 })
             })
             .finally(() => setLoading(false))
    }, [itemId]);

    return (
        <div className="container my-5">
            {
                loading
                    ? <Loader/>
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}