"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type Props = {
  href: string;
  className?: string;
  onClick?: () => void;
};

const NavLink = ({
  href,
  children,
  className,
  onClick,
}: PropsWithChildren<Props>) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      onClick={onClick}
      prefetch={false}
      href={href}
      className={cn(isActive ? "text-pink-400" : "text-[#B3B3B3]", className)}
    >
      {children}
    </Link>
  );
};

export default NavLink;
