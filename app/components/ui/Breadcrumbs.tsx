"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
  className?: string;
}

export default function Breadcrumbs({ crumbs, className = "" }: BreadcrumbsProps) {
  const router = useRouter();

  return (
    <nav className={`flex items-center gap-4 ${className}`}>
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-stone-600 bg-white border border-stone-200 rounded-full hover:bg-stone-50 hover:border-stone-300 transition-all shadow-sm active:scale-95"
      >
        <IoChevronBack className="w-4 h-4" />
        Back
      </button>

      {/* Crumb List */}
      <div className="flex items-center gap-1.5 text-xs text-stone-400">
        <Link href="/" className="hover:text-stone-600 transition-colors font-medium">
          Home
        </Link>
        {crumbs.map((crumb, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <IoChevronForward className="w-3 h-3 flex-shrink-0" />
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="hover:text-stone-600 transition-colors font-medium"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-stone-600 font-semibold truncate max-w-[150px] sm:max-w-none">
                {crumb.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
