import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts, createProduct } from '../../api/productsApi';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await getProducts();
    return response.data;
});

export const addProduct = createAsyncThunk('products/addProduct', async (product) => {
    const response = await createProduct(product);
    return response.data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState: { items: [], status: 'idle' },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = 'failed';
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.items.push(action.payload);
            });
    },
});

export default productsSlice.reducer;
