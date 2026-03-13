"use client";

import { Link } from "@heroui/react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-default-50 py-12 px-8 mt-20 border-t border-divider">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <Image
            src="/localcraftlogo.svg"
            width={200}
            height={200}
            alt="Localcraft Logo"
            className="opacity-80 grayscale"
          />
          <p className="text-sm text-default-500 text-center md:text-left">
            © {new Date().getFullYear()} Localcraft. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-small">Explore</h4>
            <Link href="#" color="foreground" size="sm" className="opacity-70">
              Cities
            </Link>
            <Link href="#" color="foreground" size="sm" className="opacity-70">
              Cafes
            </Link>
            <Link href="#" color="foreground" size="sm" className="opacity-70">
              Roasters
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-small">Legal</h4>
            <Link href="#" color="foreground" size="sm" className="opacity-70">
              Privacy Policy
            </Link>
            <Link href="#" color="foreground" size="sm" className="opacity-70">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
