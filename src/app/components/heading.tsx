export default function Heading({ heading, id }: { heading: string; id: string }) {
	return (
		<>
			<h1 id={id} className="text-3xl text-center mb-10 font-semibold">
				{heading}
			</h1>
		</>
	);
}
