import { Card, CardHeader, CardBody, Image } from "@heroui/react";

export default function ListingCard() {
  return (
    <Card className="py-4 border-l-1 border-t-1 border-r-4 border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:p-1 hover:cursor-pointer transition-all duration-200 ease-in-out">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover"
          src="https://heroui.com/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );
}
