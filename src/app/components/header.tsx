import { Kumar_One, Playfair_Display, Source_Code_Pro } from "next/font/google";
import Image from "next/image";
import flag from "../../../public/flag.png";
import profilePic from "../../../public/pic.jpeg";

const playfairDisplay = Playfair_Display({
  weight: ["900"],
  subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
  weight: "500",
  subsets: ["latin"],
});

const kumarOne = Kumar_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <>
      <main
        id="about"
        className="container flex flex-row justify-between bg-background pb-4 pt-32 max-xl:flex-col xl:h-screen"
      >
        <div className="order-first max-xl:order-last max-xl:text-center xl:w-1/2 xl:self-center">
          <h1
            className={`text-5xl font-black leading-tight tracking-normal max-xl:my-10 sm:text-7xl xl:text-8xl ${playfairDisplay.className}`}
          >
            Hi, <br />
            I&apos;m <span> </span>
            <span className="tracking-wide">
              <span className="z-10 text-[#67e8f9] drop-shadow-[-6px_0px_#e11d48]">
                Y
              </span>
              ugandhar
            </span>
          </h1>
          <h3
            className={`${sourceCodePro.className} mt-5 text-2xl text-gray-600 lg:mt-8`}
          >
            Full-Stack Developer | Designer | Blogger
          </h3>
          <br />
          <p
            className={`${kumarOne.className} text-lg tracking-wider max-xl:my-2`}
          >
            Creating beautiful & engaging digital experiences from India
            <Image className="inline h-7 w-7" src={flag} alt="Indian flag" />
          </p>
        </div>
        <div className="order-first xl:order-last xl:w-1/2">
          <Image
            className="w-full max-xl:mx-auto sm:h-[40rem] sm:w-auto xl:ms-auto 2xl:h-full"
            src={profilePic}
            // width={1000}
            // height="0"
            alt="profile"
          />
        </div>
      </main>
    </>
  );
}
