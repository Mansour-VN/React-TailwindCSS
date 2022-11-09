import React from 'react';
import {feedback, TestimonialsContent} from '../constant';
import styles from "../style.js";
import FeedbackCard from "./FeedbackCard";

function Testimonials({lang}) {
    return (
        <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40"/>

            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                <h2 className={`${lang? styles.heading2 : styles.heading2fa} ${lang ? 'block' : ' hidden'}`}>
                    What People are <br className="sm:block hidden"/> saying about us
                </h2>
                <h2 className={`${lang? styles.heading2 : styles.heading2fa} ${lang ?  ' hidden': 'block'}`}>
                    نظر صاحب نظران <br className="sm:block hidden"/> در ارتباط با خدمات ما
                </h2>
                <div className="w-full md:mt-0 mt-6">
                    <p className={`${lang? styles.paragraph : styles.paragraphfa} text-left max-w-[450px] rtl:text-right`}>
                        {lang ? TestimonialsContent[0].content : TestimonialsContent[0].contentfa}
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
                {feedback.map((card) => <FeedbackCard key={card.id} lang={lang} {...card} />)}
            </div>
        </section>
    );
}

export default Testimonials;