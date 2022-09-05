import Image from "next/image";
import avatar from "./hacker.png";

import { selectAuthState, setAuthState } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

const UserMenu = () => {
    const authState = useSelector(selectAuthState);
    const dispatch = useDispatch();

    const handleClick = () => {
        console.log("*************** auth state ***************",authState)
        authState
            ? dispatch(setAuthState(false))
            : dispatch(setAuthState(true))

    }

    return <div className="w-12 h-12 rounded-full bg-slate-200 text-center align-middle" onClick={handleClick}>
        <Image src={avatar} height={40} width={40} alt="user"/>
    </div>
}

export default UserMenu;