import React from 'react';
import { apple, bill, google} from '../assets'
import styles , {layout} from "../style.js";
import {FounderContent} from "../constant"
function Billing({lang}) {
    return (
        <section id='product' className={layout.sectionReversefa}>
            <div className={layout.sectionImgReversefa}>
                <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
                <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
                <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
            </div>
            <div className={layout.sectionInfo}>
                <h2 className={`${lang ? styles.heading2 : styles.heading2fa} rtl:mr-10`}>
                    {lang ? 'Easily control your': 'هزینه ها و صورتحسابهای خودرا'} <br className="sm:block hidden" /> {lang ? 'billing & invoicing' : 'به راحت ترین نحو کنترل نمایید'}
                </h2>
                <p className={`${lang? styles.paragraph : styles.paragraphfa} max-w-[470px] mt-5 rtl:mr-10`}>
                    {lang ? FounderContent[0].content : FounderContent[0].contentfa }
                </p>

                <div className={`flex flex-row flex-wrap sm:mt-6 ${lang? "":"w-[100%] justify-end"}`}>
                    <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-10 cursor-pointer'/>
                    <img src={google} alt="google_play" className='w-[128px] h-[42px] object-contain  cursor-pointer'/>
                </div>
            </div>
        </section>
    );
}

export default Billing;