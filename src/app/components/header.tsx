import { playfairDisplay, sourceCodePro } from "@/utils/fonts";
import Image from "next/image";
// import flag from "../../../public/flag.png";
import profilePic from "../../../public/pic.jpeg";
import SocialIcons from "./social-icons";

export default function Header() {
  return (
    <main
      id="about"
      className="container mt-32 flex flex-col items-center justify-center bg-background xl:flex-row"
    >
      {/* TEXT SECTION */}
      <div className="order-last text-center xl:order-first xl:w-1/2 xl:text-left">
        <h1
          className={`text-5xl font-black leading-tight tracking-normal max-xl:my-10 sm:text-7xl xl:text-8xl ${playfairDisplay.variable} font-playfairDisplay`}
        >
          Hi! I&apos;m <br />
          <span className="tracking-wide">
            <span className="z-10 text-[#67e8f9] drop-shadow-[-6px_0px_#e11d48]">
              Y
            </span>
            ugandhar
          </span>
        </h1>
        <h3
          className={`${sourceCodePro.className} mt-5 text-2xl font-medium text-gray-600 lg:mt-8`}
        >
          Indie Hacker | Developer | Tinkerer
        </h3>
        <SocialIcons />
      </div>
      {/* IMAGE */}
      <div className="order-first w-5/6 sm:w-2/3 lg:w-1/2 xl:order-last">
        <div className="ImageContainer relative mx-auto aspect-[3/4] h-full xl:w-3/4">
          <Image
            className="object-cover"
            quality={100}
            placeholder="blur"
            // w-full max-xl:mx-auto sm:h-[40rem] sm:w-auto xl:ms-auto 2xl:h-full
            src={profilePic}
            fill
            alt="profile"
          />
        </div>
      </div>
    </main>
  );
}
