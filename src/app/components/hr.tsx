export default function Hr({ ID }: { ID: string }) {
  return (
    <hr
      id={ID}
      className={`mx-auto my-24 block w-1/12 border-t-8 border-dotted border-gray-600`}
    />
  );
}
