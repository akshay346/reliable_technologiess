import Link from "next/link";
import styles from "./Footer.module.css";
import { IoHome } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <>
    <div className={styles.main}>
      <div className={styles.mainc}>
        <Image src={'/Logonobg.png'} width={220} height={220} alt=""></Image>
        <div>
          <p className="text-gray-400 mb-4">Reliable Technologiess is a leading company specializing in the development of top-notch algorithmic trading systems catering to both retail traders and enterprise-level clients. Our fundamental business philosophy revolves around dedicating our research and . . . <span className="text-green-500"><Link href={'/about'}>Read More</Link></span> </p>
        </div>
      </div>
      <div className="text-white w-full mb-4">
        <div className="text-4xl  mb-4 font-bold">Quick Links</div>
        <ul>
          <li className="text-gray-400">
            <Link href={"/disclaimer"}>Disclaimer</Link>
          </li>
          <li className="text-gray-400">
            <Link href={"/riskdiscloser"}>Risk Discloser</Link>
          </li>
          <li className="text-gray-400">
            <Link href={"/privacypolicy"}>Privacy Policy</Link>
          </li>
          <li className="text-gray-400">
            <Link href={"/refundpolicy"}>Refund Policy</Link>
          </li>
          <li className="text-gray-400">
            <Link href={"/terms"}>Terms & Condition</Link>
          </li>
        </ul>
      </div>
      <div className="text-white w-full">
        <div className="text-4xl mb-4 font-bold">Contact Us</div>
        <ul>
          <li className="flex justify-start items-center gap-3">
            <IoHome className="text-xl text-green-600" />
            <p className="text-gray-400">
              Rahul Chowk, Katras, Dhanbad, <br /> Jharkhand - 808114
            </p>
          </li>
          <li className="flex justify-start items-center gap-3 mt-3">
            <IoMdCall className="text-xl text-green-600" />
            <p className="text-gray-400">+91 - 8539923564</p>
          </li>
          <li className="flex justify-start items-center gap-3 mt-3">
            <MdEmail className="text-xl text-green-600" />
            <p className="text-gray-400">info@reliabletechnologiess.com</p>
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.copy}>
      <p>Copyright</p>
      <p><FaRegCopyright/></p>
      <p>2024.</p>
      <p>All rights reserved by Reliable Technologiess</p>
    </div>
    </>
  );
};

export default Footer;
