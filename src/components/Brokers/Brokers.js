import Marquee from "react-fast-marquee";
import Image from "next/image";

const Brokers = () => {
  return (
    <Marquee className="z-0">
      <div>
        <Image src={"/image/5paisa.png"} width={250} height={250} alt=""></Image>
      </div>
      <div>
        <Image src={"/image/alice.png"} width={250} height={250} alt=""></Image>
      </div>
      <div>
        <Image src={"/image/angel.png"} width={250} height={250} alt=""></Image>
      </div>
      <div>
        <Image src={"/image/fyers.png"} width={250} height={250} alt=""></Image>
      </div>
      <div>
        <Image src={"/image/iifl.png"} width={250} height={250} alt=""></Image>
      </div>
      <div>
        <Image src={"/image/master.png"} width={250} height={250} alt=""></Image>
      </div>
    </Marquee>
  );
};

export default Brokers;
