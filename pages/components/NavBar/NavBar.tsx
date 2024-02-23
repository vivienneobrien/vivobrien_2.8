import { useTheme } from "next-themes";
import { NavItem } from "./types";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-scroll";

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

export const NavBar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [navBar, setNavBar] = useState(false);
  return (
    <header className="w-full mx-auto px-4 shadow">
      {/* sm:px-20 */}
      <div className="justify-between md:items-center md:flex">
        <div className="flex items-center justify-between py-3">
          <div className="md:py-5 md:block">
            <Link to="home" className="cursor-pointer">
              <h2 className="text-2xl font-bold">Viv O'Brien</h2>
            </Link>
          </div>

          <div className="md:hidden">
            {/* allows for us to view menu dropdown */}
            <button onClick={() => setNavBar(!navBar)}>
              {navBar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navBar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, id) => {
                return (
                  <Link
                    key={id}
                    to={item.page}
                    className={
                      "block lg:inline-block text-neutral-900 hover:text-neutral-500 " // dark:text-neutral-100
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={() => setNavBar(!navBar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
