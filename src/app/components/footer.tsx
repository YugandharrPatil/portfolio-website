import { faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
	return (
		<>
			<footer className="bg-slate-900 h-20">
				<main className="w-5/6 mx-auto text-center">
					<div className="">
						<Link href="https://twitter.com/the_yugandharr">
							<FontAwesomeIcon icon={faTwitter} className="text-2xl mx-2 hover:text-twitter" /> {/* color: "red"*/}
						</Link>
						<Link href="https://twitter.com/the_yugandharr">
							<FontAwesomeIcon icon={faInstagram} className="text-2xl mx-2 hover:text-instagram" /> {/* color: "red"*/}
						</Link>
						<Link href="https://twitter.com/the_yugandharr">
							<FontAwesomeIcon icon={faGithub} className="text-2xl mx-2 hover:text-github" /> {/* color: "red"*/}
						</Link>
					</div>
				</main>
			</footer>
		</>
	);
}
