import Image from "next/image";
import avatar from "./hacker.png";
import { userService } from '../../services';

import { selectAuthState, selectUser, setAuthState } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const UserMenu = () => {
    const authState = useSelector(selectAuthState);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleClick = () => {
        authState
            ? userService.logout()
            : dispatch(setAuthState(true))

            

    }

    return <div className="inline-flex">
        {authState && <p className="my-auto px-4">{`Hello ${user}!`}</p>}
        <div className="w-12 h-12 rounded-full bg-slate-200 text-center align-middle cursor-pointer relative" >
            <div className="peer">
                <Link href="/profile">
                    <Image src={avatar} height={40} width={40} alt="user" />
                </Link>
            </div>
            <div className="bg-slate-50 p-4 w-[200px] absolute top-12 right-0 text-left rounded-md hidden peer-hover:flex hover:flex
         flex-col drop-shadow-lg">
                <div>
                    <Link href="/profile">Account</Link>
                </div>
                <div>
                    <Link href="/profile">Profile</Link>
                </div>
                <div>
                    <Link href="/profile">Preferences</Link>
                </div>
                <div onClick={handleClick}>
                    {authState ? "Sign Out" : "Sign In"}
                </div>
            </div>
        </div>


    </div>
}

export default UserMenu;