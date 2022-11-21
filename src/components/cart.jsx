import React, { useEffect } from 'react'
import CartCount from './cart/cartCount'
import CartEmpty from './cart/cartEmpty'
import CartItem from './cart/cartItem'

import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectCartState, selectTotalAmount, selectTotalQuantity, setClearCartItems, setCloseCart, setTotalAmount } from '../app/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const ifCartState = useSelector(selectCartState)

    const cartItems = useSelector(selectCartItems)

    const totalAmount = useSelector(selectTotalAmount);
    const totalQuantity = useSelector(selectTotalQuantity);
    useEffect(() => {
        dispatch(setTotalAmount())
    }, [cartItems, dispatch])


    const onCartToggle = () => {
        dispatch(setCloseCart({
            cartState: false
        }
        ))
    }
    const clearCart = () => {
        dispatch(setClearCartItems())
    }

    return (
        <>
            <div className={`fixed top-0 left-0 right-0
             bottom-0 blur-effect-theme w-full h-screen
             opacity-100 z-[250] ${ifCartState ? ' opacity-100 visible translate-x-0'
                    : 'opacity-0 invisible '}`}>
                <div className={`blur-effect-theme h-screen
                max-w-xl w-full absolute right-0`}>
                    <CartCount totalQuantity={totalQuantity} onCartToggle={onCartToggle} clearCart={clearCart} />
                    {
                        cartItems.length === 0 ? <CartEmpty onCartToggle={onCartToggle} /> :
                            <div className='
                             flex items-start justify-start flex-col gap-y-7
                             lg:gap-y-5 overflow-y-scroll h-[85vh] p-3 scroll-smooth scroll-hidden
                            '>
                                {
                                    cartItems?.map((item, i) => (
                                        <CartItem key={i} item={item} />
                                    ))
                                }
                            </div>

                    }
                    <div className=' fixed bottom-0 bg-white w-full px-5
                py-2 grid items-center'>
                        <div className=' flex items-center justify-between'>
                            <h1 className=' text-base font-semibold uppercase'>SubTotal</h1>
                            <h1 className=' text-sm rounded bg-theme-cart
                         text-slate-100 px-2 py-0.5 '>&#8377;{totalAmount}</h1>
                        </div>
                        <div className=' gird items-center gap-2'>
                            <p className=' text-sm font-medium text-center'>Taxes and Shipping will Calculate at Shipping</p>
                            <button className='button-theme bg-theme-cart w-full mt-2 mb-2 text-white' type='button'>Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart