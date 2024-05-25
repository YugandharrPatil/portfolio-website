import {
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <div className="mt-8 flex gap-2 max-xl:justify-center">
      <Link
        target="_blank"
        className="block"
        href="https://twitter.com/the_yugandharr"
      >
        <FontAwesomeIcon
          icon={faTwitter}
          className="mx-2 text-3xl transition duration-300 ease-in-out hover:text-[#1DA1F2]"
        />
      </Link>
      <Link
        target="_blank"
        className="block"
        href="https://www.instagram.com/the_yugandharr/"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="mx-2 text-3xl transition duration-300 ease-in-out hover:text-[#C13584]"
        />
      </Link>
      <Link
        target="_blank"
        className="block"
        href="https://github.com/YugandharrPatil"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="mx-2 text-3xl transition duration-300 ease-in-out hover:text-[#5D6BC1]"
        />
      </Link>
      <Link className="block" href="mailto:yugandharrpatil@gmail.com">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="mx-2 text-3xl transition duration-300 ease-in-out hover:text-[#94a3b8]"
        />
      </Link>
    </div>
  );
}
