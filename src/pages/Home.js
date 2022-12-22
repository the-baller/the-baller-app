import { Link } from "react-router-dom";
import Slider1 from "../assets/slider1.jpg";
import Sapa from "../assets/sapa-alert.png";
import Payment from "../assets/payment-option.jpg";
import Billings from "../assets/billings.jpg";
import EppMe from "../assets/epp-me.jpg";
import Ballers from "../assets/ballers.jpg";
import Seamless from "../assets/seamless.jpg";
import Header from "../layout/Header";

const Home = () => {
  return (
    <>
    <Header />
      <div class="bg-[#00161F] bg-gradient-to-r from-indigo-900 text-white py-[50px]">
        <section class="w-full h-[70vh] flex flex-col m-auto w-[85%] justify-between items-center pt-0 md:flex-row animate-fade-in-down">
          <div class="flex flex-col md:w-3/4 lg:w-1/2">
            <h1 class="font-['Neutral Face'] font-semibold text-5xl font-bold">
              Why be a Mechanic when you can be a Baller?
            </h1>
            <p class="py-5 text-xl">
              The Baller app is the sure one-stop solution for your budgeting
              and financial management needs. Do you consistently find yourself
              unexplanably broke despite a steady source of income. The Baller
              app got you covered in this aspect.
            </p>
            <Link
              class="block text-center font-semibold text-md w-2/4 bg-[#8941FF] py-3 px-4 rounded-md"
              to="/sign-in"
            >
              Get Started
            </Link>
          </div>

          <div class="hidden md:block">
            <img
              src={Slider1}
              class="md:w-[450px] h-[400px] relative z-50 rounded-xl lg:w-[450px]"
              alt="money1"
            />
          </div>
          <div class="hidden md:block animate-ping opacity-75 absolute bottom-5 right-[25%] bg-[#FF68F9] w-[20px] h-[20px] rounded-[50%]"></div>
          <div class="hidden md:block absolute bottom-[-5%] right-[4%] bg-[#8941FF] w-[200px] h-[200px] rounded-[50%]"></div>
        </section>

        <section class="block m-auto w-[85%] pt-[40px] min-h-[120vh] md:pt-[120px] lg:min-h-[100vh]">
          <h2 class="font-['Neutral Face'] font-semibold text-4xl font-bold text-center lg:text-start">
            What we brings to the table
          </h2>
          <div class="grid gap-3 py-5 md:grid-cols-2 lg:grid-cols-3">
            <div class="w-[100%] h-[100%] flex flex-col justify-between bg-[#021E2A] p-8 border-solid rounded-xl m-auto">
              <img
                src={Sapa}
                alt="sapa alert"
                class="w-[70px] h-[70px] rounded-[50%]"
              />
              <h2 class="font-semibold text-xl">SAPA ALERT</h2>
              <p>
                Keeps you in check and get in time warning when you are about to
                spend above your income
              </p>
            </div>
            <div class="w-[100%] h-[100%] flex flex-col justify-between bg-[#021E2A] p-8 border-solid rounded-xl m-auto">
              <img
                src={Payment}
                alt="multiple payment"
                class="w-[70px] h-[70px] rounded-[50%]"
              />
              <h2 class="font-semibold py-3 text-xl">OFFLINE PAYMENT</h2>
              <p>
                Despite the rapidly increasing use of digital payment systems,
                issues such as poor network connectivity and buggy bank
                applications persist. Our Baller Offline Payment (BOP) service
                allows you to make payments even when you are not online.
              </p>
            </div>
            <div class="flex flex-col justify-between bg-[#021E2A] p-8 border-solid rounded-xl m-auto">
              <img
                src={Billings}
                alt="Billings"
                class="w-[70px] h-[70px]  rounded-[50%]"
              />
              <h2 class="font-semibold py-3 text-xl">BILLINGS & DOINGS</h2>
              <p>
                Want someone who has worked alongside TikTok (the company),
                Flighthouse, and other key players in the space to share key
                insights and advise on ongoing strategy? We have the team for
                that.
              </p>
            </div>
            <div class="flex flex-col justify-between bg-[#021E2A] p-8 border-solid rounded-xl m-auto">
              <img
                src={EppMe}
                alt="Help Me"
                class="w-[70px] h-[70px] rounded-[50%]"
              />
              <h2 class="font-semibold py-3 text-xl">EPP ME</h2>
              <p>
                Whenever you hit rock bottom. This helps(Epp) you to get funds.
              </p>
            </div>
            <div class="flex flex-col justify-between bg-[#021E2A] p-8 border-solid rounded-xl m-auto">
              <img
                src={Ballers}
                alt="Ballers"
                class="w-[70px] h-[70px] rounded-[50%]"
              />
              <h2 class="font-semibold py-3 text-xl">BALLER-TO-BALLER</h2>
              <p>
                Baller to Baller is a peer-to-peer transfer functionality. You
                transfer from one baller account to another free of charge.
              </p>
            </div>
            <div class="flex flex-col justify-between bg-[#021E2A] p-8 border-solid rounded-xl m-auto">
              <img
                src={Seamless}
                alt="Seamless"
                class="w-[70px] h-[70px] rounded-[50%]"
              />
              <h2 class="font-semibold py-3 text-xl">SEAMLESS</h2>
              <p>
                Want someone who has worked alongside TikTok (the company),
                Flighthouse, and other key players in the space to share key
                insights and advise on ongoing strategy? We have the team for
                that.
              </p>
            </div>
          </div>
        </section>

        <section class="py-5 text-center m-auto w-[90%] md:w-[80%] lg:w-[60%]">
          <h2 class="font-['Neutral Face'] font-semibold text-4xl font-bold">
            About Us
          </h2>
          <p class="py-5 text-xl">
            The BALLER app is the sure-one-stop solution for your budgetting and
            financial management needs. Do you constantly find yourself
            unexplainably broke despite your steady source of income? Read
            more...
          </p>
          <Link
            class="block m-auto text-center font-semibold text-md w-2/4 bg-[#8941FF] py-3 px-4 rounded-md"
            to="/"
          >
            Hear our story
          </Link>
        </section>

        <section class="relative">
          <div class="hidden lg:block absolute top-[-10%] left-[18%] bg-[#8941FF] w-[150px] h-[150px] rounded-[50%]"></div>
          <div class="relative bg-[#00000F] p-[50px] text-center mt-[30px] m-auto w-[90%] rounded-xl md:w-[80%] lg:w-[60%]">
            <div class="hidden md:block animate-ping opacity-75 absolute top-7 left-6 bg-[#FF68F9] w-[20px] h-[20px] rounded-[50%]"></div>
            <h2 class="text-2xl font-bold md:text-4xl">
              How was your experience?
            </h2>
            <h2 class="text-2xl font-bold py-3 md:text-4xl">
              Give us a feedback
            </h2>
            <Link
              class="block m-auto text-center font-semibold text-md w-2/4 bg-[#8941FF] p-2 rounded-md mt-2 md:w-1/4"
              to="/"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
