import { faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
	return (
		<>
			<footer className="bg-slate-900 h-20">
				<div className="w-5/6 h-full mx-auto flex justify-center gap-2 items-center">
					<Link className="block" href="https://twitter.com/the_yugandharr">
						<FontAwesomeIcon icon={faTwitter} className="text-2xl mx-2 hover:text-[#1DA1F2]" /> {/* color: "red"*/}
					</Link>
					<Link className="block" href="https://www.instagram.com/the_yugandharr/">
						<FontAwesomeIcon icon={faInstagram} className="text-2xl mx-2 hover:text-[#C13584]" /> {/* color: "red"*/}
					</Link>
					<Link className="block" href="https://github.com/YugandharrPatil">
						<FontAwesomeIcon icon={faGithub} className="text-2xl mx-2 hover:text-[#817f7f]" /> {/* color: "red"*/}
					</Link>
				</div>
			</footer>
		</>
	);
}
