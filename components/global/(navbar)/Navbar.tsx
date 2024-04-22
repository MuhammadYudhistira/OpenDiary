import Link from "next/link";
import React, { ReactElement } from "react";
import NavbarButton from "./NavbarButton";

const Navbar = (): ReactElement => {
  return (
    <div className="navbar bg-base-100">
      <div className="container flex mx-auto justify-between">
        <Link href="/" className="text-xl font-bold">
          OpenDiary
        </Link>
        <NavbarButton />
      </div>
    </div>
  );
};

export default Navbar;
