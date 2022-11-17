import React from 'react'
import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'

const CartCount = () => {
    return (
        <>
            <div
                className=' bg-white h-11 flex items-center
             justify-between px-3 sticky top-0 left-0 right-0 w-full'>
                <div className='
                 flex items-center gap-3
                '>
                    <div className='
                    grid items-center cursor-pointer
                    '>
                        <ChevronDoubleLeftIcon
                            className='w-5 h-5 text-slate-900 
                            hover: text-orange-500 stroke-[2]
                            ' />
                    </div>
                    <div className='
                    grid items-center
                    '>
                        <h1>Your Cart
                            <span>(items)</span>
                        </h1>
                    </div>
                </div>
                <div>
                    <button type='button'>
                        <XMarkIcon />
                    </button>
                </div>
            </div>
        </>
    )
}

export default CartCount