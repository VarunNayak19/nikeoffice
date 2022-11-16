import React from 'react'
import Clips from './utils/clips'
import SocialLinks from './utils/socialLinks';
import heroimg from "../assets/hero.png";


const Hero = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos, gradient } }) => {
    console.log(gradient);
    return (
        <>
            <div className='relative h-auto w-auto flex flex-col'>
                <div className={` bg-theme 
                  ${gradient}
                clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10`}></div>
                <div className=' relative opacity-100 z-20 grid items-center justify-items-center nike-conatiner'>
                    <div className=' grid items-center justify-items-center mt-28 md:mt-24 '>
                        <h1 className='text-6xl mb-2 lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-xl text-slate-200'>{title}</h1>
                        <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-xl text-slate-200'>{subtitle}</h1>
                        <button type="button" className='button-theme bg-slate-200  shadow-slate-200 rounded-xl my-5'>{btntext}</button>
                        <div className='grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-3 w-auto h-auto '>
                            {videos?.map((val, i) => {
                                return (
                                    <Clips
                                        key={i}
                                        imgsrc={val.imgsrc}
                                        clip={val.clip} />
                                );

                            })}
                        </div>
                        <div className='grid item-center absolute top-[33vh] lg:top-[27vh] right-5 gap-3' >
                            {sociallinks?.map((val, i) => {
                                return (
                                    <SocialLinks key={i} icon={val.icon} />
                                );
                            })}
                        </div>
                    </div>
                    <div className=''>
                        <img src={heroimg} alt={img} className='w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[30deg] hover:rotate-0 cursor-pointer object-fill' />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Hero