import React from 'react';
import styles from "../style.js";
import Button from "./Button.jsx";
import {CtaContent} from '../constant';

function Cta({lang}) {
    return (
        <section
            className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
            <div className='flex-1 flex flex-col'>
                <h2 className={`${lang? styles.heading2 : styles.heading2fa}`}>
                    {lang ? CtaContent[0].content : CtaContent[0].contentfa}
                </h2>
                <p className={`${lang? styles.paragraph : styles.paragraphfa}  max-w-[470px] mt-5 `}>
                    {lang ? CtaContent[1].content : CtaContent[1].contentfa}
                </p>
            </div>
            <div>
                <Button lang={lang}/>
            </div>
        </section>
    );
}

export default Cta;