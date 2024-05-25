import {
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const LINKS = {
  TWITTER: "https://twitter.com/the_yugandharr",
  INSTAGRAM: "https://www.instagram.com/the_yugandharr/",
  GITHUB: "https://github.com/YugandharrPatil",
  EMAIL: "mailto:yugandharrpatil@gmail.com",
};

export default function SocialIcons() {
  return (
    <div className="mt-8 flex gap-2 max-xl:justify-center">
      <Link target="_blank" className="block" href={LINKS.TWITTER}>
        <FontAwesomeIcon
          icon={faTwitter}
          className="mx-2 text-3xl transition duration-300 ease-in-out hover:text-[#1DA1F2]"
        />
      </Link>
      <Link target="_blank" className="block" href={LINKS.INSTAGRAM}>
        <FontAwesomeIcon
          icon={faInstagram}
          className="mx-2 text-3xl transition duration-300 ease-in-out hover:text-[#C13584]"
        />
      </Link>
      <Link target="_blank" className="block" href={LINKS.GITHUB}>
        <FontAwesomeIcon
          icon={faGithub}
          className="mx-2 text-3xl transition duration-300 ease-in-out hover:text-[#5D6BC1]"
        />
      </Link>
      <Link className="block" href={LINKS.EMAIL}>
        <FontAwesomeIcon
          icon={faEnvelope}
          className="mx-2 text-3xl transition duration-300 ease-in-out hover:text-[#94a3b8]"
        />
      </Link>
    </div>
  );
}
