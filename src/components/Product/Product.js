import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Product = ({product, handleAddToCart}) => {
    const {img, name, time} = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='time'>Time required: {time}</p>
            </div>
            <button onClick={()=>handleAddToCart(time)} className='btn-list'>
                <p className='btn-text'>Add To List</p>
                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;