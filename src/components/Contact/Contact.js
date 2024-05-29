import Image from "next/image";
import { IoHome } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.main}>
      <div>
        <p className="text-4xl text-center font-extrabold text-[#112D4E] mb-8">
          If you have any queries please feel free to contact us.
        </p>
      </div>
      <div className={styles.mainc}>
        <div>
          <Image src={"/image/contact.jpg"} height={400} width={400} alt=""></Image>
        </div>
        <div className="mb-8">
          <div className="text-2xl mb-4 text-[#112D4E]">Contact Us :</div>
          <ul>
            <li className="flex justify-start items-center gap-3 mt-3">
              <IoMdCall className="text-2xl text-[#112D4E]" />
              <p>+91 - 9801388503</p>
            </li>
            <li className="flex justify-start items-center gap-3">
              <IoHome className="text-2xl text-[#112D4E]" />
              <p>
                Rahul Chowk, Katras, Dhanbad, <br /> Jharkhand - 808114
              </p>
            </li>
            <li className="flex justify-start items-center gap-3 mt-3">
              <MdEmail className="text-2xl text-[#112D4E]" />
              <p>info@reliabletechnologiess.com</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
