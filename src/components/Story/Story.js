import Image from "next/image"
import styles from "./Story.module.css";

const Story = () => {
    return (
        <div>
            <div className={styles.main} >
                <Image src={'/image/about/success.jpg'}
                    height={500}
                    width={500}
                    alt=""
                    className="px-8"></Image>
                <div className={styles.child}>
                    <h1 className="text-5xl  font-extrabold text-[#112D4E] mb-4">Our success story</h1>
                    <p className="mb-4">
                        Reliable Technologiess is a leading company specializing in the development of top-notch algorithmic trading systems catering to both retail traders and enterprise-level clients. Our fundamental business philosophy revolves around dedicating our research and technology efforts to create strategies that contribute to overall wealth. We uphold high standards for performance and returns.
                        <br />
                        <br />
                        At Reliable Technologiess, we have streamlined a straightforward trading approach using technical and logical numbers. These numbers are generated through sophisticated formulas developed with expertise and skills, rigorously tested for accuracy in predicting market trends. Our fully automated algorithmic trading systems have undergone extensive backtesting and have successfully met our stringent criteria before being made available to the public.
                        <br />
                        <br />
                        In order to maintain competitiveness, we are actively seeking to incorporate the most advanced algorithmic trading tools to enhance our performance and consistently achieve favorable returns. The Reliable Technologiess Trading System is designed to simplify and improve your trading experience, providing clarity and ease in navigating the markets.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Story
