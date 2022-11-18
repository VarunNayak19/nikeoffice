import React from 'react'
import CartCount from './cart/cartCount'
import CartEmpty from './cart/cartEmpty'
import CartItem from './cart/cartItem'

import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectCartState, setCloseCart } from '../app/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const ifCartState = useSelector(selectCartState)

    const cartItems = useSelector(selectCartItems)


    const onCartToggle = () => {
        dispatch(setCloseCart({
            cartState: false
        }
        ))
    }

    return (
        <>
            <div className={`fixed top-0 left-0 right-0
             bottom-0 blur-effect-theme w-full h-screen
             opacity-100 z-[250] ${ifCartState ? ' opacity-100 visible translate-x-0'
                    : 'opacity-0 invisible '}`}>
                <div className={`blur-effect-theme h-screen
                max-w-xl w-full absolute right-0`}>
                    <CartCount onCartToggle={onCartToggle} />
                    {
                        cartItems.length === 0 ? <CartEmpty /> :
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
                </div>
            </div>
        </>
    )
}

export default Cart