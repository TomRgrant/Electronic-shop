import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {

    const basketTotal = user.basket.reduce((total, product) => {
        return total += product.quantity;
    }, 0);

    return (
        <nav>
            <Link to="/">Products</Link>
            <Link to="/basket"> {user.name}'s Basket {basketTotal}</Link>
        </nav>
    );
};

export default NavBar;