// src/components/AllProducts.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';
import { addToCart } from '../features/products/cartSlice';
import toast from 'react-hot-toast';

const AllProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.items);
    const cart = useSelector(state => state.cart.items);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        toast.success(`${product.pname} added to cart!`);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">All Products</h1>
            <div className="products-grid grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {products.map(product => (
                    <div key={product.pid} className="bg-white p-4 rounded-lg shadow-md backdrop-filter backdrop-blur-lg bg-opacity-30">
                        <img src={product.photo} alt={product.pname} className="w-full h-40 object-scale-down rounded-lg mb-2" />
                        <h3 className="text-lg font-semibold">{product.pname}</h3>
                        <p className="text-gray-700">{product.details}</p>
                        <p className="text-gray-700">Rs. {product.price}</p>
                        
                        <button
                            className={`mt-2 px-4 py-2 rounded ${cart.some(item => item.pid === product.pid) ? 'bg-green-500' : 'bg-blue-500'} text-white`}
                            onClick={() => handleAddToCart(product)}
                            disabled={cart.some(item => item.pid === product.pid)}
                        >
                            {cart.some(item => item.pid === product.pid) ? 'Added' : 'Add to Cart'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllProducts;
