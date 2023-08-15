"use client";

import { faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Footer() {
	let { theme } = useTheme();

	return (
		<>
			<footer className={`bg-slate-900 h-20 ${theme === "light" ? "bg-white" : "bg-dark"}`}>
				<div className="w-5/6 h-full mx-auto flex justify-center gap-2 items-center">
					<Link className="block" href="https://twitter.com/the_yugandharr">
						<FontAwesomeIcon icon={faTwitter} className="text-2xl mx-2 hover:text-[#1DA1F2]" />
					</Link>
					<Link className="block" href="https://www.instagram.com/the_yugandharr/">
						<FontAwesomeIcon icon={faInstagram} className="text-2xl mx-2 hover:text-[#C13584]" />
					</Link>
					<Link className="block" href="https://github.com/YugandharrPatil">
						<FontAwesomeIcon icon={faGithub} className="text-2xl mx-2 hover:text-[#817f7f]" />
					</Link>
					<Link className="block" href="mailto:yugandharrpatil@gmail.com">
						<FontAwesomeIcon icon={faEnvelope} className="text-2xl mx-2 hover:text-[#94a3b8]" />
					</Link>
				</div>
			</footer>
		</>
	);
}
