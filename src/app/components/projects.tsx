import Hr from "./hr";

export default function Projects({ heading }: any) {
	return (
		<>
			<h1 className="text-3xl text-center" id="projects">
				{heading}
			</h1>
			<main className="max-w-screen-2xl">This is some skills content</main>
			<Hr />
		</>
	);
}
