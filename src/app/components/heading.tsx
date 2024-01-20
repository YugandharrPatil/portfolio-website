export default function Heading({ heading }: { heading: string }) {
  return (
    <>
      <h1 className="mb-10 text-center text-3xl font-semibold">{heading}</h1>
    </>
  );
}
