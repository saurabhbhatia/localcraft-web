import {
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <Navbar>
      <Link href={"/"}>
        <NavbarContent justify="start">
          <NavbarBrand>
            <Image
              src="/localcraftlogo.svg"
              width={300}
              height={300}
              alt="Picture of the author"
            />
          </NavbarBrand>
        </NavbarContent>
      </Link>
    </Navbar>
  );
}
