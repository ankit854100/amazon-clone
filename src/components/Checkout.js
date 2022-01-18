import React from 'react'
import './checkout.css'

import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    console.log(basket);
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__add"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Lawnandgarden/November/BAU/HeaderUnrec/nw_Garden--Outdoor-1500x300.jpg"
                    alt=""
                />
                <div className="checkout__title">
                    <h2>Your shopping basket</h2>
                </div>
                {basket.map((item, index) => {
                    return <CheckoutProduct key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} rating={item.rating} /> 
                })}
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
