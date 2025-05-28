import Logo from "@/components/appbar/logo";
import NavLink from "@/components/appbar/navlink";

const NAV_ROUTES = [
  { href: "/movies", label: "Top Movies" },
  { href: "/tvs", label: "Top TVs" },
];

const AppBar = async () => {
  return (
    <div className="bg-zinc-900 h-[8vh] flex justify-between px-5 lg:px-20 items-center">
      <Logo />
      <div className="flex gap-4">
        {NAV_ROUTES.map(({ href, label }) => (
          <NavLink key={href} href={href}>
            {label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AppBar;
