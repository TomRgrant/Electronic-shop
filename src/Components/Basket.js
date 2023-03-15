import React from "react";
import BasketProduct from "./BasketProduct";
import { Link } from "react-router-dom";

const Basket = ({ filteredProducts, user, removeFromBasket, total }) => {

    const basketNodes = filteredProducts.map((product) => {
        const indexInBasket = user.basket.findIndex((item) => item.id === product.id);
        const quantity = user.basket[indexInBasket].quantity;
        return <BasketProduct key={product.id} product={product} quantity={quantity} removeFromBasket={removeFromBasket} />
    });


    return (<div>
        {basketNodes}
        <p>{total}</p>
        <Link to="/checkout">
            <button>Checkout!</button>
        </Link>
    </div>);
}

export default Basket;