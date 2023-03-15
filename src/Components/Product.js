import React from "react";

const Product = ({ product, addToBasket }) => {


    return (
        <div>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToBasket(product)}>Add to basket</button>
        </div>
    );
}

export default Product;