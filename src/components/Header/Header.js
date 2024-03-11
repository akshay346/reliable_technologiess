"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { MdOutlineSegment } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
    const [show, setshow] = useState(false);

    return (

        <div>
            <li className={styles.hamicon} onClick={() => setshow(!show)}><MdOutlineSegment /></li>
            <header className={styles.header}>
                <Link href={'/'}><Image src={'/Logonobg.png'} width={130} height={130} alt="" className="bg-[#0B1828]"></Image></Link>
                <ul className={styles.list}>
                    <li><Link href={'/'} className="text-lg">HOME</Link></li>
                    <li><Link href={'/about'} className="text-lg">ABOUT US</Link></li>
                    <li><Link href={'/services'} className="text-lg">SERVICES</Link></li>
                    <li><Link href={'/pricing'} className="text-lg">PRICING</Link></li>
                    <li><Link href={'/contact'} className="text-lg">CONTACT US</Link></li>
                </ul>
                <div className={styles.btnparent}>
                    <button className={styles.button}><Link href={'/contact'}>Call Now</Link></button>
                </div>
            </header>
            {show && (
                <ul className={styles.ham}>
                    <li className="w-full text-center text-white p-2 px-4" onClick={() => setshow(!show)}><Link href={'/'} className="text-lg border-b-2 flex justify-center">HOME</Link></li>
                    <li className="w-full text-center text-white p-2 px-4" onClick={() => setshow(!show)}><Link href={'/about'} className="text-lg border-b-2 flex justify-center">ABOUT US</Link></li>
                    <li className="w-full text-center text-white p-2 px-4" onClick={() => setshow(!show)}><Link href={'/services'} className="text-lg border-b-2 flex justify-center">SERVICES</Link></li>
                    <li className="w-full text-center text-white p-2 px-4" onClick={() => setshow(!show)}><Link href={'/pricing'} className="text-lg border-b-2 flex justify-center">PRICING</Link></li>
                    <li className="w-full text-center text-white p-2 px-4" onClick={() => setshow(!show)}><Link href={'/contact'} className="text-lg border-b-2 flex justify-center">CONTACT US</Link></li>
                </ul>)
            }
        </div>
    )
}

export default Header;
