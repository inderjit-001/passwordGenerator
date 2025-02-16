import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex gap-2 p-2">
      <NavLink to="passg " className="text-white">
        Password Generator
      </NavLink>
      <NavLink to="otpg" className="text-white">
        Otp Generator
      </NavLink>
      <Outlet />
    </div>
  );
}

export default Layout;
