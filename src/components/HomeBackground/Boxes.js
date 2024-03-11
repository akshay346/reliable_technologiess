import styles from "./Boxes.module.css";
import { HiClipboardList } from "react-icons/hi";
import { FaChartPie } from "react-icons/fa";
import { HiArchive } from "react-icons/hi";
import { BsGraphUpArrow } from "react-icons/bs";

const Boxes = () => {
    return (
        <main className={styles.main}>

            <div className={styles.box}>
                <HiClipboardList className={styles.icon} />
                <p className={styles.text}>Intraday options trading Strategies</p>
            </div>

            <div className={styles.box1}>
                <FaChartPie className={styles.icon} />
                <p className={styles.text}>Equity Intraday Strategies</p>
            </div>

            <div className={styles.box}>
                <BsGraphUpArrow  className={styles.icon} />
                <p className={styles.text}>Mcx Intraday Strategies</p>
            </div>

            <div className={styles.box1}>
                <HiArchive className={styles.icon} />
                <p className={styles.text}>Forex Trading Strategies</p>
            </div>
            
        </main>
    )
}

export default Boxes
