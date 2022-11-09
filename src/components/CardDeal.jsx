import React from 'react';
import {card} from '../assets';
import styles, {layout} from "../style.js";
import Button from './Button.jsx';
import {CardDealContent} from '../constant';

function CardDeal({lang}) {
    return (
        <section id='CardDeal' className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2>Find a better card deal <br className='sm:block hidden'/></h2>
                in few easy steps.
                <p className={`${lang? styles.paragraph : styles.paragraphfa} max-w-[470px] mt-5`}>
                    {lang? CardDealContent[0].content : CardDealContent[0].contentfa}
                </p>
                <Button lang={lang} styles='mt-10'/>
            </div>
            <div className={layout.sectionImg}>
                <img src={card} alt="card" className='w-[100%] h-[100%]'/>
            </div>
        </section>
    );
}

export default CardDeal;