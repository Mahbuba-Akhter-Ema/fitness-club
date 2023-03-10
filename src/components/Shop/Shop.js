import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(0);

    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (time) => {
        const newCart = parseFloat(cart) + parseFloat(time);
        setCart(newCart);
        localStorage.setItem('exercise-timer', newCart);
    };
    
    useEffect(()=>{
        const getPb = localStorage.getItem('exercise-timer');
        if(getPb){
            setCart(getPb);
        }
    },[]);

    return (
        <div className='shop-container'>
            <div className="product-container"> 
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart = {handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Shop;