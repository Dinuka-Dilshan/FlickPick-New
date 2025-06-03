import Logo from "@/components/app-bar/logo";
import MobileMenu from "@/components/app-bar/mobile-menu";
import NavLink from "@/components/app-bar/nav-link";

export const NAV_ROUTES = [
  { href: "/movies", label: "Top Movies" },
  { href: "/tvs", label: "Top TVs" },
];

const AppBar = async () => {
  return (
    <div className="bg-zinc-900 h-[8vh] flex justify-between px-5 lg:px-20 items-center">
      <Logo />
      <div className="gap-4 hidden lg:flex">
        {NAV_ROUTES.map(({ href, label }) => (
          <NavLink key={href} href={href}>
            {label}
          </NavLink>
        ))}
      </div>
      <MobileMenu />
    </div>
  );
};

export default AppBar;
