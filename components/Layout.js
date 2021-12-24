import React from "react";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

const Layout = ({children}) => {
  return (
    <div>
      <div className="hidden md:block sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="block md:hidden">
        <MobileMenu />
      </div>
      {children}
    </div>
  );
};

export default Layout;
