import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    

    let total = 0
    let shipping = 0

    for(const prodect of cart){
    total = total + prodect.price
    shipping = shipping + prodect.shipping
    }
    const task = parseFloat((total * 0.1).toFixed(2))

    const grandTotal = total + shipping + task



    return (
        <div className='cart'>
            <h3>Prodect Sumarry</h3>
            <p>Select Item: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Shopping Charge: {shipping} </p>
            <p>Task: {task}</p>

            <h3>Grand Total: {grandTotal}</h3>

        </div>
    );
};

export default Cart;