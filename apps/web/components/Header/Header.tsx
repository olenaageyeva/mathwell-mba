import React from "react";
import UserMenu from "../UserMenu/user-menu";
import { selectProgressState, setProgressState } from "../../store/progressSlice";
import { useDispatch, useSelector } from "react-redux";
import HeaderLogo from "./header_logo";
import Logo from "./Logo";
import back from "./back.png"
import Image from "next/image";
import Link from "next/link";
import green from "./red-hex.png"
import red from "./green-hex.png"
import hex from "./plain-hex.png"
import { useRouter } from 'next/router'

interface Props {
    view?: string;
    course?: string;
    index?: number;
    current?: number;
}


const Header = ({} : Props) => {
    const progress = useSelector(selectProgressState);
    const dispatch = useDispatch();
    console.log("progress: ", progress)

    const router = useRouter()
    const { pid, lid, index } = router.query
    const view = router.route.split("/").length < 4 ? router.route.split("/")[1] : "lesson";
    const course = String(pid)
    const lesson = String(lid)
    const current = Number(index) || 0;


    console.log("router", router)


    return < div className="bg-green-400 flex justify-between" >
        {view === "dashboard" &&
            <div className="flex align-middle">
                <div className="p-2 my-auto">
                    <HeaderLogo />
                </div>
                <div className="p-2 my-auto">
                    <Logo />
                </div>
            </div>
        }
        {
            (view === "course" || view === "profile") && <div className="m-2 bg-slate-100 rounded-full w-12 h-12 drop-shadow-lg cursor-pointer">
                <Link href="/dashboard">
                    <Image src={back} width={40} height={40} alt="back" />
                </Link>
            </div>
        }
        {
            view === "lesson" &&
            <>
                <div className="m-2 bg-slate-100 rounded-full w-12 h-12 drop-shadow-lg">
                    <Link href={`/course/${course}`}>
                        <Image src={back} width={40} height={40} alt="back" />
                    </Link>
                </div>

                <div className="w-48 flex justify-center my-auto flex-wrap">
                    {progress.map((item, index) => <Image src={item ? current === index ? hex : red : green} width={20} height={20} />)}
                </div>

            </>
        }
        <div className="p-2">
            <UserMenu />
        </div>
    </div >
}

export default Header;