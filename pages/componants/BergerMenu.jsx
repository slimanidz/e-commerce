import { useCallback, useState } from "react";
import Link from "next/link";
import { GrMenu } from "react-icons/gr";

const BurgerMenu = () => {
  // const {
  //   state: { session },
  // } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = useCallback(
    () => setMenuOpen((state) => !state),
    []
  );

  return (
    <>
      <button className="text-xl px-4" onClick={handleToggleMenu}>
        <GrMenu className="w-8 h-8" />
      </button>
      <button
        onClick={handleToggleMenu}
        className={`flex flex-col absolute  bg-gradient-to-r  transition-all duration-500 z-50 ease-in ${
          menuOpen
            ? "left-0 top-0 w-full h-screen pt-3 "
            : "left-[-400px] top-0  pt-3"
        }`}
      >
        <div className="flex flex-col w-64 mt-10">
          <p className="p-4 bg-slate-300 border-double  border-4 border-black block hover:bg-slate-100 rounded-xl">
            <Link href="/#">item 1</Link>
          </p>
          <p className="p-4 bg-slate-300 border-double  border-4 border-black block hover:bg-slate-100 rounded-xl">
            <Link href="/#">item 2</Link>
          </p>
          <p className="p-4 bg-slate-300 border-double  border-4 border-black block hover:bg-slate-100 rounded-xl">
            <Link href="/#">item 3</Link>
          </p>
          <p className="p-4 bg-slate-300 border-double  border-4 border-black block hover:bg-slate-100 rounded-xl">
            <Link href="/#">item 4</Link>
          </p>
          <p className="p-4 bg-slate-300 border-double  border-4 border-black block hover:bg-slate-100 rounded-xl">
            <Link href="/#">item 5</Link>
          </p>
          <p className="p-4 bg-slate-300 border-double  border-4 border-black block hover:bg-slate-100 rounded-xl">
            <Link href="/#"> item 6</Link>
          </p>
          <p className="p-4 bg-slate-300 border-double  border-4 border-black block hover:bg-slate-100 rounded-xl">
            <Link href="/#">Settings</Link>
          </p>
          {/* {session && session.role === "ADMIN" && (
              <li className="bg-slate-300 border-double  border-4 border-black  rounded-xl">
                <p className="p-4 block hover:bg-slate-100 rounded-xl">
                  <Link href="/admin">Administrateur</Link>
                </p>
              </li>
            )} */}
        </div>
        {/* </button> */}
      </button>
    </>
  );
};
export default BurgerMenu;
