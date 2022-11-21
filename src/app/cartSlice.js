import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartState: false,
    cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    cartTotalAmount: 0,
}


const CartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        setOpenCart: (state, action) => {

            state.cartState = action.payload.cartState
        },
        setCloseCart: (state, action) => {
            state.cartState = action.payload.cartState
        },
        setAddItemToCart: (state, action) => {

            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            }
            else {
                const temp = {
                    ...action.payload, cartQuantity: 1
                }
                state.cartItems.push(temp);
            }
            localStorage.setItem('cartNike', JSON.stringify(state.cartItems))
        },
        setRemoveItemFromCart: (state, action) => {
            const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id);

            state.cartItems = removeItem;
            localStorage.setItem('cartNike', JSON.stringify(state.cartItems));
        },
        setIncreaseItemQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            }
            localStorage.setItem('cartNike', JSON.stringify(state.cartItems));

        },
        setDecreaseItemQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
            }
            localStorage.setItem('cartNike', JSON.stringify(state.cartItems));
        },
        setClearCartItems: (state, action) => {
            state.cartItems = [];
            localStorage.setItem("cartNike", JSON.stringify(state.cartItems));
        },
        setTotalAmount: (state, action) => {
            let { totalAmount, totalQuantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const totalPrice = price * cartQuantity * 80;

                cartTotal.totalAmount += totalPrice;
                cartTotal.totalQuantity += cartQuantity;

                return cartTotal;
            }, {
                totalAmount: 0, totalQuantity: 0,
            })
            state.cartTotalAmount = totalAmount;
            state.cartTotalQuantity = totalQuantity;
        }

    }

});

export const { setCloseCart, setOpenCart, setAddItemToCart, setTotalAmount, setRemoveItemFromCart, setIncreaseItemQuantity, setDecreaseItemQuantity, setClearCartItems } = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;

export const selectTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectTotalQuantity = (state) => state.cart.cartTotalQuantity;

export default CartSlice.reducer;