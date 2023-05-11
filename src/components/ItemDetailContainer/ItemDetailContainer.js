import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../helpers/pedirDatos";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import MOCK_DATA from '../../data/productos-flyshop.json'
import { Loader } from "../Loader/Loader";


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    const {itemId} = useParams()

    useEffect(() => {
        setLoading(true);

        pedirDatos(true, MOCK_DATA)
            .then((res) => {
                setItem(res.find((prod) => prod.id === Number(itemId)) )
            })
            .finally(() => {
                setLoading(false);
            })
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