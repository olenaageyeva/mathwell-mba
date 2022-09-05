import React from "react";
import UserMenu from "../UserMenu/user-menu";
import HeaderLogo from "./header_logo";
import Logo from "./Logo";
import back from "./back.png"
import Image from "next/image";
import Link from "next/link";

interface Props {
    view: string;
}

const Header = ({ view }: Props) =>
    <div className="bg-green-400 flex justify-between">
        {view === "dashboard" ?
            <div className="flex align-middle">
                <div className="p-2 my-auto">
                    <HeaderLogo />
                </div>
                <div className="p-2 my-auto">
                    <Logo />
                </div>
            </div>
            : <div className="m-2 bg-slate-100 rounded-full w-12 h-12 drop-shadow-lg">
                <Link href="/dashboard">
                    <Image src={back} width={40} height={40} />
                </Link>
            </div>
        }
        <div className="p-2">
            <UserMenu />
        </div>
    </div>

export default Header;