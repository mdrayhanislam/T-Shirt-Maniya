import React from 'react';
import './Tshirt.css'
const Tshirt = ({tshirt, handleAddToCart}) => {
const {picture, name, price} =tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt=""></img>
            <p>Name: {name}</p>
            <h4>Price: {price}</h4>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;