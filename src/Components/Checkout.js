import React from "react";

const Checkout = ({ user, total, checkout, setDiscountText, discountText, applyDiscount }) => {
    const handleTextChange = (event) => {
        setDiscountText(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        applyDiscount();
    }

    return (
        <>
            <h3>{user.name}, would you like to complete your purchase?</h3>
            <p>Total Price: £{total}</p>
            <form onSubmit={handleSubmit}>
                <input onChange={handleTextChange} type="text" placeholder="Enter Discount Code" value={discountText} />
                <input type="submit" value="Apply Discount" />
            </form>

        </>
    );
}

export default Checkout;