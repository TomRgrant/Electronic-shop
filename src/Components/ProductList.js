import React from "react";
import Product from "./Product";


const ProductList = ({ products, addToBasket }) => {

    const productNodes = products.map(product => {
        return <Product key={product.id} product={product} addToBasket={addToBasket} />
    });

    return (
        <div>
            {productNodes}
        </div>
    );
}

export default ProductList;