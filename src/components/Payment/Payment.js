"use client";
import styles from "./Payment.module.css";
import Image from "next/image";
import { useRef } from "react";
import { ImCross } from "react-icons/im";

const Payment = ({onClose}) => {

    const modalRef = useRef();

    const closeModal = (e) => {
        if(modalRef.current === e.target){
            onClose();
        }
    }

    return (
        <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10">
            <div className={styles.pay}>
                <button className="flex items-start w-full p-4 justify-end" onClick={onClose}><ImCross /></button>
                <div></div>
            </div>
        </div>
    )
}

export default Payment
