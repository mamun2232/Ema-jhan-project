import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCard } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Prodect from '../Prodect/Prodect';
import './Shop.css'

const Shop = () => {
    const [prodects , SetProdect] = useState([])
     useEffect( () =>{
         fetch('products.json')
         .then(res => res.json())
         .then(data => SetProdect(data))
     },[])



     const [cart , SetCart] = useState([])
     
     useEffect(()=>{
         const storeCart = getStoreCard()
         const saveCard = []
         for(const id in storeCart){
             const addedCart = prodects.find(prodect => prodect.id === id)
             if(addedCart){
                 const quantity = storeCart[id]
                 addedCart.quantity = quantity
                 saveCard.push(addedCart)
             }
         }
         SetCart(saveCard)
     },[prodects])


    const addCart = (prodect) =>{
        const newCart = [...cart , prodect]
        SetCart(newCart)
        addToDb(prodect.id)
        

    }

    return (
        <div className='shop-container'>

            <div className="prodect-container">
                
                {
                    prodects.map(prodect => <Prodect

                        key={prodect.id}
                        prodect={prodect}
                        cart={addCart}
                    >
                    </Prodect>)
                }
            </div>
            <div className="cart-container">
            <Cart cart={cart}></Cart>
                
            </div>
            
        </div>
    );
};

export default Shop;