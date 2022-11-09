import React from 'react';
import styles from "../style.js";
import {logo} from '../assets';
import {footerLinks, socialMedia, FooterContent} from '../constant';


function Footer({lang}) {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className={'ml-10'}>
                    <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-contain' />
                    <p className={`${lang? styles.paragraph : styles.paragraphfa} mt-4 max-w-[312px] rtl:max-w-[290px]`}>
                        {lang? FooterContent[0].content : FooterContent[0].contentfa}
                    </p>
                </div>
                <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
                    {footerLinks.map((footerLink) => (
                        <div key={footerLink.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white rtl:font-mitra'>
                                {lang? footerLink.title : footerLink.titlefa}
                            </h4>
                            <ul className='list-none mt-4'>
                                {footerLink.links.map((link, index) => (
                                    <li key={link.name} className={`font-poppins rtl:font-mitra font-normal text-[16px] leading-[24px]
                                     text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                                        {lang ? link.name : link.namefa}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>
            <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
                <p className='font-poppins rtl:font-mitra font-normal text-center text-[18px] leading-[27px] text-white'>
                    {lang? FooterContent[1].content : FooterContent[1].contentfa}
                </p>
                <div className='flex flex-row md:mt-0 mt-6'>
                    {socialMedia.map((social, index)=>(
                        <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer mr-6`}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Footer;