"use client";
import { FaStar } from "react-icons/fa";
import styles from "./Testimonials.module.css";
import Image from "next/image";
import { motion } from "framer-motion"

const Testimonials = () => {
  return (

    <div className={styles.main}>
      <div drag className="p-4 bg-[#F5EEE6] rounded w-full  shadow-lg">
        <p className="text-xl font-semibold mb-2 ">Satisfactory Services</p>
        <div className="flex items-start gap-3">
          <Image src={"/image/user/emp-1.jpg"} width={50} height={50} alt="" className="rounded-full"></Image >
          <div>
            <p>I have ever found such kind of
              passionate trading company in the
              journey of the stock market. Would
              definitely express much gratitude for
              their experience and for sharing
              invaluable knowledge market. For
              sure recommended Tradealpha
              team.
            </p>
            <div className="flex gap-1 text-yellow-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <p className="text-[#112D4E]">SWAGAT SINGH</p>
          </div>
        </div>
      </div>
      <div className="p-4 bg-[#F5EEE6] rounded w-full  shadow-lg">
        <p className="text-xl font-semibold mb-2">Excellent Company</p>
        <div className="flex items-start gap-3">
          <Image src={"/image/user/emp-2.jpg"} width={50} height={50} alt="" className="rounded-full"></Image>
          <div>
            <p>An excellent company for trading software. A very smart developer with a high level of math and analysis skills that is offering a true performace product.
            </p>
            <div className="flex gap-1 text-yellow-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <p className="text-[#112D4E]">MEENA MOHAPATRA</p>
          </div>
        </div>
      </div>
      <div className="p-4 bg-[#F5EEE6] rounded w-full  shadow-lg">
        <p className="text-xl font-semibold mb-2">They Have Deep Knowledge</p>
        <div className="flex items-start gap-3">
          <Image src={"/image/user/emp-3.jpg"} width={50} height={50} alt="" className="rounded-full"></Image>
          <div>
            <p>They listen to their clients and give updates, so no-doubt they have deep knowledge of their work.
            </p>
            <div className="flex gap-1 text-yellow-500"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
            <p className="text-[#112D4E]">RAKESH JHA</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
