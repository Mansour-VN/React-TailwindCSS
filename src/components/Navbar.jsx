import React, {useState} from 'react';
import {close, logo, menu} from "../assets"
import { navLinks } from '../constant'

function Navbar({language , lang}) {
    const [toggle, settoggle] = useState(false)


    return (
        <nav className="w-full flex py-6 justify-between item-center navbar">
            <img src={logo} alt="hoobank" className="w-[124px] h-[32px]"/>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav) => (
                    <li key={nav.id} className={`${lang? "font-poppins" : "Arial" } font-normal cursor-pointer text-[16px] mr-10 text-white `}>
                        <a href={`#${nav.id}`}>
                            {lang ? nav.title : nav.titlefa}
                        </a>
                    </li>
                ))}
                <li  className={`font-poppins font-normal cursor-pointer text-[16px] mr-0 text-white rtl:mr-10`}>
                    <a onClick={language}>
                        Language
                    </a>
                </li>
            </ul>
            <div className="sm:hidden flex flex-1 justify-end item-center">
                <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={()=> settoggle((prev)=> !prev)}/>
                <div className={`${toggle? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="list-none flex flex-col flex-1 justify-end items-center flex-1">
                        {navLinks.map((nav) => (
                            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] 'mb-6' text-white rtl:font-Vazir`}>
                                <a href={`#${nav.id}`}>
                                    {lang ? nav.title : nav.titlefa}
                                </a>
                            </li>
                        ))}
                        <li  className={`font-poppins font-normal cursor-pointer text-[16px] mr-0 text-white`}>
                            <a onClick={language} >
                                Language
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;