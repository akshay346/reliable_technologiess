"use client";
import styles from "./Payment.module.css";
import Image from "next/image";
import { useRef } from "react";
import { ImCross } from "react-icons/im";

const Payment = ({ onClose }) => {

    const img = { src: '/image/NewQr.jpeg' }

    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    return (
        <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10">
            <div className={styles.pay}>
                <button className="flex items-start w-full p-4 justify-end" onClick={onClose}><ImCross /></button>
                <div className="flex justify-center items-center">
                    <Image src={`${img.src}`} width={386} height={386} className="p-2"/>
                </div>
                <div className="p-4">
                    <p><span className="font-semibold">Bank Name:</span><span className="font-semibold text-blue-900"> HDFC BANK LTD</span></p>
                    <p><span className="font-semibold">Account Holder Name:</span><span className="font-semibold text-blue-900">  RELIABLE TECHNOLOGIES</span></p>
                    <p><span className="font-semibold">Account Number:</span><span className="font-semibold text-blue-900">  50200088527266</span></p>
                    <p><span className="font-semibold">IFSC Code:</span><span className="font-semibold text-blue-900">  HDFC0006129</span></p>
                    <p><span className="font-semibold">UPI ID:</span><span className="font-semibold text-blue-900">  reliabletechnologies22@ybl</span></p>
                </div>
            </div>
        </div>
    )
}

export default Payment
