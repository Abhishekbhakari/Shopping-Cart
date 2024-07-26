// src/App.jsx
import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import AddProduct from './components/AddProduct';
import { Toaster } from 'react-hot-toast';

const App = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Toaster />
            <nav className="bg-gray-800 p-4 text-white flex justify-between">
                <div className="space-x-4">
                    <Link to="/">All Products</Link>
                    <Link to="/cart">Cart</Link>
                    <Link to="/add-product">Add Product</Link>
                </div>
                <button onClick={() => navigate(-1)} className="bg-gray-700 px-4 py-2 rounded">Back</button>
            </nav>
            <Routes>
                <Route path="/" element={<AllProducts />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/add-product" element={<AddProduct />} />
            </Routes>
        </div>
    );
};

export default App;
