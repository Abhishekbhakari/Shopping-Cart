// src/components/Cart.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../features/products/cartSlice';
import toast from 'react-hot-toast';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const handleRemoveFromCart = (pid) => {
        dispatch(removeFromCart(pid));
        toast.success('Item removed from cart!');
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Cart</h1>
            {cart.length === 0 ? (
                <p className="text-lg text-gray-500">No products added to cart.</p>
            ) : (
                <>
                    <ul className="space-y-4 flex flex-wrap gap-4">
                        {cart.map(item => (
                            <li key={item.pid} className="bg-white p-4 w-60 rounded-lg shadow-md backdrop-filter backdrop-blur-lg bg-opacity-30">
                                <p className="text-lg font-semibold">{item.pname}</p>
                                <p className="text-gray-700">{item.details}</p>
                                <img src={item.photo} alt={item.pname} className="w-full h-40 object-cover rounded-lg mb-2" />
                                <button
                                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                                    onClick={() => handleRemoveFromCart(item.pid)}
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 text-xl font-bold">
                        Total Amount: ${totalAmount.toFixed(2)}
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
