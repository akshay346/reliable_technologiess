import HomeBox from "@/components/HomeBox/HomeBox";
import styles from "./Services.module.css";
import { BsCheck2Circle } from "react-icons/bs";
import { IoIosArrowDropright } from "react-icons/io";

const Services = () => {
    return (
        <div>
            <div className={styles.main}>
                <p className="text-6xl text-center font-extrabold text-[#112D4E]">What we Offer For You?</p>
                <div className="mt-8 mb-8">
                    <HomeBox />
                </div>
            </div>
            <div className={styles.main2}>
                <p className="text-4xl font-semibold text-[#112D4E] mb-2">Simply connect your trading with powerful algorithms.</p>
                <ul>
                    <li className="flex items-center gap-3 text-2xl"><BsCheck2Circle className="text-xl text-[#112D4E]"/> Best Trading Strategies to Deploy.</li>
                    <li className="flex items-center gap-3 text-2xl"><BsCheck2Circle className="text-xl text-[#112D4E]"/> Backtesting.</li>
                    <li className="flex items-center gap-3 text-2xl"><BsCheck2Circle className="text-xl text-[#112D4E]"/> Elimination of Emotions.</li>
                </ul>
                <p className="text-4xl font-semibold text-[#112D4E] mb-2 mt-4">Reliable Technologiess manages your trading cross platform.</p>
                <ul className="mb-5">
                    <li className="flex items-center gap-3 text-2xl"><IoIosArrowDropright className="text-xl text-[#112D4E]"/> Amibroker</li>
                    <li className="flex items-center gap-3 text-2xl"><IoIosArrowDropright className="text-xl text-[#112D4E]"/> Metatrader</li>
                    <li className="flex items-center gap-3 text-2xl"><IoIosArrowDropright className="text-xl text-[#112D4E]"/> Trading View</li>
                    <li className="flex items-center gap-3 text-2xl"><IoIosArrowDropright className="text-xl text-[#112D4E]"/> Binance</li>
                    <li className="flex items-center gap-3 text-2xl"><IoIosArrowDropright className="text-xl text-[#112D4E]"/> Ctrader</li>
                    <li className="flex items-center gap-3 text-2xl"><IoIosArrowDropright className="text-xl text-[#112D4E]"/> Ninja Trader</li>
                </ul>
            </div>
        </div>
    )
}

export default Services
