import Brokers from "@/components/Brokers/Brokers";
import FAQ from "@/components/FAQ/FAQ";
import HomeBackground from "@/components/HomeBackground/HomeBackground";
import HomeBox from "@/components/HomeBox/HomeBox";
import PaymentButton from "@/components/PaymentButton/PaymentButton";
import Testimonials from "@/components/Testimonials/Testimonials";
import WorkBox from "@/components/WorkBox/WorkBox";

export default function Home() {
  return (
    <>
      <PaymentButton />
      <HomeBackground />
      <div className="max-w-5xl m-auto mt-24">
        <div>
          <div className="text-6xl text-center font-extrabold text-[#112D4E]">
            What we Offer For You?
          </div>
          <div className="mt-8">
            <HomeBox />
          </div>
        </div>
        <div className="mt-14">
          <p className="text-6xl text-center font-extrabold text-[#112D4E]">
            Why you should work with us!
          </p>
          <div className="mt-8">
            <WorkBox />
          </div>
        </div>
      </div>
      <div className="mt-14">
        <p className="text-xl text-center text-[#3F72AF]">
          ------ Testimonials ------
        </p>
        <p className="text-6xl text-center font-extrabold text-[#112D4E]">
          What people say about us?
        </p>
        <div className="mt-8">
          <Testimonials />
        </div>
      </div>
      <div className="max-w-5xl m-auto mt-24">
        <div className="mt-14">
          <p className="text-6xl text-center font-extrabold text-[#112D4E]">
            Supported Brokers
          </p>
          <div className="mt-0">
            <Brokers />
          </div>
        </div>
        <div className="mt-14">
          <p className="text-6xl text-center font-extrabold text-[#112D4E]">
            FAQs
          </p>
          <div className="mt-8 mb-8">
            <FAQ />
          </div>
        </div>
      </div>
    </>
  );
}
