import React from "react";

const BasketProduct = ({ product, quantity, removeFromBasket }) => {


    return (
        <div>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <h4>{quantity}</h4>
            <button onClick={() => removeFromBasket(product)}>Remove From Basket</button>
        </div>
    );
}

export default BasketProduct;