"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type Props = {
  href: string;
};

const NavLink = ({ href, children }: PropsWithChildren<Props>) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(isActive ? "text-pink-400" : "text-[#B3B3B3]")}
    >
      {children}
    </Link>
  );
};

export default NavLink;
