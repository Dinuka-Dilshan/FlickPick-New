"use client";
import { NAV_ROUTES } from "@/components/app-bar/app-bar";
import NavLink from "@/components/app-bar/nav-link";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { useState } from "react";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger>
          <Menu />
        </DrawerTrigger>
        <DrawerContent className="p-5 pb-8">
          <DrawerHeader>
            <DrawerTitle className="hidden">Navigation Menu</DrawerTitle>
            <DrawerDescription className="flex flex-col gap-4">
              {NAV_ROUTES.map(({ href, label }) => (
                <NavLink
                  key={href}
                  href={href}
                  className="text-lg"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default MobileMenu;
