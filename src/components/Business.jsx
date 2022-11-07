import React from 'react';
import styles, {layout} from "../style.js";
import {features, BusinessContent} from "../constant/index.js";
import {Button} from "./index.js";


function Business({lang}) {
    const FeatureCard = ({icon, title, content, titlefa, contentfa, index}) => (
        <div>
            <div
                className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1} ? 'mb-6' : 'mb-0'} feature-card`}>
                <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain'/>
                </div>
            </div>
            <div className='felx flex-1 flex-col ml-3 '>
                <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
                    {lang ? title : titlefa}
                </h4>
                <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[23px] mb-1'>
                    {lang ? content : contentfa}
                </p>
            </div>
        </div>
    )
    return (
        <section id='features' className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={`${styles.heading2} ${lang ? 'block' : 'hidden'}`}>
                    You do the business, <br className="sm:block hidden"/> we’ll handle
                    the money.
                </h2>
                <h2 className={`${styles.heading2} ${lang ? 'hidden' : 'block'}`}>
                    شما به کسب و کار خود برسید, <br className="sm:block hidden"/> تراکنش هارا به ما بسپارید
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    {lang ? BusinessContent[0].content : BusinessContent[0].contentfa}
                </p>
                <Button lang={lang} styles={'mt-10'}/>

            </div>
            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index}/>
                ))}
            </div>
        </section>
    );
}

export default Business;