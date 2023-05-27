import React from 'react';


const Cart = ({cart, handleRemoveToCart}) => {
    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Order Quantity: {cart.length}</h5>
        {
            cart.map(tshirt => <p
            key={tshirt._id}
            >
            {tshirt.name}
            <button onClick={()=> handleRemoveToCart(tshirt)}>x</button>
            </p>)
        }
        </div>
    );
};

export default Cart;