import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoreCard } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Prodect from '../Prodect/Prodect';
import './Shop.css'

const Shop = () => {
    const [prodects, SetProdect] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => SetProdect(data))
    }, [])



    const [cart, SetCart] = useState([])

    useEffect(() => {
        const storeCart = getStoreCard()
        const saveCard = []
        for (const id in storeCart) {
            const addedCart = prodects.find(prodect => prodect.id === id)
            if (addedCart) {
                const quantity = storeCart[id]
                addedCart.quantity = quantity
                saveCard.push(addedCart)
            }
        }
        SetCart(saveCard)
    }, [prodects])


    const addCart = (prodect) => {
        console.log(prodect);

        const newCart = [...cart, prodect]
        SetCart(newCart)
        addToDb(prodect.id)
        // let newCart = []
        // const exsit = prodect.filter(pro => pro.id === prodect.id)
        // if(exsit){
        //     prodect.quantity = 1
        //     newCart = [...cart , prodect]
        // }
        // else{
        //     const rest = prodect.find(pro => pro.id !== prodect.id)
        //     prodect.quantity += 1
        //     newCart =[...rest, prodect]
        // }
        // SetCart(newCart)
        // addToDb(prodect.id)


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
                <Cart cart={cart}>

                    <button>Review Order </button>



                </Cart>

            </div>

        </div>
    );
};

export default Shop;