import Link from "next/link";
import { Popover } from "@headlessui/react";
import { usePathname } from "next/navigation";
import BurgerMenu from "./BergerMenu";
import { useAppContext } from "./Appcontext";

const Navbar = () => {
  const pathname = usePathname();
  const { panier } = useAppContext();
  return (
    <Popover className="  w-full px-2">
      <div className="w- flex items-center justify-between py-4   ">
        <BurgerMenu />

        <Popover as="nav" className="hidde  space-x-2 md:flex">
          <Link
            className={
              pathname == "/"
                ? "rounded-md py-2 px-2 md:px-4 border-b-8 border-black font-bold text-white bg-slate-400  transition duration-300 hover:bg-gray-700 hover:ease-in"
                : "rounded-md py-2 px-2 md:px-4 text-gray-500  transition duration-300 hover:bg-gray-700 hover:text-gray-50 hover:ease-in"
            }
            href="/"
          >
            Home
          </Link>

          <Link
            className={
              pathname == "/panier"
                ? "rounded-md py-2 px-2 md:px-4 border-b-8 border-black font-bold text-white bg-slate-400  transition duration-300 hover:bg-gray-700 hover:ease-in"
                : "relative rounded-md py-2 px-2 md:px-4 text-gray-500  transition duration-300 hover:bg-gray-700 hover:text-gray-50 hover:ease-in"
            }
            href="/panier"
          >
            {(panier.length !== 0) & (pathname !== "/panier") ? (
              <div className="w-3 h-3 text-center font-bold rounded-full text-[10px] text-white bg-red-700 absolute top-0 left-0 ">
                {panier.length}
              </div>
            ) : null}
            Panier
          </Link>

          <Link
            className={
              pathname == "/profil"
                ? "rounded-md py-2 px-2 md:px-4 border-b-8 border-black font-bold text-white bg-slate-400  transition duration-300 hover:bg-gray-700 hover:ease-in"
                : "rounded-md py-2 px-2 md:px-4 text-gray-500  transition duration-300 hover:bg-gray-700 hover:text-gray-50 hover:ease-in"
            }
            href="/profil"
          >
            Profil
          </Link>
        </Popover>
      </div>
      {/* 
      <Popover.Panel
        focus
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      > */}
      {/* {({ close }) => (
          <div className="divide-y-2 divide-neutral-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-end">
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>X
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5 ">
              <div className="grid grid-cols-1 gap-y-2 gap-x-8 ">
                <Link
                  className={
                    pathname == "/about-me"
                      ? "text-base font-bold text-neutral-500 hover:text-neutral-600 "
                      : "text-base text-neutral-500 hover:text-neutral-600"
                  }
                  href="/about-me"
                  onClick={() => close()}
                >
                  About me
                </Link>

                <Link
                  className={
                    pathname == "/projet"
                      ? "text-base font-bold text-neutral-500 hover:text-neutral-600"
                      : "text-base text-neutral-500 hover:text-neutral-600"
                  }
                  href="/projet"
                  onClick={() => close()}
                >
                  Projects
                </Link>
                <Link
                  className={
                    pathname == "/blog"
                      ? "text-base font-bold text-neutral-500 hover:text-neutral-600"
                      : "text-base text-neutral-500 hover:text-neutral-600"
                  }
                  href="/blog"
                  onClick={() => close()}
                >
                  Blog
                </Link>

                <div>
                  <ul className="flex flex-row items-center space-x-3"></ul>
                </div>
              </div>
            </div>
          </div>
        )} */}
      {/* </Popover.Panel> */}
    </Popover>
  );
};
export default Navbar;
