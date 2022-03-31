import React from 'react';
import './Prodect.css'

const Prodect = (props) => {
    
    const {cart , prodect} = props
    const {name , seller, price , ratings, img} = prodect
    return (
        <div className='prodect-section'>
            <div className='images'>
                <img src={img} alt="" />
            </div>
            <div className="prodect-info">
            <h3>Name {name}</h3>
            <h4>Price ${price}</h4>
            <p>Seller {seller}</p>
            <p>Rating {ratings}</p>
            
            </div>
            <button onClick={() => cart(prodect)} className='cart-btn'>
                <p>Add To Cart</p>
            
            </button>
        </div>
    );
};

export default Prodect;