import Image from "next/image"
import styles from "./WorkBox.module.css"

const WorkBox = () => {
  return (
    <div className={styles.main}>
      <div className={styles.box}>
          <Image src={'/image/work/professional.png'} width={200} height={200} alt=""></Image>
          <p className="mt-4 text-2xl">Proffesional Approach</p>
          <p className="text-center mt-2 text-gray-700">Our experience allows us to understand your needs and requirements precisely, analyze possible issues of your request and suggest the best way to assess them.</p>
      </div>
      <div className={styles.box}>
          <Image src={'/image/work/efficient.png'} width={240} height={240} alt=""></Image>
          <p className="mt-4 text-2xl">Efficient Programming</p>
          <p className="text-center mt-2 text-gray-700">Programming an Algorithm Trading Software of any complexity (from easy one to an extremely complex) in time requires a range of skills that consitute the art of programming.</p>
      </div>
      <div className={styles.box}>
          <Image src={'/image/work/unlimited.png'} width={200} height={200} alt=""></Image>
          <p className="mt-4 text-2xl">Unlimited Revisions</p>
          <p className="text-center mt-2 text-gray-700">The support stage is the most continuous part of the project that is held in a tight cooperation with Customer. Responding to your inquiries in a timely and professional manner in our main goal.</p>
      </div>
    </div>
  )
}

export default WorkBox
