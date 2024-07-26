import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/products/productsSlice';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const [product, setProduct] = useState({
        pid: '',
        cid: '',
        pname: '',
        price: '',
        details: '',
        photo: '',
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct(product));
        toast.success(`Product ${product.pname} added successfully!`);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Add Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input name="pid" value={product.pid} onChange={handleChange} placeholder="Product ID" required className="block w-full p-2 border rounded" />
                <input name="cid" value={product.cid} onChange={handleChange} placeholder="Category ID" required className="block w-full p-2 border rounded" />
                <input name="pname" value={product.pname} onChange={handleChange} placeholder="Product Name" required className="block w-full p-2 border rounded" />
                <input name="price" value={product.price} onChange={handleChange} placeholder="Price" required className="block w-full p-2 border rounded" />
                <input name="details" value={product.details} onChange={handleChange} placeholder="Details" required className="block w-full p-2 border rounded" />
                <input name="photo" value={product.photo} onChange={handleChange} placeholder="Photo" required className="block w-full p-2 border rounded" />
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
