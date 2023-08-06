export default function Heading({ heading }: { heading: string }) {
	return (
		<>
			<h1 className="text-3xl text-center mb-10 font-semibold">{heading}</h1>
		</>
	);
}
