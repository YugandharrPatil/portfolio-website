import { Card } from "./ui/card";

export default function MyCard({ children }: { children: React.ReactNode }) {
  return <Card className="w-fit px-6 pb-4">{children}</Card>;
}
