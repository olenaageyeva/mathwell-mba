import React from "react";
import UserMenu from "../UserMenu/user-menu";
import HeaderLogo from "./header_logo";
import Logo from "./Logo";
import back from "./back.png"
import Image from "next/image";
import Link from "next/link";

interface Props {
    view: string;
    course?: string;
}

const Header = ({ view, course }: Props) =>
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
            : view==="course" ? <div className="m-2 bg-slate-100 rounded-full w-12 h-12 drop-shadow-lg">
                <Link href="/dashboard">
                    <Image src={back} width={40} height={40} alt="back" />
                </Link>
            </div> : <div className="m-2 bg-slate-100 rounded-full w-12 h-12 drop-shadow-lg">
                <Link href={`/course/${course}`}>
                    <Image src={back} width={40} height={40} alt="back"/>
                </Link>
            </div>
        }
        <div className="p-2">
            <UserMenu />
        </div>
    </div>

export default Header;