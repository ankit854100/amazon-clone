import React from 'react'
import './product.css'
import { useStateValue } from './StateProvider'

function Product({ id, title, price, image, rating }) {

    const [{basket}, dispatch] = useStateValue();
    // console.log(basket);

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating
            }
        });
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => {
                            return <p>⭐</p>
                        })}
                </div>
            </div>

            <img
                src={image}
                alt="product image"
            />
            <button onClick={addToBasket}>add to cart</button>
        </div>
    )
}

export default Product
