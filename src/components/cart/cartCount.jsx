import React from 'react'
import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartState, setCloseCart } from '../../app/cartSlice';

const CartCount = ({ clearCart, totalQuantity }) => {
    const dispatch = useDispatch();
    const ifCartState = useSelector(selectCartState)
    const onCartToggle = () => {
        dispatch(setCloseCart({
            cartState: false
        }
        ))
    }
    return (
        <>
            <div
                className={` bg-white h-11 flex items-center
             justify-between px-3 sticky top-0 left-0 right-0 w-full
              ${ifCartState ? ' opacity-100 visible translate-x-0'
                        : 'opacity-0 invisible translate-x-8'}`}>
                <div className='
                 flex items-center gap-3
                '>
                    <div className='
                    grid items-center cursor-pointer
                    ' onClick={onCartToggle}>
                        <ChevronDoubleLeftIcon
                            className='w-5 h-5 text-slate-900 
                            hover:text-orange-500 stroke-[2]
                            ' />
                    </div>
                    <div className='
                    grid items-center
                    '>
                        <h1
                            className=' text-base font-normal from-slate-900'
                        >Your Cart <span>  </span>
                            <span className='bg-theme-cart rounded px-1 py-0.5
                            text-slate-100 text-xs
                            '>({totalQuantity} Items)</span>
                        </h1>
                    </div>
                </div>
                <div
                    className='item-center flex'
                >
                    <button onClick={clearCart} type='button'
                        className='button rounded bg-theme-cart active:scale-90 active:rotate-90 active:rounded-3xl transition-all p-0.5 '
                    >
                        <XMarkIcon className='w-5 h-5 text-white stroke-[2]' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default CartCount