import React from 'react';
import  {clients} from "../constant/index.js";
import styles from "../style.js";

function Clients({lang}) {
    return (
        <section className={`${styles.flexCenter}`}>
            <div className={`${styles.flexCenter} flex-wrap w-full`}>
                {clients.map((client)=>(
                    <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120]`}>
                        <img src={client.logo} alt="client" className='sm:w-[192px] w-[100px] object-contain'/>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Clients;