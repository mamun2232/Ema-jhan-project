import React from 'react';
import useCart from '../../useCart/useCart';
import useProdect from '../../useProdect/UseProdect';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
   const [prodects , setProdect] = useProdect()
   

   const [cart , SetCart] = useCart(prodects)
   const delectItem = prodect => {
         const rest = cart.filter(pd => pd.id !== prodect.id)
         SetCart(rest)
         removeFromDb(prodect.id)

   }
   
      return (
            <div>
                 <div className="shop-container">
                       <div className="prodect-containe">
                            {
                                  cart.map(prodect => <ReviewItem prodect={prodect}
                                    delect={delectItem}
                                  ></ReviewItem>)
                            }
                       </div>
                       <div className="cart-container">
                             <Cart cart={cart}></Cart>
                       </div>
                 </div>
            </div>
      );
};

export default OrderReview;