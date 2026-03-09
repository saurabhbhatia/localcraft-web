import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import Link from "next/link";

export interface ListingCardProps {
  name?: string;
  url?: string;
  image?: string;
  suburb?: string;
  city?: string;
}

export default function ListingCard({
  name,
  url,
  image,
  suburb,
  city,
}: ListingCardProps) {
  const content = (
    <Card className="py-4 border-l-1 border-t-1 border-r-4 border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:p-1 hover:cursor-pointer transition-all duration-200 ease-in-out">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start text-left">
        <p className="text-tiny uppercase font-bold">{suburb || "Daily Mix"}</p>
        <small className="text-default-500">{city || "12 Tracks"}</small>
        <h4 className="font-bold text-large mt-1">
          {name || "Frontend Radio"}
        </h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex flex-col items-center">
        <Image
          alt={name || "Card background"}
          className="object-cover w-full"
          src={image || "https://heroui.com/images/hero-card-complete.jpeg"}
        />
      </CardBody>
    </Card>
  );

  if (url) {
    return (
      <Link href={url} className="block w-full">
        {content}
      </Link>
    );
  }

  return content;
}
