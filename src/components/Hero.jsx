import React from 'react';
import {discount, robot} from '../assets';
import style from "../style.js";
import GetStarted from "./GetStarted.jsx";
import styles from "../style.js";

function Hero() {
    return (
        <div id='Hero'>
            <section id="home" className={`flex md:flex-row flex-col ${style.paddingY}`}>
                <div className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                    <div className='flex flex-row item-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 '>
                        <img src={discount} alt="discount" className='w-[32px] h-[32px]'/>
                        <p className={`${style.paragraph} ml-2`}>
                            <span className='text-white'>20%</span>
                            Discount For{""}
                            <span className='text-white'>1 Month</span>
                            Account
                        </p>
                    </div>
                    <div className='flex flex-row justify-between items-center w-full'>
                        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]  leading-[75px]'>
                            The next <br className='sm:block hidden'/>{''}
                            <span className='text-gradient'>
                                Generation
                            </span>{' '}
                        </h1>
                        <div className='ss:flex hidden md:mr-4 mr-0'>
                            <GetStarted/>
                        </div>
                    </div>
                    <h1 className='flex-1 font-poppins font-semibold ss:text-[68 px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
                        Payment Method.
                    </h1>
                    <p className={`${style.paragraph} max-w-[470] mt-5`}> Our team of experts uses a methodology to
                        identify the credit cards
                        most likely to fit your needs. We examine annual percentage rates,
                        annual fees.</p>
                </div>
                <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                    <img src={robot} alt="billing" className='w-[100%] h-[100%] reative z-[5] '/>
                    <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
                    <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
                    <div className='absolute z-[0] w-[50%] h-[55%] right-20 bottom-20 blue__gradient'/>
                </div>
                <div className={`ss:hidden ${styles.flexCenter}`}>
                    <GetStarted/>
                </div>
            </section>
        </div>
    );
}

export default Hero;