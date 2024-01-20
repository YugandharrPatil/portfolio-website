"use client";

import {
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Footer() {
  let { theme } = useTheme();

  return (
    <>
      <footer className="h-20 border border-t border-gray-800">
        <div className="mx-auto flex h-full w-5/6 items-center justify-center gap-2">
          <Link
            target="_blank"
            className="block"
            href="https://twitter.com/the_yugandharr"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="mx-2 text-2xl hover:text-[#1DA1F2]"
            />
          </Link>
          <Link
            target="_blank"
            className="block"
            href="https://www.instagram.com/the_yugandharr/"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="mx-2 text-2xl hover:text-[#C13584]"
            />
          </Link>
          <Link
            target="_blank"
            className="block"
            href="https://github.com/YugandharrPatil"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="mx-2 text-2xl hover:text-[#6e5494]"
            />
          </Link>
          <Link className="block" href="mailto:yugandharrpatil@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mx-2 text-2xl hover:text-[#94a3b8]"
            />
          </Link>
        </div>
      </footer>
    </>
  );
}
