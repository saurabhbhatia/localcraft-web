import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import Link from "next/link";

interface CityCardProps {
  name: string;
}

function citySlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function CityCard({ name }: CityCardProps) {
  function cityImage(name: string): string {
    switch (name) {
      case "Sydney":
        return "./cities/sydney.jpg";
      case "Melbourne":
        return "./cities/melbourne.jpg";
      case "San Francisco":
        return "./cities/sanfrancisco.jpg";
      default:
        return "Unknown City";
    }
  }
  return (
    <Link href={`/city/${citySlug(name)}`} className="block w-full">
      <Card className="py-4 border-l-1 border-t-1 border-r-4 border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:p-1 hover:cursor-pointer transition-all duration-200 ease-in-out">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{name}</h4>
        </CardHeader>
        <CardBody className="overflow-visible pt-2 px-2 flex flex-col items-center">
          <Image
            alt="Card background"
            className="object-cover border border-solid w-full"
            src={cityImage(name)}
          />
        </CardBody>
      </Card>
    </Link>
  );
}
