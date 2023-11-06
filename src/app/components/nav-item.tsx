import { Lato } from "next/font/google";
import Link from "next/link";
import { Button } from "./ui/button";

const lato = Lato({
	weight: "400",
	subsets: ["latin"],
});

export default function NavItem({ navText, target }: { navText: string; target: string }) {
	return (
		<>
			<Button asChild variant="ghost" className={`mr-3 text-[1.1rem] tracking-wide ${lato.className}`}>
				<Link href={target}>{navText}</Link>
			</Button>
		</>
	);
}
