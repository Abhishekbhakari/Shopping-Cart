// src/features/products/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalAmount: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.items.find(item => item.pid === action.payload.pid);
            if (!item) {
                state.items.push(action.payload);
                state.totalAmount += Number(action.payload.price);
            }
        },
        removeFromCart: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.pid === action.payload);
            if (itemIndex !== -1) {
                state.totalAmount -= Number(state.items[itemIndex].price);
                state.items.splice(itemIndex, 1);
            }
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
