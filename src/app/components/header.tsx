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
					<h2 className={`${sourceCodePro.className} text-2xl mt-5`}>I Build With Code.</h2>
					<p className="mt-10">
						I am a self-taught programmer from India
						<Image className="inline" src="/flag.png" width={25} height={25} alt="India" />! I started out as a directionless kid, worked my way up
						the software development ladder by learning new skills & taking up new challenges. Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Voluptas, saepe!
					</p>
					<p className="mt-10">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente porro magnam cupiditate nisi perferendis consequatur beatae! Fugit ab
						quidem modi, excepturi ex voluptatum repudiandae perferendis expedita doloribus cumque eum nihil?
					</p>
				</div>
				<div className="xl:w-1/2 xl:relative order-first xl:order-last">
					<Image
						className="xl:absolute right-0 w-full sm:h-[40rem] mx-auto 2xl:h-full sm:w-auto"
						src="/profile.jpg"
						width={8274}
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
