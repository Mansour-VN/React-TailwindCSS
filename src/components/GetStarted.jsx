import React from 'react';
import styles from "../style.js";
import {arrowUp} from '../assets';

function GetStarted({lang}) {
    return (
        <div
            className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
            <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className={`${lang ? 'block' : 'hidden'} font-poppins font-medium text-[18px] leading-[23px] mr-2`}>
                        <span className='text-gradient'>Get</span>
                    </p>
                    <p className={`${lang ? 'hidden' : 'block'} font-mitra font-medium text-[18px] leading-[23px] mr-2`}>
                        <span className='text-gradient'>حالا</span>
                    </p>
                    <img src={arrowUp} alt="arrow" className='w-[23px] h-[23px] object-contain'/>
                </div>
                <p className={`${lang ? 'block' : 'hidden'} font-poppins font-medium text-[18px] leading-[23px]`}>
                    <span className='text-gradient'>Started</span>
                </p>
                <p className={`${lang ? 'hidden' : 'block'} font-mitra font-medium text-[18px] leading-[23px]`}>
                    <span className='text-gradient'> شروع کنید</span>
                </p>
            </div>
        </div>
    );
}

export default GetStarted;