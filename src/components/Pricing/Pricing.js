"use client";
import { useState } from "react";
import styles from "./Pricing.module.css";
import { BsCurrencyRupee } from "react-icons/bs";
import Payment from "../Payment/Payment";

const Pricing = () => {

    const [show, setShow] = useState(false);

    return (
        <div className={styles.mainp}>
            <div className="text-6xl p-1 text-center font-extrabold mb-12 text-[#112D4E]">
                Pick the best plan for you
            </div>
            <div className={styles.main}>
                <div className={styles.mainc}>
                    <div className="text-xl font-semibold mb-4">MONTHLY</div>
                    <div className="flex justify-center items-center mb-4">
                        <div>
                            <BsCurrencyRupee />
                        </div>
                        <div className="text-4xl font-bold  ">9,999</div>
                    </div>
                    <div className="w-full h-[1px] bg-black mb-4"></div>
                    <div className="text-sm mb-4 px-6">Service Charge + 18% GST</div>
                    <div className="w-full h-[1px] bg-gray-400 mb-4"></div>
                    <div className="text-sm mb-4 px-6">Completely Automated</div>
                    <div className="w-full h-[1px] bg-gray-400 mb-4"></div>
                    <div className="text-sm mb-4 px-6">Whatsapp Support</div>
                    <div className="w-full h-[1px] bg-gray-400 mb-4"></div>
                    <div className="text-sm mb-4 px-6">Instant Installation </div>
                    <div className="w-full h-[1px] bg-gray-400 mb-4"></div>
                    <div className="text-sm mb-4 px-6"> 1-2 Strategies</div>
                    <div className="w-full h-[1px] bg-gray-400 mb-4"></div>
                    <div className="text-sm mb-4 px-6">No maintanence</div>
                    <button className="bg-green-600 px-5 py-3 text-white rounded-full" onClick={() => setShow(true)}>BUY NOW</button>
                    {/* {show && <Payment onClose={() => setShow(false)} />} */}
                </div>
                <div className={styles.mainc}>
                    <div className="text-xl font-semibold mb-4">QUARTERLY</div>
                    <div className="flex items-center mb-4 ">
                        <div>
                            <BsCurrencyRupee />
                        </div>
                        <div className="text-4xl font-bold  ">19,999</div>
                    </div>
                    <div className="w-full h-[1px] bg-black mb-4"></div>
                    <div className="text-sm mb-4 px-6">Service Charge + 18% GST</div>
                    <div className="w-full h-[1px] bg-gray-400 mb-4"></div>
                    <div className="text-sm mb-4 px-6">Completely Automated</div>
                    <div className="w-full h-[1px] bg-gray-400 mb-4"></div>
                    <div className="text-sm mb-4 px-6">Whatsapp Support</div>
                    <div className="w-full h-[1px] bg-gray-400 mb-4"></div>
                    <div className="text-sm mb-4 px-6">Instant Installation </div>
                    <div className="w-full h-[1px] bg-gray-400 mb-4"></div>
                    <div className="text-sm mb-4 px-6"> 3-5 Strategies</div>
                    <div className="w-full h-[1px] bg-gray-400 mb-4"></div>
                    <div className="text-sm mb-4 px-6">No maintanence</div>
                    <button className="bg-green-600 px-5 py-3 text-white rounded-full" onClick={() => setShow(true)}>BUY NOW</button>
                </div>
                <div className={styles.mainc}>
                    <div className="text-xl font-semibold mb-4">HALF YEARLY</div>
                    <div className="flex justify-center items-center mb-4">
                        <div>
                            <BsCurrencyRupee />
                        </div>
                        <div className="text-4xl font-bold  ">37,999</div>
                    </div>
                    <div className="w-full h-[1px] bg-black mb-4"></div>
                    <div className="text-sm mb-4 px-6">Service Charge + 18% GST</div>
                    <div className="w-full h-[1px] bg-gray-400 mb-4"></div>
                    <div className="text-sm mb-4 px-6">Completely Automated</div>
                    <div className="w-full h-[1px] bg-gray-400 mb-4"></div>
                    <div className="text-sm mb-4 px-6">Whatsapp Support</div>
                    <div className="w-full h-[1px] bg-gray-400 mb-4"></div>
                    <div className="text-sm mb-4 px-6">Instant Installation </div>
                    <div className="w-full h-[1px] bg-gray-400 mb-4"></div>
                    <div className="text-sm mb-4 px-6"> 6-10 Strategies</div>
                    <div className="w-full h-[1px] bg-gray-400 mb-4"></div>
                    <div className="text-sm mb-4 px-6">No maintanence</div>
                    <button className="bg-green-600 px-5 py-3 text-white rounded-full" onClick={() => setShow(true)}>BUY NOW</button>
                </div>
                <div className={styles.mainc}>
                    <div className="text-xl font-semibold mb-4">YEARLY</div>
                    <div className="flex justify-center items-center mb-4">
                        <div>
                            <BsCurrencyRupee />
                        </div>
                        <div className="text-4xl font-bold  ">59,999</div>
                    </div>
                    <div className="w-full h-[1px] bg-black mb-4"></div>
                    <div className="text-sm mb-4 px-6">Service Charge + 18% GST</div>
                    <div className="w-full h-[1px] bg-gray-400 mb-4"></div>
                    <div className="text-sm mb-4 px-6">Completely Automated</div>
                    <div className="w-full h-[1px] bg-gray-400 mb-4"></div>
                    <div className="text-sm mb-4 px-6">Whatsapp Support</div>
                    <div className="w-full h-[1px] bg-gray-400 mb-4"></div>
                    <div className="text-sm mb-4 px-6">Instant Installation </div>
                    <div className="w-full h-[1px] bg-gray-400 mb-4"></div>
                    <div className="text-sm mb-4 px-6"> 10-15 Strategies</div>
                    <div className="w-full h-[1px] bg-gray-400 mb-4"></div>
                    <div className="text-sm mb-4 px-6">No maintanence</div>
                    <button className="bg-green-600 px-5 py-3 text-white rounded-full" onClick={() => setShow(true)}>BUY NOW</button>
                </div>
            </div>
            {show && <Payment onClose={() => setShow(false)} />}
            <p className={styles.note}>&quot;Note- Mentioned Service / Product charges are exclusive of Service Tax&quot;</p>
        </div>
    )
}

export default Pricing
