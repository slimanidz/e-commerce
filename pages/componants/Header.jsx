import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [home, setHome] = useState(false);
  const handleHome = () => {
    setHome(true);
    console.log(123);
  };
  return (
    <div className="flex justify-between p-5">
      <Link
        onClick={handleHome}
        className={home ? "bg-slate-400" : null}
        href="/"
      >
        Home
      </Link>
      <div className="flex gap-5">
        <Link href="/panier">pannie</Link>
        <Link href="/profil">profil</Link>
      </div>
    </div>
  );
};

export default Header;
