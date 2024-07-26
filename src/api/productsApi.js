import axios from 'axios';

const BASE_URL = '/api/products.php'; // Use the proxy path

export const getProducts = () => axios.get(BASE_URL);

export const createProduct = async (product) => {
    try {
        const response = await axios.post(BASE_URL, product);
        console.log('Response:', response.data); // Log the response
        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};


export const deleteProduct = (pid) => axios.post(`${BASE_URL}?opr=D&pid=${pid}`);