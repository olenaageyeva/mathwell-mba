import React from "react";
import HeaderLogo from "./header_logo";
import Logo from "./Logo";

const Header = () =>
    <div className="bg-green-400 w-full flex space-x-3 align-middle">
        <div className="w-12 p-1">
            <HeaderLogo />
        </div>
        <div className="my-auto">
            <Logo />
        </div>
    </div>

export default Header;