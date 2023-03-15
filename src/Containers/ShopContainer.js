import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Basket from "../Components/Basket";
import ProductList from "../Components/ProductList";
import NavBar from "../Components/NavBar";
import Checkout from "../Components/Checkout";


const ShopContainer = () => {

    const [products, setProducts] = useState([]);
    const [user, setUser] = useState({ name: "Harry", basket: [] });
    const [discountCodes, setDiscountCodes] = useState({ 'Discount': 10, 'moMoney': 50 });
    const [discount, setDiscount] = useState("");
    const [discountText, setDiscountText] = useState("");

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products/category/electronics')
            const data = await response.json();
            setProducts(data);
        }
        getProducts();
    }, [])



    const addToBasket = (product) => {
        const newUser = { ...user };
        const basket = newUser.basket;

        const indexInBasket = basket.findIndex((itemObject) => product.id === itemObject.id);
        if (indexInBasket === -1) {
            basket.push({ id: product.id, quantity: 1 });
        } else {
            basket[indexInBasket].quantity++;
        }

        setUser(newUser);
    };

    const removeFromBasket = (product) => {
        const newUser = { ...user };
        const basket = newUser.basket;

        const indexInBasket = basket.findIndex((itemObject) => product.id === itemObject.id);
        if (basket[indexInBasket].quantity === 1) {
            basket.splice(indexInBasket, 1);
        } else {
            basket[indexInBasket].quantity--;
        }
        setUser(newUser);
    };



    const filterProducts = () => {
        const filterBy = user.basket.map(product => product.id)
        const filtered = products.filter((product) => filterBy.includes(product.id))
        return filtered;
    }

    const filteredProducts = filterProducts();

    const calculateTotal = () => {
        const total = user.basket.reduce((total, basketProduct) => {
            const productIndex = filteredProducts.findIndex((product) => basketProduct.id === product.id);
            const productPrice = filteredProducts[productIndex].price;
            const quantityPrice = productPrice * basketProduct.quantity;
            return total += quantityPrice
        }, 0);
        // return total;
        if (discount !== "") {
            return Math.round(total - (total / 100 * discountCodes[discount]));
        } else return total;
    };

    const applyDiscount = () => {
        if (Object.keys(discountCodes).includes(discountText)) {
            setDiscount(discountText)
        }
    }
    const total = calculateTotal();

    if (!products.length) return 'Loading...'



    return (
        <Router>
            <NavBar user={user} />
            <Routes>
                <Route path="/" element={<ProductList products={products} addToBasket={addToBasket} />} />
                <Route path="/basket" element={<Basket user={user} filteredProducts={filteredProducts} removeFromBasket={removeFromBasket} total={total} />} />
                <Route path="/checkout" element={<Checkout user={user} total={total} discountText={discountText} setDiscountText={setDiscountText} applyDiscount={applyDiscount} />} />
            </Routes>
        </Router>
    )
}

export default ShopContainer;