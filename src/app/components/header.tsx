import { Playfair_Display, Source_Code_Pro, Stalemate } from "next/font/google";
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

const stalemate = Stalemate({
	weight: "400",
	subsets: ["latin"],
});

export default function Header({ heading }: any) {
	return (
		<>
			<main className="my-10 mx-auto max-w-screen-2xl w-5/6 justify-between flex">
				<div className="data mt-40 w-1/2">
					<h1 className={`text-8xl leading-tight tracking-normal ${playfairDisplay.className}`}>
						Yugandhar <br />
						Patil
					</h1>
					<h2 className={`${sourceCodePro.className} text-2xl mt-5`}>I Build With Code.</h2>
					{/* <p className="mt-5">
						I am a self-taught programmer from India
						<Image className="inline" src="/flag.png" width={25} height={25} alt="India" />! I started out as a directionless kid, worked my way up
						the software development ladder by learning new skills & taking up new challenges.
					</p> */}
				</div>
				<div className="image">
					<Image src="/profile.jpg" width={550} height={1000} alt="profile" />
				</div>
			</main>
			<Hr />
		</>
	);
}
