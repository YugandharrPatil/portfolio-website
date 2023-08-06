"use client";

import Link from "next/link";

export default function NavLink({ target, navText }: { target: string; navText: string }) {
	return <Link href={target}>{navText}</Link>;
}
