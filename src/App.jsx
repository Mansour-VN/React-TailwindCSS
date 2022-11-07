import React, {useState} from 'react';
import style from "./style.js";
import {Navbar,Billing,Business,CardDeal,Clients, CTA,Hero,Stats,Testimonials,Footer} from './components'

function App() {
    const [lang,setLang] = useState(true)
    const changeLanguage =()=>{
        setLang(!lang)
        console.log(lang)
    }

    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${style.paddingX} ${style.flexCenter}`}>
                <div className={`${style.boxWidth}`}>
                    <Navbar language={changeLanguage} lang={lang}  />
                </div>
            </div>
            <div className={`bg-primary ${style.flexStart}`}>
                <div className={`${style.boxWidth}`}>
                    <Hero lang={lang} />
                </div>
            </div>
            <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
                <div className={`${style.boxWidth}`}>
                    <Stats lang={lang}/>
                    <Business lang={lang}/>
                    <Billing lang={lang}/>
                    <CardDeal lang={lang}/>
                    <Testimonials lang={lang}/>
                    <Clients lang={lang}/>
                    <CTA lang={lang}/>
                    <Footer lang={lang}/>
                </div>
            </div>
        </div>
    );
}

export default App;