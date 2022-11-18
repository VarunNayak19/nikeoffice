import React, { useState } from 'react'
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setOpenCart } from '../app/cartSlice';

const Navbar = () => {
    const [navstate, setnavstate] = useState(false);
    const dispatch = useDispatch();

    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }
        ))
    }

    const onNavScroll = () => {
        if (window.scrollY > 20) {
            setnavstate(true)
        }
        else {
            setnavstate(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);
        return () => {
            window.removeEventListener('scroll', onNavScroll)
        };

    }, []);


    return (
        <>
            <header className={!navstate ? 'absolute top-7 left-0 right-0 opacity-100 z-50' :
                'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
            }>
                <nav className='flex items-center justify-between nike-container'>
                    <div
                        className='flex items-center'>
                        <img src={logo} alt="logo"
                            className={`w-16 h-auto
                            ${navstate && 'filter brightness-0'}
                            `}
                        />
                    </div>
                    <ul className='flex justify-center items-start gap-5'>
                        <li className='grid items-center'>
                            <MagnifyingGlassIcon
                                className={`icon-style ${navstate && 'filter brightness-0'}`} />
                        </li>
                        <li className='grid items-center'>
                            <HeartIcon className={`icon-style ${navstate && 'filter brightness-0'}`} />
                        </li>
                        <li className='grid items-center'>
                            <button type='button' onClick={onCartToggle} className={` border-none outline-none active:scale-110 transition-all duration-300 relative`}>
                                <ShoppingBagIcon
                                    className={`icon-style  ${navstate && 'filter brightness-0'}`}
                                />
                                <div className={`absolute top-4 right-0 left-0
                                  bg-white text-slate-900 shadow cursor-pointer hover:scale-110
                                  transition-all duration-300
                                  shadow-slate-100 w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full
                                  `}>0</div>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar