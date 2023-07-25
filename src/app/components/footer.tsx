import Hr from "./hr";

export default function Footer({ heading }: any) {
	return (
		<>
			<h1 className="text-3xl text-center">{heading}</h1>
			<main className="max-w-screen-2xl">This is some footer content</main>
			<Hr />
		</>
	);
}
