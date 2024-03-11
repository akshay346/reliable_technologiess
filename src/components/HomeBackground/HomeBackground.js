import Image from "next/image"
import HomeText from "./HomeText"
import Boxes from "./Boxes"
import backgroundImage from "../../../public/image/homepage-bg.jpg";

const HomeBackground = () => {
    return (
        <div>
            <section
                style={{
                    backgroundImage: `url(${backgroundImage.src})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "100vh",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start'
                }}>
                <HomeText />
            </section>
            <Boxes />
        </div>

    )
}

export default HomeBackground
