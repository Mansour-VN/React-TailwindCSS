import React from 'react';
import styles from "../style.js";
import {stats} from '../constant'

function Stats({lang}) {
    return (
        <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
            {stats.map((stat)=> (
                <div key={stat.id} className='flex-1 flex justify-start item-center flex-row m-3'>
                    <h4 className='font-poppins font-semibold  xs:text-[40px] text-[30px] sx:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
                    <p className={`${lang? 'block' : 'hidden'} font-poppins font-semibold xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3`}>{stat.title}</p>
                    <p className={`${lang?  'hidden' : 'block'} font-mitra font-semibold xs:text-[25px] text-[15px] xs:leading-[30px] leading-[32px] text-gradient uppercase mr-3`}>{stat.titlefa}</p>
                </div>
            ))}
        </section>
    );
}

export default Stats;