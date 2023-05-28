import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveToCart }) => {
//    condition
    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one item !!!</p>
    }
    else if (cart.length === 1) {
       message = <div>
         <h3>amar jonno akta nao</h3>
        <p>tomar nijer jonno akta nao</p>
        <p><small>amar jonno arekta nao, Please</small></p>
       </div>
    }
    else {
        message = <p>Thanks for buying! </p>
    }
    return (
        <div className='container-cart'>
            <h4 className={cart.length ===2 ? 'orange' : 'purple'}>Order Summary</h4>
            <h5 className={` bold ${cart.length ===2 ? 'blue': 'yellow'} `}>Order Quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveToCart(tshirt)}>x</button>
                </p>)
            }
            {/* condition */}
            {message}
            {cart.length === 3 ? <h3>thin jon ke gift diba ?</h3> : <p>Kino Kino</p>}
       <p>And operator</p>
       {cart.length === 2 && <h2>Double items</h2>}
        <p>Or operator</p>
        {cart.length === 4 || <h4>char ta item nao</h4>}
        </div>
    );
};

export default Cart;