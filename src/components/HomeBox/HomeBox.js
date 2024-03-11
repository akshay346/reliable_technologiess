import Image from "next/image"
import styles from "./HomeBox.module.css";


const HomeBox = () => {
    return (
        <div className={styles.main}>
            <div className={styles.box}>
                <Image
                    src={"/image/APIBridge.png"}
                    width={50}
                    height={50}
                    alt=""
                ></Image>
                <p className="text-2xl mt-3 font-semibold text-[#3F72AF]">API BRIDGE</p>
                <p className="mt-2 text-center text-gray-700">API Bridge is a set of programming interface, pincode and Places is first programming interface. APIBridge permits you to algo trade with various stages like MT4.</p>
            </div>
            <div className={styles.box}>
                <Image
                    src={"/image/Algo.png"}
                    width={50}
                    height={50}
                    alt=""
                ></Image>
                <p className="text-2xl mt-3 font-semibold text-[#3F72AF]">ALGO TRADING</p>
                <p className="mt-2 text-center text-gray-700">We will provide you the best platform for doing Auto Trading with your own Intra day and positional based strategies which will save your money and time Controlling your</p>
            </div>
            <div className={styles.box}>
                <Image
                    src={"/image/AutoBuySell.png"}
                    width={50}
                    height={50}
                    alt=""
                ></Image>
                <p className="text-2xl mt-3 font-semibold text-[#3F72AF]">AUTO BUY SELL SIGNAL</p>
                <p className="mt-2 text-center text-gray-700">You could know precisely when to purchase, hold or sell stocks or commodities. We are providing 100% exact programmed software.Our items have been given Complete Artificial.</p>
            </div>

        </div>
    )
}

export default HomeBox
