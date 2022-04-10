import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
     
      // const [prodect , delect] = props
      const {delect , prodect} = props
     
      const {name , img , price , quantity} =prodect

    
      return (
            <div className='prodect-item-container'>
                  <div className="prodect-item-image">
                        <img src={img} alt="" />
                  </div>
                  <div className="prodect-item-main">
                       <div className="prodect-item">
                       <h3>Name: {name.length > 20 ?  name.slice(0, 20): name}</h3>
                        <p><small>Price: ${price}</small></p>
                        <p><small>Quantity: {quantity}</small></p>
                       </div>
                       <div className="item-delect">
                             <button onClick={() => delect(prodect)} className='delect-btn'>Delect</button>
                       </div>
                  </div>
                 
            </div>
      );
};

export default ReviewItem;