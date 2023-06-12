import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { collection, addDoc, query, where, documentId, getDocs, writeBatch } from "firebase/firestore"
import { db } from "../../firebase/config"
import './Checkout.scss'
import { GeneralContext } from "../../context/GeneralContext"
import { Payment } from '@mercadopago/sdk-react';
import { Wallet } from '@mercadopago/sdk-react';

import { initMercadoPago } from '@mercadopago/sdk-react'
initMercadoPago('TEST-289cce15-c872-4179-9b20-5c0ecca1cb73');


export const Checkout2 = () => {
    initMercadoPago('TEST-289cce15-c872-4179-9b20-5c0ecca1cb73');

   // 
    const mp = new window.MercadoPago("TEST-289cce15-c872-4179-9b20-5c0ecca1cb73");
         
const initialization = {
    amount: 100,
    preferenceId: "<PREFERENCE_ID>",
   };
   const customization = {
    paymentMethods: {
      ticket: "all",
      creditCard: "all",
      debitCard: "all",
      mercadoPago: "all",
    },
   };
   const onSubmit = async (
    { selectedPaymentMethod, formData }
   ) => {
    // await loadMercadoPago();
    // callback llamado al hacer clic en el botón enviar datos
    return new Promise((resolve, reject) => {
      fetch("/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((response) => {
          // recibir el resultado del pago
          resolve();
        })
        .catch((error) => {
          // manejar la respuesta de error al intentar crear el pago
          reject();
        });
    });
   };
   const onError = async (error) => {
    // callback llamado para todos los casos de error de Brick
    console.log(error);
   };
   const onReady = async () => {
    /*
      Callback llamado cuando el Brick está listo.
      Aquí puede ocultar cargamentos de su sitio, por ejemplo.
    */
   };





    return (
        <div id="wallet_container" className="container my-5 general-container">
            <Payment
                initialization={initialization}
                customization={customization}
                onSubmit={onSubmit}
                onReady={onReady}
                onError={onError}
            />
            <div>
                <Wallet
                    onSubmit={onSubmit}
                    onReady={onReady}
                    onError={onError}
                />
            </div>
        </div>
        /*
        <div className="container my-5 general-container">
            <h2 className="bottom-line">Ingresa tus datos</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleValues}
                    name="nombre"
                    value={values.nombre}
                    type="text"
                    className="form-control my-2"
                    placeholder="Tu nombre"
                />
                <input 
                    onChange={handleValues}
                    name="direccion"
                    value={values.direccion}
                    type="text"
                    className="form-control my-2"
                    placeholder="Tu dirección"
                />
                <input 
                    onChange={handleValues}
                    name="email"
                    value={values.email}
                    type="email"
                    className="form-control my-2"
                    placeholder="Tu email"
                />

                <button className="btn btn-primary" type="submit">Enviar</button>
            </form> 
        </div>
*/

    )
}