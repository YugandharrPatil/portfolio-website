import { Playfair_Display, Source_Code_Pro } from "next/font/google";
import Image from "next/image";
import Hr from "./hr";

const playfairDisplay = Playfair_Display({
	weight: "900",
	subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
	weight: "700",
	subsets: ["latin"],
});

export default function Header() {
	return (
		<>
			<main className="mt-10 mx-auto w-11/12 text-center xl:text-left md:w-5/6 sm:w-5/6 lg:w-11/12 xl:w-5/6 flex-col xl:flex-row xl:justify-between flex xl:gap-4 xl:h-[50rem] md:h-[72rem] sm:[100rem]">
				<div className="px-5 sm:px-10 md:px-20 xl:px-0 data xl:mt-40 mt-20 xl:w-1/2 xl:self-center order-last xl:order-first">
					<h1 className={`text-4xl sm:text-7xl xl:text-8xl leading-tight tracking-normal ${playfairDisplay.className}`}>
						Yugandhar <br />
						Patil
					</h1>
					<h2 className={`${sourceCodePro.className} text-2xl mt-5 lg:mt-8`}>I Build With Code.</h2>
					<p className="mt-10">
						<span className="font-bold text-lg">Hey there! Welcome to my Website!</span> <br /> I&apos;m Yugandhar, an indie software developer from
						India
						<Image className="inline" src="/flag.png" width={25} height={25} alt="India" />! My passion for technology stems from my love for
						computers ever since my dad got me one when I was 8, and I&apos;ve never looked back ever since!
						<br />
						<br />
						I&apos;m a completely self-taught programmer with a knack for problem-solving and a passion for creating efficient software solutions. I
						enjoy bringing ideas to life through clean and elegant code.
					</p>
					<p className="mt-10">
						<strong>My Passion:</strong> Build cutting-edge tech products, one line of code at a time.
						<br />
						Let&apos;s join forces and navigate the exciting possibilities that lie ahead
					</p>
				</div>
				<div className="xl:w-1/2 xl:relative order-first xl:order-last">
					<Image
						className="right-0 xl:absolute w-full sm:h-[40rem] mx-auto 2xl:h-full sm:w-auto"
						src="/pic.jpeg"
						width={1000}
						height="0"
						alt="profile"
					/>
				</div>
			</main>
			<div className="mt-40 mb-48">
				<Hr />
			</div>
		</>
	);
}
