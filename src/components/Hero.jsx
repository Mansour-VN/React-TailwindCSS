import React from 'react';
import {discount, robot} from '../assets';
import GetStarted from "./GetStarted.jsx";
import styles from "../style.js";
import {HeroContent} from "../constant"

function Hero({lang}) {
    return (<div id='Hero'>
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} dir:rtl`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className='flex flex-row item-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 '>
                    <img src={discount} alt="discount" className='w-[32px] h-[32px]'/>
                    <p className={`${styles.paragraph} ${lang ? 'block' : 'hidden'} ml-2`}>

                        <span className="text-white">20%</span> Discount For{" "}
                        <span className="text-white">1 Month</span> Account
                    </p>
                    <p className={`${styles.paragraphfa} ${lang ? 'hidden' : 'block'} ml-2 `}>
                        <span className="text-white">20%</span> تخفیف برای{" "}
                        <span className="text-white">1 ماه </span> حساب
                    </p>
                </div>
                <div className='flex flex-row justify-between items-center w-full'>
                    <h1 className={`${lang ? 'flex- 1' : 'hidden'}  font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]  leading-[75px]`}>
                        The next <br className='sm:block hidden'/>{''}
                        <span className='text-gradient'>
                                Generation
                            </span>{' '}
                    </h1>
                    <h1 className={`${lang ? 'hidden' : 'flex- 1 '} font-mitra font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]  leading-[75px]`}>
                        <span className='text-gradient'>
                             خدمتی متفاوت
                            </span>{' '}
                    </h1>
                    <div className='ss:flex hidden md:mr-4 mr-0'>
                        <GetStarted lang={lang}/>
                    </div>
                </div>
                <h1 className={`${lang ? 'flex- 1' : 'hidden'} font - poppins font-semibold ss:text-[68 px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full`}>
                    Payment Method.
                </h1>
                <h1 className={`${lang ? 'hidden' : 'flex- 1 '} font-mitra font-semibold ss:text-[68 px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full`}>
                    در شیوه پرداخت
                </h1>
                <p className={`${styles.paragraphfa} max-w-[470] mt-5`}>
                    {lang? HeroContent[0].content : HeroContent[0].contentfa}
                   </p>
            </div>
            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={robot} alt="billing" className='w-[100%] h-[100%] reative z-[5] '/>
                <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
                <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
                <div className='absolute z-[0] w-[50%] h-[55%] right-20 bottom-20 blue__gradient'/>
            </div>
            <div className={`ss:hidden ${styles.flexCenter}`}>
                <GetStarted lang={lang}/>
            </div>
        </section>
    </div>);
}

export default Hero;