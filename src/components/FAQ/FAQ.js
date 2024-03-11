import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import styles from "./FAQ.module.css";

const FAQ = () => {
    return (
        <div className={styles.main}>
            <div className="w-[100%]">
                <Accordion type="single" collapsible className="gap-1 flex flex-col">
                    <AccordionItem value="item-1" className={styles.item}>
                        <AccordionTrigger>What is algorithmic trading?</AccordionTrigger>
                        <AccordionContent>
                        Algorithmic trading is also known as Robo trading or automated trading system. Algo Trading uses various mathematical models to execute the most profitable trades based on market data. Unlike traditional system trading strategies, which require human interventions, algo trading India uses quantitative trading, needs no help from you, and executes transactions at lightning speed with unmatchable accuracy, algo software is a buy and sells signal where a human trades using automated buying and selling decisions. By using our Platform, you can trade with one of the best algo trading software in India with cutting-edge platforms, including Amibroker, Tradingview and MetaTrader 4 (MT4), as well as with our native APIs.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className={styles.item}>
                        <AccordionTrigger>What is algo trading and how does it work?</AccordionTrigger>
                        <AccordionContent>
                        Algo trading is machine trading which involves minimum human interference. Algo trading uses predefined strategies from amibroker, metatrader4, and trading view applications, it will executes trade at a speed which is impossible for a normal human to trade.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className={styles.item}>
                        <AccordionTrigger>What is the future of Algorithmic Trading in india?</AccordionTrigger>
                        <AccordionContent>
                        The stock market is expected to grow rapidly in terms of usage of algo trading. It is expected that the percentage of algo trading in derivatives and commodity markets will grow significantly across the globe.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className={styles.item}>
                        <AccordionTrigger>Is Algo trading legal in India?</AccordionTrigger>
                        <AccordionContent>
                        Yes, algo trading is legal in India and anyone can trade using it.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div className="w-[100%]">
                <Accordion type="single" collapsible className="gap-1 flex flex-col">
                    <AccordionItem value="item-1" className={styles.item}>
                        <AccordionTrigger>What are the benefits of using the Algo Trading Platform?   </AccordionTrigger>
                        <AccordionContent>
                        Our Algo Trading Platform offers benefits such as automation of trading strategies, risk management, real-time data, user-friendly interface, and the ability to trade 24/7
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className={styles.item}>
                        <AccordionTrigger>What services does Reliable Technologiess offer?</AccordionTrigger>
                        <AccordionContent>
                        Reliable Technologiess  provides  main services: Algo Trading Platform. The Algo Trading Platform allows users to automate their trading strategies.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className={styles.item}>
                        <AccordionTrigger>Is algo trading possible for individuals?</AccordionTrigger>
                        <AccordionContent>
                        The stock market provides equal opportunity to every individual in the market and hence Reliable technologiess providing automated trading platform for retail trader to trade stocks, commodities, currencies and forex.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className={styles.item2}>
                        <AccordionTrigger>Can I customize my trading algorithms with your platform?</AccordionTrigger>
                        <AccordionContent>
                        Yes, our Algo Trading Platform allows users to customize trading algorithms according to their specific strategies and preferences.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQ;
