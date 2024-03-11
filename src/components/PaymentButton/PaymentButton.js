"use client";
import { useState } from "react";
import Payment from "../Payment/Payment";
import styles from "./PaymentButton.module.css";

const PaymentButton = () => {

    const [show, setShow] = useState(false);

    return (
        <main className={styles.main}>
            <button className={styles.btn} onClick={() => setShow(true)}>
                Payment
            </button>
            {show && <Payment onClose={() => setShow(false)} />}
        </main>
    )
}

export default PaymentButton
